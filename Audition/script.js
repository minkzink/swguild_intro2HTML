function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["newForm"].elements.length;
        loopCounter++) {
        if (document.forms["newForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["newForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function resetForm() {
    clearErrors();
    document.forms["newForm"]["num1"].value = "";
    document.forms["newForm"]["num2"].value = "";
    document.forms["newForm"]["num3"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["newForm"]["num1"].focus();
};
function validateItems() {
    /*resetForm();*/
    var preNum1 = document.getElementById('num1').value;
    var preNum2 = document.getElementById('num2').value;
    var preNum3 = document.getElementById('num3').value;
    var num1 = parseInt(preNum1);
    var num2 = parseInt(preNum2);
    var num3 = parseInt(preNum3);
  if (num1 <= 0 || isNaN(num1)) {
        alert("Starting Number must be filled in with a positive number.");
        document.forms["newForm"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["newForm"]["num1"].focus();
        return false;
    };
   if (num2 <= 0 || isNaN(num2)) {
       alert("Ending Number must be filled in with a positive number.");
       document.forms["newForm"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num2"].focus();
       return false;
   };
   if (num3 <= 0 || isNaN(num3)) {
       alert("Step must be filled in with a positive number.");
       document.forms["newForm"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num3"].focus();
       return false;
   };
   /*if (num1 <== num2) {
       alert("Ending Number must be greater than Starting Number.");
       document.forms["newForm"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num2"].focus();
       return false;
   };*/
   var array = [];
   var x = 0;
     for(var i = num1; i < num2; i+= num3){
          if(i % 2 === 0){
          array.push(x + i);
        }
     }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("num1b").innerText = num1;
   document.getElementById("num2b").innerText = num2;
   document.getElementById("num3b").innerText = num3;
   document.getElementById("evensFound").innerText = array;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
