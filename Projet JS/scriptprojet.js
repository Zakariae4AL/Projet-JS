//  document.getElementById("btn1").onclick = function()
//  {  
//      var name = document.getElementById("inp1").value;
//      if ( name == ''){
//          document.getElementById("inp1").style.borderColor ="red";
//          document.getElementById("p1").innerHTML = "Veuillez entrer votre nom";
//      }
//      else if(name.length <=3 || name.length>25){
//          document.getElementById("inp1").style.borderColor ="red";
//          document.getElementById("p1").innerHTML = "Le nom doit etre entre 3 et 25 caracteres";   
//      }
    //   }
//  function ValidateEmail() {
//     var email = document.getElementById("inp1").value;
//     var lblError = document.getElementById("lblError");
//     lblError.innerHTML = "";
//     var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     if (!expr.test(email)) {
//         lblError.innerHTML = "Invalid email address.";
//         }
//    }
  //email function
//   function ValidateEmail() {
//       var email = document.getElementById("inp1").value;
//       var lblError = document.getElementById("lblError");
//       lblError.innerHTML = "";
//       var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//       if (!expr.test(email)) {
//           lblError.innerHTML = "Invalid email address.";
//           }
//      }



//  document.getElementById("btn1").onclick = 
//  function ValidateEmail() {
//      var email = document.getElementById("inp2").value;
//      var lblError = document.getElementById("p2");
//      lblError.innerHTML = "";
//      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//      if (!expr.test(email)) {
//          lblError.innerHTML = "Invalid email address.";
//          document.getElementById("inp2").style.borderColor = "red";}
//  }

//  document.getElementById("btn1").onclick = function Passwordvalidation(){
//      var password = document.getElementById("inp3").value;
//      if(str.match( /[0-9]/g) && 
//                      str.match( /[A-Z]/g) && 
//                      str.match(/[a-z]/g) && 
//                      str.match( /[^a-zA-Z\d]/g)){
//                          document.getElementById("p3").innerHTML = "Mot de passe fort";
//                          document.getElementById("p3").style.color = "green";
//                      }else{
//                          document.getElementById("p3").innerHTML = "Mot de passe faible";
//                          document.getElementById("p3").style.color = "red";
//                      }               
// }

// document.getElementById("btn1").onclick = function validate() { 
//     var msg = document.getElementById("p3").value; 
//     var str = document.getElementById("inp3").value; 
//     if (str.match( /[0-9]/g) && 
//             str.match( /[A-Z]/g) && 
//             str.match(/[a-z]/g) && 
//             str.match( /[^a-zA-Z\d]/g) &&
//             str.length >= 10) 
//         msg = "<p style='color:green'>Mot de passe fort.</p>"; 
//     else 
//         msg = "<p style='color:red'>Mot de passe faible.</p>"; 
//     document.getElementById("msg").innerHTML= msg; 
// } 



// document.getElementById("form3Example3").onkeyup = function() {
//     var email = document.getElementById("form3Example3");
//     var lblError = document.getElementById("lblError");
//     lblError.innerHTML = "s";
//     lblError.style.color = 'transparent';
//     email.style.borderColor = "";
  
//     var expr = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
//     if(email.value === ""){
//         email.style.borderColor = 'red';
//         lblError.style.color = 'red';
//         lblError.innerHTML = "empty";
//     }
//     else if (!expr.test(email.value)) {
//         email.style.borderColor = 'red';
//         lblError.style.color = 'red';
//         lblError.innerHTML = "Email wrong Format";
  
  
//     }
//   }


document.getElementById("inp4").onkeyup = function matchpassword(){
    var confirm = document.getElementById("inp4").value;
    var pwd = document.getElementById("inp3").value;
    if(confirm == pwd){
        document.getElementById("p4").innerHTML = "Les mots de passe sont identiques";
        document.getElementById("p4").style.color = "green";
    }else{
        document.getElementById("p4").innerHTML = "Les mots de passe ne sont pas identiques";
        document.getElementById("p4").style.color = "red";
    }
}
