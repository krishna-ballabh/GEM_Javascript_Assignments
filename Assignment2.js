
let userName, email, number;
let isName, isEmail, isNumber;
let counter = 1;

function validate() {
    isName = false
    isEmail = false
    isNumber = false
    userName = document.getElementById("names").value;
    email = document.getElementById("Email").value;
    number = document.getElementById("pno").value;
    checkInput();
}

function checkInput(){
    var nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/;
    const pnoRegex = /^\d{10}$/;
    if(nameRegex.test(userName) && userName.length != 0){
        isName = true;
        document.getElementById('invalid-name').style.display = "none";
    }
    else{
        isName = false;
        document.getElementById('invalid-name').style.display = "block";
    }
    if(emailRegex.test(email) && email.length != 0){
        isEmail = true;
        document.getElementById('invalid-email').style.display = "none";
    }
    else{
        isEmail = false;
        document.getElementById('invalid-email').style.display = "block";
    }
    if(pnoRegex.test(number) ){
        isNumber = true;
        document.getElementById('invalid-pno').style.display = "none";
    }
    else{
        isNumber = false;
        document.getElementById('invalid-pno').style.display = "block";
    }
    if(isName && isEmail && isNumber){
        saveItems();
    }

}
function saveItems(){
    localStorage.setItem(counter+"name",userName);
    localStorage.setItem(counter+"email", email);
    localStorage.setItem(counter+"number",number);
    showItemsInTable();
}
function showItemsInTable(){
    const table = document.getElementById('table');
    let row = document.createElement('tr');
    let col1 = document.createElement('td');
    col1.innerHTML = `${counter}`;
    let col2 = document.createElement('td');
    col2.innerHTML = `${localStorage.getItem(counter+"name")}`;
    let col3 = document.createElement('td');
    col3.innerHTML = `${localStorage.getItem(counter+"email")}`;
    let col4 = document.createElement('td');
    col4.innerHTML = `${localStorage.getItem(counter+"number")}`;
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);  
    row.appendChild(col4);

    const tbody = document.getElementById('tbody');
    tbody.appendChild(row);
    document.getElementById("form").reset();
}