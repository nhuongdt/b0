import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';
import utils from '../../utils/utils';
import React from 'react';
import { ReactComponent as DateIcon } from '../../images/calendarMenu.svg';
import { viVN } from '@mui/x-date-pickers/locales';
export default function DatePickerRequireCustom({ defaultVal, handleChangeDate, props }: any) {
    const today = new Date();
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<Date | null>(new Date(format(today, 'yyyy-MM-01')));
    const changeDate = (newVal: any) => {
        if (new Date(newVal).toString() === 'Invalid Date') return;
        handleChangeDate(format(new Date(newVal), 'yyyy-MM-dd'));
        setValue(newVal);
    };
    const onOpen = () => {
        setOpen(!open);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (utils.checkNull(defaultVal)) {
            setValue(null);
        } else {
            setValue(new Date(defaultVal));
        }
    }, [defaultVal]);

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={vi}
                localeText={viVN.components.MuiLocalizationProvider.defaultProps.localeText}>
                <DatePicker
                    label={props?.label}
                    slotProps={{
                        textField: {
                            size: props?.size,
                            error: props?.error,
                            helperText: props?.helperText,
                            InputProps: {
                                startAdornment: (
                                    <React.Fragment>
                                        <DateIcon
                                            onClick={onOpen}
                                            style={{
                                                marginRight: '8px'
                                            }}
                                        />
                                    </React.Fragment>
                                )
                            }
                        }
                    }}
                    disableOpenPicker={!open}
                    open={open}
                    onClose={onClose}
                    onOpen={onOpen}
                    dayOfWeekFormatter={(day: string) => {
                        if (day.length > 2) {
                            const dayOfWeek = day.substring(day.length - 1);
                            let sDay = '';
                            switch (dayOfWeek) {
                                case '2':
                                    sDay = 'Hai';
                                    break;
                                case '3':
                                    sDay = 'Ba';
                                    break;
                                case '4':
                                    sDay = 'Tư';
                                    break;
                                case '5':
                                    sDay = 'Năm';
                                    break;
                                case '6':
                                    sDay = 'Sáu';
                                    break;
                                case '7':
                                    sDay = 'Bảy';
                                    break;
                            }
                            return sDay;
                        } else {
                            return day;
                        }
                    }}
                    sx={{
                        width: props?.width,
                        '& .MuiSvgIcon-root': {
                            display: 'none'
                        }
                    }}
                    value={value}
                    onChange={(newVal) => changeDate(newVal)}
                />
            </LocalizationProvider>
        </>
    );
}
