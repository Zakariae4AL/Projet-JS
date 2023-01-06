 var check1 = false;
 document.getElementById("inp1").onkeyup = function namefunction()
 {  
    check1 = true;
     var name = document.getElementById("inp1").value;
     if ( name == ''){
         document.getElementById("inp1").style.borderColor ="red";
         document.getElementById("p1").innerHTML = "Veuillez entrer votre nom";
         document.getElementById("p1").style.color = "red";
         check1 = false;
     }
     else if(name.length <=3 || name.length>25){
         document.getElementById("inp1").style.borderColor ="red";
         document.getElementById("p1").innerHTML = "Le nom doit etre entre 3 et 25 caracteres";   
         document.getElementById("p1").style.color = "red";
         check1 = false;
     }else{
         document.getElementById("inp1").style.borderColor = "green";
         document.getElementById("p1").innerHTML = "";
         
     }
      }

var check2 = false;
document.getElementById("inp2").onkeyup = function() {

    check2 = true;
    var email = document.getElementById("inp2");
    var lblError = document.getElementById("p2");
    lblError.innerHTML = "s";
    lblError.style.color = 'transparent';
    email.style.borderColor = "";
  
    var expr = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
    if(email.value === ""){
        email.style.borderColor = 'red';
        lblError.style.color = 'red';
        lblError.innerHTML = "Veuillez sasir l email";
        check2 = false;
    }
    else if (!expr.test(email.value)) {
        email.style.borderColor = 'red';
        lblError.style.color = 'red';
        lblError.innerHTML = "Veuillez entrer format du email convenable";
        check2 = false;
  
    }
  }

  var check3=false;
document.getElementById("inp3").onkeyup = function() {
    check3 = true;
    var pd = document.getElementById("inp3");
    var error = document.getElementById("p3");
    error.innerHTML = "s";
    error.style.color = 'transparent';
    pd.style.borderColor = "";
    var e = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
    if(pd.value === ""){
        pd.style.borderColor = 'red';
        error.style.color = 'red';
        error.innerHTML = "Veuillez sasir un mot de passe";
        check3 = false;
    } else if (!e.test(pd.value)) {
        pd.style.borderColor = 'red';
        error.style.color = 'red';
        error.innerHTML = "Le mot de passe n'est pas fort";
        check3 = false;
  
    }
    }

    var check4 = false;
document.getElementById("inp4").onkeyup = 
function confirmation(){
    check4 = true;
    var confirm = document.getElementById("inp4").value;
    var confirm1 = document.getElementById("inp3").value;
    if(confirm != confirm1){
        document.getElementById("p4").innerHTML = "le mot de pass n'est pas le meme!!";
        document.getElementById("p4").style.bordercolor="red";
        document.getElementById("p4").style.color="red";
        check4 = false;
        
    }else{
        document.getElementById("p4").innerHTML = "le mot de pass est le meme!!";
        document.getElementById("p4").style.bordercolor="green";
        document.getElementById("p4").style.color="green";
        check4 = true;
    }
}



document.getElementById("btn1").onclick = function(){
    if(check1 && check2 && check3 && check4)
        //document.getElementById("btn1").href = "secondpage.html";
        window.location.replace("index.html");
    
}
