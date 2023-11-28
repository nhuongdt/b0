import * as React from 'react';
import { useState } from 'react';
import { Autocomplete, Button, Grid, TextField, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TaiKhoanNganHangDto } from '../../services/so_quy/Dto/TaiKhoanNganHangDto';

export default function AutocompleteAccountBank({
    handleChoseItem,
    idChosed,
    listOption,
    handleClickBtnAdd,
    roleAdd = false
}: any) {
    const [itemChosed, setItemChosed] = useState<TaiKhoanNganHangDto | null>(null);
    React.useEffect(() => {
        const item = listOption.filter((x: TaiKhoanNganHangDto) => x.id == idChosed);
        if (item.length > 0) {
            setItemChosed(item[0]);
        } else {
            setItemChosed(null);
        }
    }, [idChosed]);

    const choseItem = (item: any) => {
        handleChoseItem(item);
    };

    return (
        <>
            <Autocomplete
                size="small"
                fullWidth
                disablePortal
                autoComplete
                multiple={false}
                value={itemChosed}
                onChange={(event: any, newValue: any) => choseItem(newValue)}
                filterOptions={(x) => x}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                options={[{ id: '', soTaiKhoan: '' } as TaiKhoanNganHangDto, ...listOption]}
                getOptionLabel={(option: any) =>
                    option.tenChuThe ? option.tenRutGon.concat(` - `, option.soTaiKhoan, ` - `, option.tenChuThe) : ''
                }
                renderInput={(params) => <TextField {...params} label="Tìm kiếm" />}
                renderOption={(props, option) => {
                    return (
                        <div key={option.id == '' ? 0 : option.id}>
                            <li {...props} key={option.id == '' ? 0 : option.id}>
                                {option.id == '' && roleAdd && (
                                    <Button
                                        key={0}
                                        sx={{
                                            color: 'var(--color-main)'
                                        }}
                                        variant="outlined"
                                        startIcon={<AddIcon />}
                                        fullWidth
                                        onClick={handleClickBtnAdd}>
                                        Thêm mới
                                    </Button>
                                )}
                                {option.id != '' && (
                                    <Grid
                                        item
                                        key={option.id}
                                        sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                        <Typography style={{ fontSize: '14px', fontWeight: 500 }}>
                                            {option.tenChuThe.toString().concat(` (`, `${option.soTaiKhoan}`, `)`)}
                                        </Typography>
                                        <Box
                                            component="span"
                                            style={{
                                                fontWeight: 500,
                                                color: '#acaca5',
                                                fontSize: '12px'
                                            }}>
                                            {option.tenNganHang.toString().concat(` ${option.maNganHang}`)}
                                        </Box>
                                    </Grid>
                                )}
                            </li>
                        </div>
                    );
                }}
            />
        </>
    );
}
