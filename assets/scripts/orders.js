const orders = [
    
        {
            fullName:"First Name",
            email:"first@epoka.edu.al",
            description:"First order description"
        },
        {
            fullName:"Second Name",
            email:"second@epoka.edu.al",
            description:"Second order description"
        }
   
];

//Get table - > <tbody>

const ordersTableBody = document.getElementById("ordersTbl").getElementsByTagName("tbody")[0];

function populateTable(){
    ordersTableBody.innerHTML="";

    for(let i=0;i<orders.length;i++){
        const newTableRow = ordersTableBody.insertRow();
        newTableRow.insertCell(0).innerHTML=orders[i].fullName;
        newTableRow.insertCell(1).innerHTML=orders[i].email;
        newTableRow.insertCell(2).innerHTML=orders[i].description;
        newTableRow.insertCell(3).innerHTML='<button id="editBtn">Edit</button> <button id="removeBtn">Remove</button> ';

    }
}

populateTable();