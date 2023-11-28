import {
    Autocomplete,
    AutocompleteRenderInputParams,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    Grid,
    Switch,
    Box,
    TextField,
    Typography,
    Stack,
    FormGroup,
    Checkbox
} from '@mui/material';
import { Form, Formik } from 'formik';
import AppConsts, { ISelect, TypeAction } from '../../../../lib/appconst';
import { IOSSwitch } from '../../../../components/Switch/IOSSwitch';
import { useEffect, useState } from 'react';
import { MauTinSMSDto } from '../../../../services/sms/mau_tin_sms/mau_tin_dto';
import * as yup from 'yup';
import MauTinSMService from '../../../../services/sms/mau_tin_sms/MauTinSMService';
import utils from '../../../../utils/utils';
import SnackbarAlert from '../../../../components/AlertDialog/SnackbarAlert';
import DialogButtonClose from '../../../../components/Dialog/ButtonClose';
import { Guid } from 'guid-typescript';
import SelectWithData from '../../../../components/Select/SelectWithData';
import { ExpandMoreOutlined } from '@mui/icons-material';

const ModalSmsTemplate = ({ visiable, onCancel, idMauTin, objMauTinOld, onOK }: any) => {
    const [objMauTin, setObjMauTin] = useState<MauTinSMSDto>(new MauTinSMSDto({ id: '', trangThai: 1 }));
    const [objAlert, setObjAlert] = useState({ show: false, type: 1, mes: '' });
    const [expandAction, setExpandAction] = useState(false);

    useEffect(() => {
        if (visiable) {
            if (utils.checkNull(idMauTin)) {
                setObjMauTin(new MauTinSMSDto({}));
            } else {
                setObjMauTin({
                    ...objMauTin,
                    id: objMauTinOld.id,
                    idLoaiTin: objMauTinOld.idLoaiTin,
                    tenMauTin: objMauTinOld.tenMauTin,
                    noiDungTinMau: objMauTinOld.noiDungTinMau,
                    laMacDinh: objMauTinOld.laMacDinh,
                    trangThai: objMauTinOld.trangThai
                });
            }
        }
    }, [visiable]);

    const rules = yup.object().shape({
        tenMauTin: yup.string().required('Vui lòng nhập tên mẫu tin'),
        noiDungTinMau: yup.string().required('Vui lòng nhập nội dung mẫu tin')
    });

    const saveMauTin = async (params: MauTinSMSDto) => {
        if (utils.checkNull(params.id)) {
            params.id = Guid.EMPTY;
            const data = await MauTinSMService.CreateMauTinSMS(params);
            params.id = data.id;
            onOK(params, TypeAction.INSEART);
            setObjAlert({ ...objAlert, show: true, mes: 'Thêm mới mẫu tin thành công' });
        } else {
            await MauTinSMService.UpdateMauTinSMS(params);
            onOK(params, TypeAction.UPDATE);
            setObjAlert({ ...objAlert, show: true, mes: 'Cập nhật mẫu tin thành công' });
        }
    };

    return (
        <>
            <SnackbarAlert
                showAlert={objAlert.show}
                type={objAlert.type}
                title={objAlert.mes}
                handleClose={() => setObjAlert({ show: false, mes: '', type: 1 })}></SnackbarAlert>

            <Dialog open={visiable} onClose={onCancel}>
                <DialogTitle>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography className="modal-title">
                            {utils.checkNull(idMauTin) ? 'Thêm mới' : 'Cập nhật'} mẫu tin{' '}
                        </Typography>
                        <DialogButtonClose onClose={onCancel}></DialogButtonClose>
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ overflow: 'hidden' }}>
                    <Formik enableReinitialize initialValues={objMauTin} validationSchema={rules} onSubmit={saveMauTin}>
                        {({ values, handleChange, errors, touched, isSubmitting, setFieldValue }) => (
                            <Form>
                                <Grid container spacing={2} paddingTop={1}>
                                    <Grid item xs={12}>
                                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                            <Typography variant="body2">Kích hoạt</Typography>
                                            <IOSSwitch
                                                sx={{ m: 1 }}
                                                value={values.trangThai}
                                                checked={values.trangThai == 1 ? true : false}
                                                onChange={() => {
                                                    const newVal = values.trangThai == 1 ? 0 : 1;
                                                    setFieldValue('trangThai', newVal);
                                                }}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <SelectWithData
                                            label="Loại tin"
                                            data={AppConsts.smsLoaiTin}
                                            idChosed={values.idLoaiTin}
                                            handleChange={(item: ISelect) => {
                                                setFieldValue('idLoaiTin', item.value);
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="tenMauTin"
                                            label="Tiêu đề"
                                            value={values?.tenMauTin}
                                            onChange={handleChange}
                                            size="small"
                                            fullWidth
                                            helperText={
                                                touched.tenMauTin && errors.tenMauTin && <span>{errors.tenMauTin}</span>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="noiDungTinMau"
                                            label="Nội dung"
                                            size="small"
                                            fullWidth
                                            value={values?.noiDungTinMau}
                                            onChange={handleChange}
                                            multiline
                                            minRows={3}
                                            maxRows={4}
                                            helperText={
                                                touched.noiDungTinMau &&
                                                errors.noiDungTinMau && <span>{errors.noiDungTinMau}</span>
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Button
                                                variant="contained"
                                                endIcon={<ExpandMoreOutlined />}
                                                onClick={() => setExpandAction(!expandAction)}>
                                                Chèn
                                            </Button>

                                            <Box
                                                sx={{
                                                    display: expandAction ? '' : 'none',
                                                    overflow: 'auto',
                                                    maxHeight: '180px',
                                                    position: 'absolute',
                                                    borderRadius: '4px',
                                                    border: '1px solid #cccc',
                                                    minWidth: 160,
                                                    backgroundColor: 'rgba(248,248,248,1)',
                                                    '& .MuiStack-root .MuiStack-root:hover': {
                                                        backgroundColor: '#cccc'
                                                    }
                                                }}>
                                                <Stack alignContent={'center'}>
                                                    {AppConsts.DanhSachBienSMS?.map((item: ISelect, index: number) => (
                                                        <Stack
                                                            direction={'row'}
                                                            key={index}
                                                            spacing={1}
                                                            padding={'6px'}
                                                            onClick={() => {
                                                                const content = values.noiDungTinMau?.concat(
                                                                    item.value.toString()
                                                                );
                                                                setFieldValue('noiDungTinMau', content);
                                                                setExpandAction(false);
                                                            }}>
                                                            <Typography variant="subtitle2" marginLeft={1}>
                                                                {item.text}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        checked={values.laMacDinh}
                                                        onChange={(event) => {
                                                            setFieldValue('laMacDinh', !values.laMacDinh);
                                                        }}
                                                        sx={{
                                                            color: '#7C3367',
                                                            '&.Mui-checked': {
                                                                color: '#7C3367'
                                                            }
                                                        }}
                                                    />
                                                }
                                                label="Là mẫu mặc định"
                                            />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                                <DialogActions sx={{ padding: '16px 0px 0px !important' }}>
                                    <Button
                                        onClick={onCancel}
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'unset',
                                            color: 'var(--color-main)'
                                        }}
                                        className="btn-outline-hover">
                                        Hủy
                                    </Button>
                                    {!isSubmitting ? (
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{
                                                fontSize: '14px',
                                                textTransform: 'unset',
                                                color: '#fff',

                                                border: 'none'
                                            }}
                                            className="btn-container-hover">
                                            Lưu
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                fontSize: '14px',
                                                textTransform: 'unset',
                                                color: '#fff',

                                                border: 'none'
                                            }}
                                            className="btn-container-hover">
                                            Đang lưu
                                        </Button>
                                    )}
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default ModalSmsTemplate;
