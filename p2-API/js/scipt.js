

let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let salary = document.getElementById('salary');
let city = document.getElementById('city');
let submitEdit = document.getElementById('editData');

let editRow = null;

let fullNameErr = document.getElementById('fullNameValidationError');
let emailErr = document.getElementById('emailValidationError');
let salaryErr = document.getElementById('salaryValidationError');
let cityErr = document.getElementById('cityValidationError');
let salaryErr_regex = document.getElementById('salaryNumType');
let emailErr_regex = document.getElementById('emailValidate');
let invalidName = document.getElementById('invalidName');


function clearPreviousInput(){
    fullName.value = '';
    email.value = '';
    salary.value = '';
    city.value = ''; 
}

function hideError(){
    fullNameErr.classList.add("hide");
    emailErr.classList.add("hide");
    salaryErr.classList.add("hide");
    cityErr.classList.add("hide");
    salaryErr_regex.classList.add("hide");
    emailErr_regex.classList.add("hide");
    invalidName.classList.add("hide");
}

function checkValidationInput(validSalary,validEmail,validName){
        if(fullName.value == '' || validName == false){
            if(fullName.value == ''){
                fullNameErr.classList.remove("hide");
            }else{
                invalidName.classList.remove("hide");
            }
        }
        if(city.value == '') 
            cityErr.classList.remove("hide");
        if(validSalary == false || salary.value == ''){
            if(salary.value == '')
                salaryErr.classList.remove("hide");
            else
                salaryErr_regex.classList.remove("hide");
        }
        if(validEmail == false || email.value == ''){
            if(email.value == '')
                emailErr.classList.remove("hide");
            else
                emailErr_regex.classList.remove("hide");
        }
}


document.getElementById('insertData').addEventListener('click', function(){

    let checkSalary = /^[1-9][0-9,]*$/;
    let validSalary = checkSalary.test(salary.value);
    let checkEmail = /^[\w.-]+@\w+\.[a-z]{1,3}$/;
    let validEmail = checkEmail.test(email.value);
    let checkName = /^[a-zA-Z\s]*$/;
    let validName = checkName.test(fullName.value);

    hideError();

    if( fullName.value == '' || email.value == '' || salary.value == '' || city.value == ''  || !validSalary || !validEmail || !validName){

        checkValidationInput(validSalary,validEmail,validName);

        return; 
    }

    if(editRow == null){
        let tbody = document.getElementById('tbody');
        let empList = document.getElementById('employeeList');
        let row = tbody.insertRow(empList.length);
        row.insertCell(0).innerHTML = fullName.value;
        row.insertCell(1).innerHTML = email.value;
        row.insertCell(2).innerHTML = salary.value;
        row.insertCell(3).innerHTML = city.value;
        row.insertCell(4).innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';

        clearPreviousInput();

    }else{

        editRow.cells[0].innerHTML = fullName.value;
        editRow.cells[1].innerHTML = email.value;
        editRow.cells[2].innerHTML = salary.value;
        editRow.cells[3].innerHTML = city.value;
        editRow.cells[4].innerHTML = '<button onclick="editData(this)">Edit</button> <button onclick="deleteData(this)">Delete</button>';

        editRow = null;

        clearPreviousInput();
        
    }

});

function editData(tr){

    hideError();

    fullName.value = tr.parentElement.parentElement.cells[0].innerHTML;
    email.value = tr.parentElement.parentElement.cells[1].innerHTML;
    salary.value = tr.parentElement.parentElement.cells[2].innerHTML;
    city.value = tr.parentElement.parentElement.cells[3].innerHTML;

    editRow = tr.parentElement.parentElement;

}

function deleteData(tr){
    let row = tr.parentElement.parentElement;
    row.remove();

    clearPreviousInput();
}