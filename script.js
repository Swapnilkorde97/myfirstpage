document.getElementById("enquiryForm").addEventListener("submit", function (e) { //This line selects the form with the id="enquiryForm" from your HTML.//It adds an event listener for the "submit" event.

  e.preventDefault();

  const name = document.getElementById("name").value.trim(); //.trim() removes any leading/trailing spaces.
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;

  const response = document.getElementById("responseMsg"); // after submitting the form its a response.

  if (!name || !email || !phone || !service) {   //check any fields is empty 
    response.style.color = "red";
    response.textContent = "Please fill in all required fields.";
    return;
  }

  response.style.color = "green";
  response.textContent = `Thank you, ${name}. We have received your enquiry for "${service}". We’ll contact you shortly!`;

  document.getElementById("enquiryForm").reset();  //This line resets all fields in the form (clears the values).
});



