import React, { ChangeEventHandler } from 'react';
import { GetAllTenantOutput } from '../../../services/tenant/dto/getAllTenantOutput';
import { Box, Grid, Typography, TextField, Button, IconButton, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import AppComponentBase from '../../../components/AppComponentBase';
import tenantService from '../../../services/tenant/tenantService';

import '../../../custom.css';
import AddIcon from '../../../images/add.svg';
import CreateOrEditTenant from './components/create-or-edit-tenant';
import ConfirmDelete from '../../../components/AlertDialog/ConfirmDelete';
import CreateTenantInput from '../../../services/tenant/dto/createTenantInput';
import { ReactComponent as IconSorting } from '../../../images/column-sorting.svg';
import { ReactComponent as SearchIcon } from '../../../images/search-normal.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { TextTranslate } from '../../../components/TableLanguage';
import ActionMenuTable from '../../../components/Menu/ActionMenuTable';
import CustomTablePagination from '../../../components/Pagination/CustomTablePagination';
import { enqueueSnackbar } from 'notistack';
import abpCustom from '../../../components/abp-custom';
import { fontWeight } from '@mui/system';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITenantProps {}

class TenantScreen extends AppComponentBase<ITenantProps> {
    state = {
        modalVisible: false,
        maxResultCount: 10,
        skipCount: 0,
        tenantId: 0,
        filter: '',
        listTenant: [] as GetAllTenantOutput[],
        totalCount: 0,
        currentPage: 1,
        totalPage: 0,
        startIndex: 1,
        createOrEditTenant: {
            isActive: true,
            name: '',
            adminEmailAddress: '',
            connectionString: '',
            tenancyName: ''
        } as CreateTenantInput,
        isShowConfirmDelete: false,
        anchorEl: null,
        selectedRowId: 0,
        rowSelectedModel: [] as GridRowSelectionModel
    };

    async componentDidMount() {
        await this.getAll();
    }

    async getAll() {
        const tenants = await tenantService.getAll({
            maxResultCount: this.state.maxResultCount,
            skipCount: this.state.currentPage,
            keyword: this.state.filter
        });
        this.setState({
            listTenant: tenants.items,
            totalCount: tenants.totalCount,
            totalPage: Math.ceil(tenants.totalCount / this.state.maxResultCount)
        });
    }

    handlePageChange = async (event: any, value: any) => {
        this.setState({
            currentPage: value,
            skipCount: value
        });
        this.getAll();
    };
    handlePerPageChange = async (event: SelectChangeEvent<number>) => {
        await this.setState({
            maxResultCount: parseInt(event.target.value.toString(), 10),
            currentPage: 1,
            skipCount: 1
        });
        this.getAll();
    };
    handleSearch: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event: any) => {
        const filter = event.target.value;
        this.setState({ filter: filter }, async () => this.getAll());
    };
    Modal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    };

    createOrUpdateModalOpen = async (entityDto: number) => {
        if (entityDto === 0) {
            await this.setState({
                createOrEditTenant: {
                    isActive: true,
                    name: '',
                    adminEmailAddress: '',
                    connectionString: '',
                    tenancyName: ''
                }
            });
        } else {
            const createOrEdit = await tenantService.getForEdit(entityDto);
            await this.setState({
                createOrEditTenant: {
                    isActive: createOrEdit.isActive,
                    name: createOrEdit.name,
                    tenancyName: createOrEdit.tenancyName,
                    adminEmailAddress: '',
                    connectionString: createOrEdit.connectionString
                }
            });
        }

        this.setState({ tenantId: entityDto });
        this.Modal();
    };
    onShowDelete = () => {
        this.setState({
            isShowConfirmDelete: !this.state.isShowConfirmDelete
        });
    };
    onOkDelete = () => {
        this.delete(this.state.selectedRowId);
        this.onShowDelete();
    };
    async delete(input: number) {
        const deleteResult = await tenantService.delete(input);
        deleteResult != null
            ? enqueueSnackbar('Xóa bản ghi thành công', {
                  variant: 'success',
                  autoHideDuration: 3000
              })
            : enqueueSnackbar('Có lỗi sảy ra vui lòng thử lại sau!', {
                  variant: 'error',
                  autoHideDuration: 3000
              });
        this.getAll();
    }

    handleCreate = () => {
        this.getAll();
        this.Modal();
    };
    handleOpenMenu = (event: any, rowId: any) => {
        this.setState({ anchorEl: event.currentTarget, selectedRowId: rowId });
    };

    handleCloseMenu = async () => {
        await this.setState({ anchorEl: null, selectedRowId: 0 });
        await this.getAll();
    };
    handleEdit = () => {
        // Handle Edit action
        this.createOrUpdateModalOpen(this.state.selectedRowId ?? 0);
        this.handleCloseMenu();
    };
    handleView = () => {
        // Handle View action
        this.handleCloseMenu();
    };
    render(): React.ReactNode {
        const columns = [
            {
                field: 'name',
                headerName: 'Tên cửa hàng',
                minWidth: 125,
                flex: 1,
                renderHeader: (params: any) => (
                    <Box sx={{ fontWeight: '700' }} title={params.value}>
                        {params.colDef.headerName}
                    </Box>
                ),
                renderCell: (params: any) => (
                    <Box
                        sx={{
                            fontSize: '13px',
                            width: '100%',
                            textAlign: 'left',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight: '400',
                            fontFamily: 'Roboto'
                        }}
                        title={params.value}>
                        {params.value}
                    </Box>
                )
            },
            {
                field: 'tenancyName',
                headerName: 'Tenant Id',
                minWidth: 125,
                flex: 1,
                renderHeader: (params: any) => (
                    <Box sx={{ fontWeight: '700' }} title={params.colDef.headerName}>
                        {params.colDef.headerName}
                    </Box>
                ),
                renderCell: (params: any) => (
                    <Box
                        sx={{
                            fontSize: '13px',
                            width: '100%',
                            textAlign: 'left',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight: '400',
                            fontFamily: 'Roboto'
                        }}
                        title={params.value}>
                        {params.value}
                    </Box>
                )
            },
            {
                field: 'isActive',
                headerName: 'Trạng thái',
                minWidth: 100,
                flex: 1,
                renderHeader: (params: any) => (
                    <Box sx={{ fontWeight: '700' }} title={params.colDef.headerName}>
                        {params.colDef.headerName}
                    </Box>
                ),
                renderCell: (params: any) => (
                    <Box
                        sx={{
                            padding: '4px 8px',
                            borderRadius: '100px',
                            color: 'rgb(0, 158, 247)',
                            bgcolor: 'rgb(241, 250, 255)',
                            fontSize: '13px',
                            fontWeight: '400',
                            fontFamily: 'Roboto',
                            textAlign: 'left',
                            display: 'flex',
                            justifyContent: 'left'
                        }}>
                        {params.value == true ? 'Hoạt động' : 'Ngừng hoạt động'}
                    </Box>
                )
            },
            {
                field: 'action',
                headerName: 'Hành động',
                maxWidth: 60,
                flex: 1,
                disableColumnMenu: true,
                renderCell: (params: any) => (
                    <Box>
                        <IconButton
                            aria-label="Actions"
                            aria-controls={`actions-menu-${params.row.id}`}
                            aria-haspopup="true"
                            onClick={(event) => {
                                this.handleOpenMenu(event, params.row.id);
                            }}>
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                ),
                renderHeader: (params: any) => <Box sx={{ display: 'none' }}>{params.colDef.headerName}</Box>
            }
        ];
        return (
            <Box sx={{ paddingTop: '16px' }}>
                <div>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <div>
                                <Box display="flex" gap="8px" alignItems="center">
                                    <Typography variant="h1" fontWeight="700" fontSize="16px" sx={{ marginTop: '4px' }}>
                                        Danh sách tenant
                                    </Typography>
                                    <Box>
                                        <TextField
                                            onChange={this.handleSearch}
                                            size="small"
                                            sx={{
                                                borderColor: '#E6E1E6!important',
                                                bgcolor: '#fff'
                                            }}
                                            placeholder="Tìm kiếm..."
                                            InputProps={{
                                                startAdornment: (
                                                    <SearchIcon
                                                        style={{
                                                            marginRight: '8px',
                                                            color: 'gray'
                                                        }}
                                                    />
                                                )
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div>
                                <Box display="flex" alignItems="center" gap="8px">
                                    <Button
                                        hidden={!abpCustom.isGrandPermission('Pages.Tenants.Create')}
                                        variant="contained"
                                        startIcon={<img src={AddIcon} />}
                                        size="small"
                                        sx={{
                                            height: '40px',
                                            fontSize: '14px',
                                            textTransform: 'unset',
                                            fontWeight: '400'
                                        }}
                                        onClick={() => {
                                            this.createOrUpdateModalOpen(0);
                                        }}
                                        className="btn-container-hover">
                                        Thêm tenant
                                    </Button>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <Box paddingTop="16px" className="page-content " sx={{ borderRadius: '8px' }}>
                    {this.state.rowSelectedModel.length > 0 ? (
                        <Box mb={1}>
                            <Button variant="contained" color="secondary">
                                Xóa {this.state.rowSelectedModel.length} bản ghi đã chọn
                            </Button>
                        </Box>
                    ) : null}
                    <DataGrid
                        rowHeight={46}
                        columns={columns}
                        rows={this.state.listTenant}
                        rowSelectionModel={this.state.rowSelectedModel || undefined}
                        onRowSelectionModelChange={(row) => {
                            this.setState({ rowSelectedModel: row });
                        }}
                        disableRowSelectionOnClick
                        checkboxSelection={false}
                        sx={{
                            '& .MuiDataGrid-columnHeader': {
                                background: '#EEF0F4'
                            }
                        }}
                        hideFooter
                        localeText={TextTranslate}
                    />
                    <ActionMenuTable
                        selectedRowId={this.state.selectedRowId}
                        anchorEl={this.state.anchorEl}
                        closeMenu={this.handleCloseMenu}
                        handleView={this.handleView}
                        permissionView=""
                        handleEdit={this.handleEdit}
                        permissionEdit="Pages.Tenants.Edit"
                        handleDelete={this.onShowDelete}
                        permissionDelete="Pages.Tenants.Delete"
                    />
                    <CustomTablePagination
                        currentPage={this.state.currentPage}
                        rowPerPage={this.state.maxResultCount}
                        totalRecord={this.state.totalCount}
                        totalPage={this.state.totalPage}
                        handlePerPageChange={this.handlePerPageChange}
                        handlePageChange={this.handlePageChange}
                    />
                </Box>
                <CreateOrEditTenant
                    formRef={this.state.createOrEditTenant}
                    visible={this.state.modalVisible}
                    modalType={this.state.tenantId === 0 ? 'Thêm mới tenant' : 'Cập nhật tenant'}
                    tenantId={this.state.tenantId}
                    onCancel={async () => {
                        this.setState({
                            modalVisible: false
                        });
                        await this.getAll();
                    }}
                    onOk={this.handleCreate}
                />
                <ConfirmDelete
                    isShow={this.state.isShowConfirmDelete}
                    onOk={this.onOkDelete}
                    onCancel={this.onShowDelete}></ConfirmDelete>
            </Box>
        );
    }
}

export default TenantScreen;
