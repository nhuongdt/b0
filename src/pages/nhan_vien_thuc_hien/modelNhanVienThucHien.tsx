import * as React from 'react';
import { useState, useEffect } from 'react';
import './modelNhanVienThucHien.css';
import {
    Button,
    ButtonGroup,
    Stack,
    Typography,
    Grid,
    Box,
    TextField,
    IconButton,
    Select,
    MenuItem,
    FormControl,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Search } from '@mui/icons-material';
import utils from '../../utils/utils';
import { ReactComponent as Close } from '../../images/close-square.svg';
import { PagedResultDto } from '../../services/dto/pagedResultDto';

import NhanSuItemDto from '../../services/nhan-vien/dto/nhanSuItemDto';

import NhanVienService from '../../services/nhan-vien/nhanVienService';
import { dbDexie } from '../../lib/dexie/dexieDB';
import NhanVienThucHienDto from '../../services/nhan_vien_thuc_hien/NhanVienThucHienDto';
import HoaHongDichVuServices from '../../services/nhan_vien_thuc_hien/HoaHongDichVuServices';
import { ReactComponent as CheckIcon } from '../../images/checkIcon.svg';
import { ReactComponent as SearchIcon } from '../../images/search-normal.svg';
import nhanVienService from '../../services/nhan-vien/nhanVienService';
import { PagedNhanSuRequestDto } from '../../services/nhan-vien/dto/PagedNhanSuRequestDto';
import BadgeFistCharOfName from '../../components/Badge/FistCharOfName';
import DialogButtonClose from '../../components/Dialog/ButtonClose';
const ModelNhanVienThucHien = ({ triggerModal, handleSave }: any) => {
    const [isShow, setIsShow] = useState(false);
    const [txtSearch, setTxtSearch] = useState('');
    const [lstNhanVien, setLstNhanVien] = useState<NhanSuItemDto[]>([]);
    const [allNhanVien, setAllNhanVien] = useState<NhanSuItemDto[]>([]);
    const [lstNVThucHien, setLstNhanVienChosed] = useState<NhanVienThucHienDto[]>([]);

    useEffect(() => {
        if (triggerModal.isShow) {
            setIsShow(true);
            if (triggerModal.isNew) {
                // get from cthd cache
                setLstNhanVienChosed([...triggerModal.item.nhanVienThucHien]);
            } else {
                // get from db
                GetListNVThucHien_DichVu();
            }
        }
    }, [triggerModal]);
    const handleClose = () => {
        setIsShow(false);
    };
    const GetListNVThucHien_DichVu = () => {
        return null;
    };

    const GetListNhanVien = async () => {
        const data = await nhanVienService.getAll({
            filter: txtSearch,
            skipCount: 0,
            maxResultCount: 100
        } as PagedNhanSuRequestDto);
        const arrNV = [...data.items];
        arrNV.map((x: any) => {
            x['isChosed'] = false;
        });
        setAllNhanVien([...arrNV]);
        setLstNhanVien([...arrNV]);
    };

    React.useEffect(() => {
        GetListNhanVien();
    }, []);

    const SearchNhanVienClient = () => {
        if (!utils.checkNull(txtSearch)) {
            const txt = txtSearch.trim().toLowerCase();
            const txtUnsign = utils.strToEnglish(txt);
            const data = allNhanVien.filter(
                (x) =>
                    (x.maNhanVien !== null && x.maNhanVien.trim().toLowerCase().indexOf(txt) > -1) ||
                    (x.tenNhanVien !== null && x.tenNhanVien.trim().toLowerCase().indexOf(txt) > -1) ||
                    (x.soDienThoai !== null && x.soDienThoai.trim().toLowerCase().indexOf(txt) > -1) ||
                    (x.maNhanVien !== null && utils.strToEnglish(x.maNhanVien).indexOf(txtUnsign) > -1) ||
                    (x.tenNhanVien !== null && utils.strToEnglish(x.tenNhanVien).indexOf(txtUnsign) > -1) ||
                    (x.soDienThoai !== null && utils.strToEnglish(x.soDienThoai).indexOf(txtUnsign) > -1)
            );
            setLstNhanVien(data);
        } else {
            setLstNhanVien([...allNhanVien]);
        }
    };

    React.useEffect(() => {
        SearchNhanVienClient();
    }, [txtSearch]);

    const ChoseNhanVien = async (item: NhanSuItemDto) => {
        const hoahongDV = await HoaHongDichVuServices.GetHoaHongNV_theoDichVu(item.id, triggerModal.item.idDonViQuyDoi);

        const newNV = new NhanVienThucHienDto({
            idNhanVien: item.id,
            maNhanVien: item.maNhanVien,
            tenNhanVien: item.tenNhanVien,
            soDienThoai: item.soDienThoai,
            gioiTinh: item.gioiTinh,
            avatar: item.avatar
        });
        if (hoahongDV.length > 0) {
            newNV.ptChietKhau = hoahongDV[0].laPhanTram ? hoahongDV[0].giaTri : 0;
            newNV.chietKhauMacDinh = hoahongDV[0].giaTri;
            if (newNV.ptChietKhau > 0) {
                newNV.tienChietKhau = (newNV.ptChietKhau * triggerModal.item.thanhTienSauCK) / 100;
            } else {
                newNV.tienChietKhau = hoahongDV[0].giaTri * triggerModal.item.soLuong;
            }
        }
        // check exists
        const nvEX = lstNVThucHien.filter((x) => x.idNhanVien === newNV.idNhanVien);
        if (nvEX.length > 0) {
            // remove if chose again
            setLstNhanVienChosed(lstNVThucHien.filter((x) => x.idNhanVien !== newNV.idNhanVien));
        } else {
            setLstNhanVienChosed([newNV, ...lstNVThucHien]);
        }
    };

    const UpdateStatus = () => {
        const arrNV = lstNVThucHien.map((x) => {
            return x.idNhanVien;
        });
        setLstNhanVien(
            lstNhanVien.map((x) => {
                if (arrNV.includes(x.id)) {
                    return { ...x, isChosed: true };
                } else {
                    return { ...x, isChosed: false };
                }
            })
        );
    };

    useEffect(() => {
        UpdateStatus();
    }, [lstNVThucHien]);

    const onSave = () => {
        setIsShow(false);
        handleSave(lstNVThucHien);
    };

    return (
        <>
            <Dialog open={isShow} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>
                    <Typography className="modal-title">Chọn kỹ thuật viên</Typography>
                    <DialogButtonClose onClose={() => setIsShow(false)} />
                </DialogTitle>
                <DialogContent>
                    <TextField
                        size="small"
                        sx={{
                            width: '375px'
                        }}
                        type="search"
                        placeholder="Tìm kiếm"
                        value={txtSearch}
                        onChange={(event) => {
                            setTxtSearch(event.target.value);
                        }}
                        InputProps={{
                            startAdornment: <Search />
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        fontWeight="700"
                        color="#999699"
                        marginTop="20px"
                        marginBottom={'8px'}>
                        Danh sách kỹ thuật viên
                    </Typography>
                    <Grid container className="list-persons" spacing={2}>
                        {lstNhanVien?.map((person: any, index: any) => (
                            <Grid
                                className="person-item"
                                item
                                xs={12}
                                md={4}
                                lg={4}
                                key={index}
                                onClick={() => ChoseNhanVien(person)}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        position: 'relative',
                                        padding: '20px 12px',
                                        borderRadius: '8px',
                                        transition: '.4s',
                                        cursor: 'pointer',
                                        border: '1px solid #CDC9CD',
                                        borderColor: person.isChosed ? 'var(--color-main)' : '',

                                        '&:hover': {
                                            borderColor: 'var(--color-main)'
                                        },
                                        '& .Check-icon': {
                                            position: 'absolute',
                                            right: '-10px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            top: '-5px',
                                            zIndex: '2',
                                            transition: '.4s',
                                            opacity: person.isChosed ? '1' : '0'
                                        }
                                    }}>
                                    <Box
                                        bgcolor="#fff"
                                        className="Check-icon"
                                        sx={{
                                            '& svg': {
                                                verticalAlign: 'unset'
                                            }
                                        }}>
                                        <CheckCircleIcon sx={{ color: 'var(--color-main)' }} />
                                    </Box>
                                    <div className="person-avatar">
                                        {utils.checkNull(person?.avatar) ? (
                                            <BadgeFistCharOfName
                                                firstChar={utils.getFirstLetter(person?.tenNhanVien ?? '')}
                                            />
                                        ) : (
                                            <Avatar sx={{ width: 40, height: 40 }} src={person?.avatar} />
                                        )}
                                    </div>
                                    <Stack maxWidth="calc(100% - 50px)">
                                        <Typography
                                            title={person.tenNhanVien}
                                            variant="subtitle2"
                                            className="lableOverflow">
                                            {person.tenNhanVien}
                                        </Typography>
                                        <Typography variant="caption" className="person-position" color={'#333233'}>
                                            {person.tenChucVu}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            background: '#fff',
                            justifyContent: 'center',
                            position: 'sticky',
                            bottom: '0',
                            left: '0',
                            paddingTop: '30px'
                        }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#e6e1e6',
                                textTransform: 'capitalize'
                            }}
                            className=" btn-outline-hover"
                            onClick={() => setIsShow(false)}>
                            Hủy
                        </Button>
                        <Button
                            variant="contained"
                            className="btn-container-hover"
                            sx={{
                                background: '#7c3367',
                                textTransform: 'capitalize',
                                color: '#fff'
                            }}
                            onClick={onSave}>
                            Lưu
                        </Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    );
};
export default ModelNhanVienThucHien;
