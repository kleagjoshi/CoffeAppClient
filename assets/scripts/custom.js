//START - ALL PAGES---

//anonymous function
setInterval(() =>{$("#currentYear").html(new Date().toLocaleTimeString());
},1000)

//END - ALL PAGES---

//START - ORDER PAGE

function validateAndSubmit(event){
    event.preventDefault(); //ignore the event of the form and keep the event of submit

    var isValidated=true;

    //reset all errors
    $("#fullNameSpn").html("");
    $("#emailSpn").html("");
    $("#descriptionSpn").html("");

    //validate input values
    const fullName = $("#fullName").val();
    if(fullName.length<3){
        $("#fullNameSpn").html("Full name must be min 3 chars");
        isValidated=false;
    }

    const email = $("#email").val();
    if(!(email.endsWith("@epoka.edu.al"))){
        $("#emailSpn").html("This is not a valid Epoka email");
        isValidated=false;
    }

    const description = $("#description").val();
    if(description.length < 16){
        $("#descriptionSpn").html("Description must be min 16 chars");
        isValidated=false;
    }

    if(isValidated==false){
        return;
    }

    //call method
    handleSubmit(fullName,email,description)
}

//check if the values we get are the right ones or not
function handleSubmit(fullname_,email_,description_){
    
    //create an object

    var newOrder={
        fullName:fullname_,
        email:email_,
        description:description_
    }

    console.log("newOrder Object=",newOrder);

}

//END - ORDER PAGE

//START - ADD EVENT LISTENER

$(document).ready(function(){
    $("#submitBtn").click(validateAndSubmit)
})
//END - ADD EVENT LISTENER