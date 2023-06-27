// Retrieve existing appointments from LocalStorage or initialize an empty array
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Function to save appointments to LocalStorage
function saveAppointments() {
  localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Function to add an appointment
function addAppointment(event) {
  event.preventDefault();
  
  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  // Create an appointment object
  const appointment = {
    name,
    email,
    phone
  };
  
  // Add the appointment to the array
  appointments.push(appointment);
  
  // Save the updated appointments to LocalStorage
  saveAppointments();
  
  // Display the appointment on the screen
  displayAppointment(appointment);
  
  // Clear the form
  document.getElementById('bookingForm').reset();
}

// Function to display an appointment on the screen
function displayAppointment(appointment) {
  const appointmentsList = document.getElementById('appointments');
  
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Name:</strong> ${appointment.name}<br>
    <strong>Email:</strong> ${appointment.email}<br>
    <strong>Phone:</strong> ${appointment.phone}<br>
    <hr>
  `;
  
  appointmentsList.appendChild(listItem);
}

// Add event listener to the form submission
document.getElementById('bookingForm').addEventListener('submit', addAppointment);

// Display existing appointments on page load
appointments.forEach(appointment => {
  displayAppointment(appointment);
});
