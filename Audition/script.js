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
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["newForm"]["num1"].value;
    var num2 = document.forms["newForm"]["num2"].value;
    var num3 = document.forms["newForm"]["num3"].value;
    if (num1 <= 0 || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["newForm"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["newForm"]["num1"].focus();
        return false;
    }
   if (num2 <= 0 || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["newForm"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num2"].focus();
       return false;
   }
   if (num3 <= 0 || isNaN(num3)) {
       alert("Num3 must be filled in with a number.");
       document.forms["newForm"]["num3"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num3"].focus();
       return false;
   }
   /*if (num2 >= num1) {
       alert("Num2 must be greater than Num1.");
       document.forms["newForm"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["newForm"]["num2"].focus();
       return false;
   }*/
   function evensFoundText ( num1, num2, num3 ) {
     for(var i = num1; i < num2; i+= num3){
           if(i % 2 === 0){
              console.log(i);
              return false;
        }
     }
   }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("evensFound").innerText = "Sample Text"
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
