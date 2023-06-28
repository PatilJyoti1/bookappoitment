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
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

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
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
}

// Function to delete an appointment
function deleteAppointment(index) {
  // Remove the appointment from the array
  appointments.splice(index, 1);

  // Save the updated appointments to LocalStorage
  saveAppointments();

  // Clear the appointments list on the screen
  const appointmentsList = document.getElementById('appointments');
  appointmentsList.innerHTML = '';

  // Display the remaining appointments on the screen
  appointments.forEach(displayAppointment);
}

// Function to edit an appointment
function editAppointment(index) {
  // Retrieve the appointment from the array
  const appointment = appointments[index];

  // Populate the input fields with the appointment's values
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  nameInput.value = appointment.name;
  emailInput.value = appointment.email;
  phoneInput.value = appointment.phone;

  // Remove the appointment from the array
  appointments.splice(index, 1);

  // Save the updated appointments to LocalStorage
  saveAppointments();

  // Clear the appointments list on the screen
  const appointmentsList = document.getElementById('appointments');
  appointmentsList.innerHTML = '';

  // Display the remaining appointments on the screen
  appointments.forEach(displayAppointment);
}

// Function to display an appointment on the screenls -la
function displayAppointment(appointment, index) {
  const appointmentsList = document.getElementById('appointments');

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>Name:</strong> ${appointment.name}<br>
    <strong>Email:</strong> ${appointment.email}<br>
    <strong>Phone:</strong> ${appointment.phone}<br>
    <button onclick="editAppointment(${index})">Edit</button>
    <button onclick="deleteAppointment(${index})">Delete</button>
    <hr>
  `;

  appointmentsList.appendChild(listItem);
}

// Add event listener to the form submission
document.getElementById('bookingForm').addEventListener('submit', addAppointment);

// Display existing appointments on page load
appointments.forEach(displayAppointment);
