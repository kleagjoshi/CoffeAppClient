class Order{
    constructor(_fullName,_email,_description)
    {
        if(arguments.length !=3){
            throw new Error("Please provide 3 properties");
        }

        this.fullName=_fullName;
        this.email=_email;
        this.description=_description;
    }
}

const orders = [
    
        new Order("First Customer","first@epoka.edu.al","First Customer order description"),
        new Order("Second Customer","second@epoka.edu.al","Second Customer order description"),
        new Order("Third Customer","third@epoka.edu.al","Third Customer order description")
   
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