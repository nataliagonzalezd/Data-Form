/* eslint-disable */
import "bootstrap";
import "./style.css";

//dot notion
window.onload = function() {
  //write your code here

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function() {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
      form.addEventListener(
        "submit",
        function(event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  function radioCheck() {
    let elementoActivo = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    );
    if (elementoActivo) {
      let r = document.getElementById("rad");
      r.innerHTML = "";
    } else {
      let r = document.getElementById("rad");
      r.innerHTML = "Please select a valid payment.";
    }
  }
};
