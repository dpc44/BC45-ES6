import { ListPerson } from "../models/ListPerson.js";
import { SinhVien, NhanVien, KhachHang } from "../models/Person.js";
let listPerson = new ListPerson();


document.querySelector('#btnThemSinhVien').onclick = function (event) {
    let sinhVienMoi = new SinhVien();
    let arrInput = document.querySelectorAll('#frmSinhVien input, #frmSinhVien textarea');
    var validation = true;
    for (let input of arrInput) {
        let { id, value } = input;

        sinhVienMoi[id] = value;
        var validation = validation & validationForm(value, id, 'SinhVien');
        

        // console.log(id, value);
    }
    if (!validation) {
        return;
    }
    listPerson.themPerson(sinhVienMoi);
    // console.log(listPerson.mangPerson);
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmSinhVien').reset();
}






document.querySelector('#btnThemNhanVien').onclick = function (event) {
    let nhanVienMoi = new NhanVien();
    let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien textarea');
    var validation = true;
    for (let input of arrInput) {
        let { id, value } = input;

        nhanVienMoi[id] = value;
        var validation = validation & validationForm(value, id,'NhanVien');
        

    }
    if (!validation) {
        return;
    }

    listPerson.themPerson(nhanVienMoi);

    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmNhanVien').reset();
}

document.querySelector('#btnThemKhachHang').onclick = function (event) {
    let khachHangMoi = new KhachHang();
    let arrInput = document.querySelectorAll('#frmKhachHang input, #frmKhachHang textarea');
    var validation = true;
    for (let input of arrInput) {
        let { id, value } = input;

        khachHangMoi[id] = value;

        var validation = validation & validationForm(value, id,'KhachHang');
        

    }
    if (!validation) {
        return;
    }
    listPerson.themPerson(khachHangMoi);

    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmKhachHang').reset();
}



function validationForm(value, id, person) {
    var validation = true;
    switch (id) {
        case "ID":
            validation = kiemTraRong(value, id,person) & kiemTraDoDai(value,id,person,3,6)
            &kiemTraID(value,id,person,listPerson.mangPerson);
            break;
        case "hoTen":
            validation = kiemTraRong(value, id,person) & kiemTraKyTu(value,id,person);
            break;
        case "diaChi":
            validation = kiemTraRong(value, id,person) ;
            break;
        case "email":
            validation = kiemTraRong(value, id,person) &kiemTraEmail(value,id,person);
            break;
        case "Toan":
        case "Ly": 
        case"Hoa":
            validation = kiemTraRong(value, id,person) &kiemTraSo(value,id,person) 
            & kiemTraRange(value,id,person,0,10);
            break;
        case "ngayLamViec":
            validation = kiemTraRong(value, id,person)&kiemTraSo(value,id,person) 
            & kiemTraRange(value,id,person,0,31);
            break;
        case "luongNgay":
            validation = kiemTraRong(value, id,person)&kiemTraSo(value,id,person) 
            & kiemTraRange(value,id,person,0,10000000);
            break;
        case "tenCongTy":
            validation = kiemTraRong(value, id,person);
            break;
        case "hoaDon":
            validation = kiemTraRong(value, id,person) &kiemTraSo(value,id,person) 
            & kiemTraRange(value,id,person,0,1000000);
            break;
        case "danhGia":
            validation = kiemTraRong(value, id,person);
            break;
            
    }
    
    return validation;
}

window.onload = () => {
    listPerson.layPerson();
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
}


window.clearForm = () => {
    // console.log('hahah');
    // document.getElementById('frmKhachHang').reset();
    // document.getElementById('frmSinhVien').reset();
    // document.getElementById('frmNhanVien').reset();
    let formArry = document.querySelectorAll('form');
    for (let i of formArry) {
        i.reset();

        // console.log(i)
    }
    let IDarray = document.querySelectorAll('#ID');
    for (let i of IDarray) {
        i.disabled = false;
    }

    document.getElementById("btnThemSinhVien").disabled = false;
    document.getElementById("btnThemNhanVien").disabled = false;
    document.getElementById("btnThemKhachHang").disabled = false;
}

window.xoaPerson = (maID) => {
    if (listPerson.xoaPerson(maID)) {
        listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
        listPerson.luuPerson();
    }
}

window.chinhSua = (maID, loai) => {
    let personCanChinh = listPerson.laythongtinh(maID);
    document.getElementById("ID").disabled = true;

    if (loai == 'Sinh Viên') {
        document.getElementById("btnThemSinhVien").disabled = true;
        document.querySelector('#themSV').click();
        if (personCanChinh) {
            let arrInput = document.querySelectorAll('#frmSinhVien input, #frmSinhVien textarea');

            for (let input of arrInput) {
                let { id } = input;
                input.value = personCanChinh[id];
            }
        }
    } else if (loai == 'Nhân Viên') {
        document.getElementById("btnThemNhanVien").disabled = true;
        document.querySelector('#themNV').click();
        if (personCanChinh) {
            let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien textarea');

            for (let input of arrInput) {
                let { id } = input;
                input.value = personCanChinh[id];
            }
        }
    } else {
        document.getElementById("btnThemKhachHang").disabled = true;
        document.querySelector('#themKH').click();
        if (personCanChinh) {
            let arrInput = document.querySelectorAll('#frmKhachHang input, #frmKhachHang textarea');

            for (let input of arrInput) {
                let { id } = input;
                input.value = personCanChinh[id];
            }
        }
    }


}

document.querySelector('#btnLuuSinhVien').onclick = function () {
    let thongTinCapNhat = new SinhVien();
    let arrInput = document.querySelectorAll('#frmSinhVien input, #frmSinhVien textarea');
    for (let input of arrInput) {
        let { id } = input;
        thongTinCapNhat[id] = input.value;
    }
    listPerson.capNhatThongTin(thongTinCapNhat);
    listPerson.luuPerson();
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);

}

window.sapXep = (tag, name) => {
    var order = tag.getAttribute('order');
    // console.log("order: ", order);
    // console.log("name", name);

    let sinhvien = new SinhVien();
    let nhanvien = new NhanVien();
    let khachhang = new KhachHang();
    let arrayNew = [];
    let arrayScan = []
    let tukhoa = document.querySelector('#LoaiDS').value;
    if (tukhoa == 'all') {
        arrayScan = [...listPerson.mangPerson];
    } else {
        arrayScan = listPerson.LoaiDS(tukhoa);
    }
    for (let person of arrayScan) {

        let personMoi = { ...sinhvien, ...nhanvien, ...khachhang };
        personMoi = { ...personMoi, ...person };

        personMoi.alias = stringToSlug(person.hoTen);
        arrayNew.push(personMoi);
        // console.log("arrayNew: ", arrayNew);
    }




    var orderArrSV = _.orderBy(arrayNew, [name], [order]);
    if (order == 'asc') {
        tag.setAttribute('order', 'desc');
    } else {
        tag.setAttribute('order', 'asc');
    }
    listPerson.renderDanhSach('#tbodyPerson', orderArrSV);
}

document.querySelector('#LoaiDS').onchange = () => {
    let tukhoa = document.querySelector('#LoaiDS').value;
    let newArray = listPerson.LoaiDS(tukhoa);
    if (newArray.length == 0) {
        listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    } else {
        listPerson.renderDanhSach('#tbodyPerson', newArray);
    }



}