

function kiemTraID(value,name,person,array){

    let test = array.find(ele => ele[name].toUpperCase()== value.toUpperCase());
    if(test){
        document.querySelector(`#error-checked-${name}-${person}`).innerHTML = `${name} đã tồn tại !`;
        return false;
    }
    document.querySelector(`#error-checked-${name}-${person}`).innerHTML = '';
    return true;
}
function kiemTraRong(value, name, person) {

    if (value.trim() === '') {
        document.querySelector(`#error-required-${name}-${person}`).innerHTML = `${name} không được bỏ trống !`;
        return false;
    }

    // console.log(value,name,person);
    document.querySelector(`#error-required-${name}-${person}`).innerHTML = '';
    return true;
}


function kiemTraEmail(value, name, person) {
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(`#error-regex-${name}-${person}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}-${person}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}

function kiemTraSo(value, name, person) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(`#error-regex-${name}-${person}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}-${person}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}

function kiemTraKyTu(value, name, person) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(`#error-regex-${name}-${person}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}-${person}`).innerHTML = `${name} không hợp lệ !`;
    return false;

}




function kiemTraDoDai(value, name, person, minLength, maxLength) {

    if (value.trim().length < minLength || value.trim().length > maxLength) {
        document.querySelector(`#error-length-${name}-${person}`).innerHTML = `${name} từ ${minLength} - ${maxLength} ký tự !`;
        return false;
    }
    document.querySelector(`#error-length-${name}-${person}`).innerHTML = ``;
    return true;

}

function kiemTraRange(value, name, person, minValue, maxValue) {
    if (value < minValue || value > maxValue) {
        document.querySelector(`#error-length-${name}-${person}`).innerHTML = `${name} từ ${minValue} - ${maxValue} !`;
        return false;
    }
    document.querySelector(`#error-length-${name}-${person}`).innerHTML = ``;
    return true;
}

