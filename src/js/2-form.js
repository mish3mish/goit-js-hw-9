const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', handleInput);

populateData();

const formData = {
  email: '',
  message: '',
};

function handleInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function populateData() {
  const savedData = localStorage.getItem(LS_KEY);
  //   console.log(savedData);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email.trim();
    messageInput.value = parsedData.message.trim();
    console.log(parsedData);
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  if (!emailInput.value || !messageInput.value) {
    event.preventDefault();
    alert('Fill please all fields');
  } else {
    console.log({ email: emailInput.value, message: messageInput.value });
    localStorage.removeItem(LS_KEY);
    form.reset();
  }
}

// // 1. Select the form.
// // Define the key.
// // Select inputs.

// const form = document.querySelector('.feedback-form');
// const LS_KEY = 'feedback-form-state';
// const emailInput = form.elements.email;
// const messageInput = form.elements.message;

// // 2. Create a formData object.

// const formData = {
//   email: '',
//   message: '',
// };

// // 3. Add an input event listener.
// // Inside the function detect which input is being edited, update formData and
// // save the updated data to local Storage.

// form.addEventListener('input', handleInput);

// function handleInput(event) {
//   if (event.target.name === 'email') {
//     formData.email = event.target.value;
//   } else if ((event.target.name = 'message')) {
//     formData.message = event.target.value;
//   }
//   localStorage.setItem(LS_KEY, JSON.stringify(formData));
// }

// // 4. Create a function populatedData which will check if there is saved data
// // in local storage and if so it populates the form fields. You need to parse
// // the data and then trim it when you put it as forms fieds value;
// // Call the function to pre-fill the form fields with any previously stored valued;

// function populateData() {
//   const savedData = localStorage.getItem(LS_KEY);
//   if (savedData) {
//     const parsedData = JSON.parse(savedData);
//     emailInput.value = parsedData.email.trim();
//     messageInput.value = parsedData.message.trim();
//   }
// }

// populateData();

// // 5. Add a submit event listener.
// // Inside the function prevent the form submission if any fields are empty using alert.
// // If both fields are filledd, log formData to the console, clear the local storage
// // and reset the form.

// form.addEventListener('sumbit', handleSubmit);

// function handleSubmit(event) {
//   if (!emailInput.value || !messageInput.value) {
//     event.preventDefault();
//     alert('Fill the rest');
//   } else {
//     console.log({ email: emailInput.value, message: messageInput.value });
//     localStorage.removeItem(LS_KEY);
//     form.reset();
//   }
// }
