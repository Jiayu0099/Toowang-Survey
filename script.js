// ----------------------------------
// Q2 - Other travel method
// ----------------------------------

const q2OtherCheckbox =
  document.getElementById("q2OtherCheckbox");

const q2OtherBox =
  document.getElementById("q2OtherBox");


q2OtherCheckbox.addEventListener("change", function () {

  if (q2OtherCheckbox.checked) {

    q2OtherBox.classList.remove("hidden");

  } else {

    q2OtherBox.classList.add("hidden");

  }

});



// ----------------------------------
// Q6 - Other intersection issue
// ----------------------------------

const q6OtherCheckbox =
  document.getElementById("q6OtherCheckbox");

const q6OtherBox =
  document.getElementById("q6OtherBox");


q6OtherCheckbox.addEventListener("change", function () {

  if (q6OtherCheckbox.checked) {

    q6OtherBox.classList.remove("hidden");

  } else {

    q6OtherBox.classList.add("hidden");

  }

});



// ----------------------------------
// Q7 - Other impact
// ----------------------------------

const q7OtherCheckbox =
  document.getElementById("q7OtherCheckbox");

const q7OtherBox =
  document.getElementById("q7OtherBox");


q7OtherCheckbox.addEventListener("change", function () {

  if (q7OtherCheckbox.checked) {

    q7OtherBox.classList.remove("hidden");

  } else {

    q7OtherBox.classList.add("hidden");

  }

});



// ----------------------------------
// Q8 - Show intersection input
// only if user selects "Yes"
// ----------------------------------

const q8Options =
  document.querySelectorAll('input[name="q8"]');

const intersectionBox =
  document.getElementById("intersectionBox");


q8Options.forEach(function (option) {

  option.addEventListener("change", function () {

    if (option.value === "Yes") {

      intersectionBox.classList.remove("hidden");

    } else {

      intersectionBox.classList.add("hidden");

    }

  });

});



// ----------------------------------
// Survey Submit
// ----------------------------------

const surveyForm =
  document.getElementById("surveyForm");

const confirmationMessage =
  document.getElementById("confirmationMessage");


surveyForm.addEventListener("submit", function (event) {

  // Prevent page refresh
  event.preventDefault();


  // Show completion message
  confirmationMessage.classList.remove("hidden");


  // Scroll to confirmation
  confirmationMessage.scrollIntoView({
    behavior: "smooth"
  });

});