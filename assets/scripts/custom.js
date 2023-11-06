//START - ALL PAGES---
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
//END - ALL PAGES---

//START - ORDER PAGE

function validateAndSubmit(event){
    event.preventDefault(); //ignore the event of the form and keep the event of submit

    //reset all errors
    document.getElementById("fullNameSpn").innerHTML="";
    document.getElementById("emailSpn").innerHTML="";
    document.getElementById("descriptionSpn").innerHTML="";

    //validate input values
    const fullName = document.getElementById("fullName").value;
    if(fullName.length<3){
        document.getElementById("fullNameSpn").innerHTML="Full name must be min 3 chars";
    }

    const email = document.getElementById("email").value;
    if(!(email.endsWith("@epoka.edu.al"))){
        document.getElementById("emailSpn").innerHTML="This is not a valid Epoka email";
    }

    const description = document.getElementById("description").value;
    if(description.length < 16){
        document.getElementById("descriptionSpn").innerHTML="Description must be min 16 chars";
    }

    //call method
    handleSubmit(fullName,email,description)
}

//check if the values we get are the right ones or not
function handleSubmit(fullname_,email_,description_){
    console.log('Full name: ', fullname_);
    console.log('Email: ', email_);
    console.log('Description: ', description_);

    //call API endpoint
}

//END - ORDER PAGE