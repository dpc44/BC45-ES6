import { ListPerson } from "../models/ListPerson.js";
import { SinhVien, NhanVien, KhachHang } from "../models/Person.js";
let listPerson = new ListPerson();


document.querySelector('#btnThemSinhVien').onclick = function (event) {
    let sinhVienMoi = new SinhVien();
    let arrInput = document.querySelectorAll('#frmSinhVien input, #frmSinhVien textarea');

    for (let input of arrInput) {
        let { id, value } = input;

        sinhVienMoi[id] = value;


        console.log(id, value);
    }
    listPerson.themPerson(sinhVienMoi);
    console.log(listPerson.mangPerson);
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmSinhVien').reset();
}

document.querySelector('#btnThemNhanVien').onclick = function (event) {
    let nhanVienMoi = new NhanVien();
    let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien textarea');

    for (let input of arrInput) {
        let { id, value } = input;

        nhanVienMoi[id] = value;


        console.log(id, value);
    }
    listPerson.themPerson(nhanVienMoi);
    console.log(listPerson.mangPerson);
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmNhanVien').reset();
}

document.querySelector('#btnThemKhachHang').onclick = function (event) {
    let khachHangMoi = new KhachHang();
    let arrInput = document.querySelectorAll('#frmKhachHang input, #frmKhachHang textarea');

    for (let input of arrInput) {
        let { id, value } = input;

        khachHangMoi[id] = value;


        console.log(id, value);
    }
    listPerson.themPerson(khachHangMoi);
    console.log(listPerson.mangPerson);
    listPerson.renderDanhSach('#tbodyPerson', listPerson.mangPerson);
    listPerson.luuPerson();

    document.querySelector('#frmKhachHang').reset();
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
    for(let i of IDarray){
        i.disabled = false;
    }
    
    document.getElementById("btnThemSinhVien").disabled=false;
    document.getElementById("btnThemNhanVien").disabled=false;
    document.getElementById("btnThemKhachHang").disabled=false;
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
        if(personCanChinh){
            let arrInput = document.querySelectorAll('#frmSinhVien input, #frmSinhVien textarea');
            
            for(let input of arrInput){
                let {id} = input;
                input.value = personCanChinh[id];
            }
        }
    } else if (loai == 'Nhân Viên') {
        document.getElementById("btnThemNhanVien").disabled = true;
        document.querySelector('#themNV').click();
        if(personCanChinh){
            let arrInput = document.querySelectorAll('#frmNhanVien input, #frmNhanVien textarea');
            
            for(let input of arrInput){
                let {id} = input;
                input.value = personCanChinh[id];
            }
        }
    } else {
        document.getElementById("btnThemKhachHang").disabled = true;
        document.querySelector('#themKH').click();
        if(personCanChinh){
            let arrInput = document.querySelectorAll('#frmKhachHang input, #frmKhachHang textarea');
            
            for(let input of arrInput){
                let {id} = input;
                input.value = personCanChinh[id];
            }
        }
    }

    
}
