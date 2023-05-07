class Person{
    ID = '';
    hoTen = '';
    diaChi = '';
    email = '';

}

export class SinhVien extends Person{
    Loai = 'Sinh Viên';
    Toan = 0;
    Ly = 0;
    Hoa = 0;
    diemTrungBinh = function(){
        let diemToan = +this.Toan;
        let diemLy = +this.Ly;
        let diemHoa = +this.Hoa;
        return (diemToan+diemLy+diemHoa)/3;
    }
}


export class NhanVien extends Person{
    Loai = 'Nhân Viên';
    ngayLamViec = 0;
    luongNgay = 0;
    tinhLuong = function(){
        let ngayLamViec = +this.ngayLamViec;
        let luongNgay = +this.luongNgay;
        return ngayLamViec * luongNgay;
    }
}

export class KhachHang extends Person{
    Loai = 'Khách Hàng';
    tenCongTy = '';
    hoaDon = 0;
    danhGia = '';
}



