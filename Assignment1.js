(function () {
    let table = document.createElement('table');
    table.style.width = "50vw";
    table.setAttribute("border", "2");
    table.setAttribute("cellpadding",5);
    table.style.height = "30vh";
    let thead = document.createElement('thead');
    thead.style.fontWeight = "bold"
    thead.style.fontSize = "20px";
    thead.style.height = "70px";
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);
    let row_1 = document.createElement('tr');
    let heading1 = document.createElement('th');
    heading1.innerHTML = "Name";
    let heading2 = document.createElement('th');
    heading2.innerHTML = "Age";
    let heading3 = document.createElement('th');
    heading3.innerHTML = "DOB";
    let heading4 = document.createElement('th');
    heading4.innerHTML = "Email";
    let heading5 = document.createElement('th');
    heading5.innerHTML = "Comapany";
    row_1.appendChild(heading1);
    row_1.appendChild(heading2);
    row_1.appendChild(heading3);
    row_1.appendChild(heading4);
    row_1.appendChild(heading5);
    thead.appendChild(row_1);
    let row_2 = document.createElement('tr');
    let row_2_data1 = document.createElement('td');
    row_2_data1.innerHTML = "Rohan";
    let row_2_data2 = document.createElement('td');
    row_2_data2.innerHTML = "10";
    let row_2_data3 = document.createElement('td');
    row_2_data3.innerHTML = "09-03-2012";
    let row_2_data4 = document.createElement('td');
    row_2_data4.innerHTML = "Rohan@gmail.com";
    let row_2_data5 = document.createElement('td');
    row_2_data5.innerHTML = "XYZ";
    row_2.appendChild(row_2_data1);
    row_2.appendChild(row_2_data2);
    row_2.appendChild(row_2_data3);
    row_2.appendChild(row_2_data4);
    row_2.appendChild(row_2_data5);
    tbody.appendChild(row_2);
    let row_3 = document.createElement('tr');
    let row_3_data1 = document.createElement('td');
    row_3_data1.innerHTML = "Sohan";
    let row_3_data2 = document.createElement('td');
    row_3_data2.innerHTML = "20";
    let row_3_data3 = document.createElement('td');
    row_3_data3.innerHTML = "01-04-2002";
    let row_3_data4 = document.createElement('td');
    row_3_data4.innerHTML = "Sohan@gmail.com";
    let row_3_data5 = document.createElement('td');
    row_3_data5.innerHTML = "ABC";
    row_3.appendChild(row_3_data1);
    row_3.appendChild(row_3_data2);
    row_3.appendChild(row_3_data3);
    row_3.appendChild(row_3_data4);
    row_3.appendChild(row_3_data5);
    tbody.appendChild(row_3);
    let row_4 = document.createElement('tr');
    let row_4_data1 = document.createElement('td');
    row_4_data1.innerHTML = "Mohan";
    let row_4_data2 = document.createElement('td');
    row_4_data2.innerHTML = "10";
    let row_4_data3 = document.createElement('td');
    row_4_data3.innerHTML = "09-03-2012";
    let row_4_data4 = document.createElement('td');
    row_4_data4.innerHTML = "Rohan@gmail.com";
    let row_4_data5 = document.createElement('td');
    row_4_data5.innerHTML = "DEF";
    row_4.appendChild(row_4_data1);
    row_4.appendChild(row_4_data2);
    row_4.appendChild(row_4_data3);
    row_4.appendChild(row_4_data4);
    row_4.appendChild(row_4_data5);
    tbody.appendChild(row_4);
    let row_5 = document.createElement('tr');
    let row_5_data1 = document.createElement('td');
    row_5_data1.innerHTML = "Shivam";
    let row_5_data2 = document.createElement('td');
    row_5_data2.innerHTML = "30";
    let row_5_data3 = document.creadocument.getElementsByTagName('table');
    teElement('td');
    row_5_data3.innerHTML = "09-03-1991";
    let row_5_data4 = document.createElement('td');
    row_5_data4.innerHTML = "Shivam@gmail.com";
    let row_5_data5 = document.createElement('td');
    row_5_data5.innerHTML = "TQR";
    row_5.appendChild(row_5_data1);
    row_5.appendChild(row_5_data2);
    row_5.appendChild(row_5_data3);
    row_5.appendChild(row_5_data4);
    row_5.appendChild(row_5_data5);
    tbody.appendChild(row_5)
})();
