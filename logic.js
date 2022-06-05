let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('output').appendChild(table);
// Adding the entire table to the body tag
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Full name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Email";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Address";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "City";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "State";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Zip";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "Name on Card";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "Credit card number";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "Exp Month";
let heading_10 = document.createElement('th');
heading_10.innerHTML = "Exp Year";
let heading_11 = document.createElement('th');
heading_11.innerHTML = "CVV";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
row_1.appendChild(heading_10);
row_1.appendChild(heading_11);
thead.appendChild(row_1);

function validateForm(){
    let fullName = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    let address = document.forms["myForm"]["address"].value;
    let city = document.forms["myForm"]["city"].value;
    let state = document.forms["myForm"]["state"].value;
    let zip = document.forms["myForm"]["zip"].value;
    let nameOfCard =  document.forms["myForm"]["nameOfCard"].value;
    let creditCardNum = document.forms["myForm"]["creditCardNum"].value;
    let expMonth = document.forms["myForm"]["expMonth"].value;
    let expYear = document.forms["myForm"]["expYear"].value;
    let cvv = document.forms["myForm"]["cvv"].value;
}
function submitButton(){
    let fullName = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let nameOfCard = document.getElementById("nameOfCard").value;
    let creditCardNum = document.getElementById("creditCardNum").value;
    let expMonth = document.getElementById("expMonth").value;
    let expYear = document.getElementById("expYear").value;
    let cvv = document.getElementById("cvv").value;
    let value = [fullName,email,address,city,state,zip,nameOfCard,creditCardNum,expMonth,expYear,cvv];
    let row_2 = document.createElement('tr');
    for(let i=0;i<value.length;i++){
        let row_2_data_1 = document.createElement('td');
        row_2_data_1.innerHTML = value[i];
        row_2.appendChild(row_2_data_1);
    }  
    tbody.append(row_2);
}
