import { IFileDto } from '../../dto/FileDto';
import http from '../../httpService';
import { PagedBaoCaoBanHangRequestDto } from './dto/PagedBaoCaoBanHangRequestDto';
import { PagedBaoCaoLichHenRequestDto } from './dto/PagedBaoCaoLichHenRequestDto';
import { PagedBaoCaoTaiChinhDto } from './dto/PagedBaoCaoTaiChinhDto';

class BaoCaoSevice {
    async getBaoCaoBanHangTongHop(input: PagedBaoCaoBanHangRequestDto) {
        const response = await http.post('api/services/app/BaoCao/GetBaoCaoBanHangTongHop', input);
        return response.data.result;
    }
    async getBaoCaoBanHangChiTiet(input: PagedBaoCaoBanHangRequestDto) {
        const response = await http.post('api/services/app/BaoCao/GetBaoCaoBanHangChiTiet', input);
        return response.data.result;
    }
    async getBaoCaoLichHen(input: PagedBaoCaoLichHenRequestDto) {
        const response = await http.post('api/services/app/BaoCao/GetBaoCaoLichHen', input);
        return response.data.result;
    }
    async getBaoCaoTaiChinh_ThuChiTienMat(input: PagedBaoCaoBanHangRequestDto) {
        const response = await http.post('api/services/app/BaoCao/GetBaoCaoSoQuy_TienMat', input);
        return response.data.result;
    }
    async getBaoCaoTaiChinh_ThuChiNganHang(input: PagedBaoCaoLichHenRequestDto) {
        const response = await http.post('api/services/app/BaoCao/GetBaoCaoSoQuy_NganHang', input);
        return response.data.result;
    }
    public async exportBaoCaoBanHangTongHop(input: PagedBaoCaoBanHangRequestDto): Promise<IFileDto> {
        const response = await http.post(`api/services/app/BaoCao/ExportBaoCaoBanHangTongHop`, input);
        return response.data.result;
    }
    public async exportBaoCaoBanHangChiTiet(input: PagedBaoCaoBanHangRequestDto): Promise<IFileDto> {
        const response = await http.post(`api/services/app/BaoCao/ExportBaoCaoBanHangChiTiet`, input);
        return response.data.result;
    }
    public async exportBaoCaoLichHen(input: PagedBaoCaoLichHenRequestDto): Promise<IFileDto> {
        const response = await http.post(`api/services/app/BaoCao/ExportBaoCaoLichHen`, input);
        return response.data.result;
    }
    public async exportBaoCaoTaiChinh_ThuChiTienMat(input: PagedBaoCaoTaiChinhDto): Promise<IFileDto> {
        const response = await http.post(`api/services/app/BaoCao/ExportBaoCaoSoQuy_TienMat`, input);
        return response.data.result;
    }
    public async exportBaoCaoTaiChinh_ThuChiNganHang(input: PagedBaoCaoTaiChinhDto): Promise<IFileDto> {
        const response = await http.post(`api/services/app/BaoCao/ExportBaoCaoSoQuy_NganHang`, input);
        return response.data.result;
    }
}
export default new BaoCaoSevice();
