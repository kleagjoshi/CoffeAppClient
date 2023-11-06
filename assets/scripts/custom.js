//START - ALL PAGES---

//anonymous function
setInterval(() =>{document.getElementById("currentYear").innerHTML=new Date().toLocaleTimeString();},1000
)
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
//END - ALL PAGES---

//START - ORDER PAGE

function validateAndSubmit(event){
    event.preventDefault(); //ignore the event of the form and keep the event of submit

    var isValidated=true;

    //reset all errors
    document.getElementById("fullNameSpn").innerHTML="";
    document.getElementById("emailSpn").innerHTML="";
    document.getElementById("descriptionSpn").innerHTML="";

    //validate input values
    const fullName = document.getElementById("fullName").value;
    if(fullName.length<3){
        document.getElementById("fullNameSpn").innerHTML="Full name must be min 3 chars";
        isValidated=false;
    }

    const email = document.getElementById("email").value;
    if(!(email.endsWith("@epoka.edu.al"))){
        document.getElementById("emailSpn").innerHTML="This is not a valid Epoka email";
        isValidated=false;
    }

    const description = document.getElementById("description").value;
    if(description.length < 16){
        document.getElementById("descriptionSpn").innerHTML="Description must be min 16 chars";
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

    //call API endpoint

    try{
        //call API
        console.log("Calling api...");
    }catch{
        //API calls fails
        console.log("API call failed...");
    }finally{
        //always called
        console.log("Finally...");
    }

}

//END - ORDER PAGE

//START - ADD EVENT LISTENER

document.addEventListener("DOMContentLoaded",(event)=>{
    const orderNowBtn = document.getElementById("submitBtn");
    if(orderNowBtn){
        orderNowBtn.addEventListener("click",validateAndSubmit)
    }
})

//END - ADD EVENT LISTENER