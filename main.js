// const home = document.getElementById("home");
// const faces = document.querySelector("#faces");
// const landscapes = document.querySelector("#landscapes");
// const projects = document.querySelector("#projects");
// const store = document.querySelector("#store");
// const about = document.querySelector("#about");
// const instagram = document.querySelector("#instagram");

// document.querySelectorAll('.navItem').forEach(item => {
//     item.addEventListener('mouseover', e => {
//         item.style.color = 'white';
//     })
// })

// document.querySelectorAll('.navItem').forEach(item => {
//     item.addEventListener('mouseout', e => {
//         item.style.color = 'black';
//     })
// })


// function mouseover(item) {
//     item.style.color = 'white';
// }

// function mouseout(item) {
//     item.style.color = 'black';
// }


// projects.addEventListener('mouseover', () => {
//     submenu.style.display = 'block';
// })

// // projects.addEventListener('mouseout', () => {
// //     submenu.style.display = 'none';
// // })

// submenuDisappear.addEventListener('mouseleave', () => {
//     submenu.style.display = 'none';
// })

// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "kevinq.to@gmail.com",
//         Password : "Ethereum6767",
//         To : 'kevinq.to@gmail.com',
//         From : document.getElementById(email).value,
//         Subject : "Somebody want to talk to you! WOOOOOO",
//         Body : "And this is the body",
//     }).then(
//       message => alert(message)
//     );
// }

console.log('this is working');

let emailField = document.getElementById("email");
const formButton = document.querySelector('#formButton');
const form = document.getElementById('contactForm');

console.log(form);

form.onsubmit = validateEmail();

//formButton.addEventListener('onClick', validateEmail);


function validateEmail(event) {

    event.preventDefault();

    const formData = new FormData(event.target)
    const formProperties = Object.fromEntries(formData);

    console.log(formProperties);

    console.log(event);

    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(formProperties.email)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

//copy to clipboard function
function copyToClipboard() {
    /* Get the text field */
    let copyText = 'kevinq.to@gmail.com';
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
