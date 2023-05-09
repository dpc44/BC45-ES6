import { SinhVien, NhanVien, KhachHang } from "./Person.js";



export class ListPerson {
    mangPerson = [];
    themPerson(personMoi) {
        this.mangPerson.push(personMoi);
        return this.mangPerson;
    }

    luuPerson() {
        let sMangPerson = JSON.stringify(this.mangPerson);
        localStorage.setItem('Mang_Person', sMangPerson);
    }
    layPerson() {
        if (localStorage.getItem('Mang_Person')) {
            let mangPerson = JSON.parse(localStorage.getItem('Mang_Person'));
            this.mangPerson = mangPerson;
        }
    }

    renderDanhSach(selector, mangPerson) {
        let sinhvien = new SinhVien();
        let nhanvien = new NhanVien();
        let khachhang = new KhachHang();

        let trPerson = '';
        for (let person of mangPerson) {
            let personMoi = { ...sinhvien, ...nhanvien, ...khachhang };
            personMoi = { ...personMoi, ...person };
            // console.log(personMoi);
            trPerson += `
            <tr>
                <td>${personMoi.Loai}</td>
                <td>${personMoi.ID}</td>
                <td>${personMoi.hoTen}</td>
                <td>${personMoi.diaChi}</td>
                <td>${personMoi.email}</td>
                <td>${personMoi.diemTrungBinh()}</td>
                <td>${personMoi.tinhLuong()}</td>
                <td>
                    <button class = "btn btn-danger" onclick="xoaPerson('${personMoi.ID}')">Xóa</button>
                    <button class = "btn btn-primary" onclick="chinhSua('${personMoi.ID}','${personMoi.Loai}')">Edit</button>
                </td>
            </tr>   
            `
        }

        document.querySelector(selector).innerHTML = trPerson;
        return trPerson;
    }
    xoaPerson(maID) {
        console.log('xoa');
        let indexDel = this.mangPerson.findIndex(pro => maID == pro.ID);
        console.log(indexDel);
        if (indexDel !== -1) {
            console.log(this.mangPerson);
            this.mangPerson.splice(indexDel, 1);

            return true;
        }
        return false;
    }
    laythongtinh(maID) {
        let mangMaID = this.mangPerson.find(pro => maID == pro.ID)
        return mangMaID;
    }

    capNhatThongTin(thongTinMoi) {
        let thongTinCapNhat = this.laythongtinh(thongTinMoi.ID);
        if (thongTinCapNhat) {
            for (let key in thongTinCapNhat) {
                thongTinCapNhat[key] = thongTinMoi[key];
            }
            return true;
        }
        return false;
    }

    LoaiDS(tukhoa) {
        tukhoa = stringToSlug(tukhoa);
        let newArray = [];
        for (let person of this.mangPerson) {
            if (stringToSlug(person.Loai).trim().search(tukhoa) == 0) {
                newArray.push(person);
            }
        }
        return newArray;
    }

    renderLuuLoaiPerson(tukhoa){
        
        
        let arrRender = this.LoaiDS(tukhoa);
        if(arrRender.length == 0){
            this.renderDanhSach('#tbodyPerson', this.mangPerson);
            this.luuPerson();
        }else{
            this.renderDanhSach('#tbodyPerson', arrRender);
            this.luuPerson();
        }
    
        
        
    }
    
    
}