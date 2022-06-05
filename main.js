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

console.log('this is working');

let emailField = document.getElementById("email");
const formButton = document.querySelector('#formButton');
const form = document.getElementById('contactForm');

console.log(form);

form.onsubmit = validateEmail, sendEmail;

function validateEmail(event) {

    //Prevents automatic page reload
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

function sendEmail(event) {
    const link = 'kevinq.to@gmail.com';
    + "kevinq.to@gmail.com"
    + "&subject=" + escape("This is my subject")
    + "&body=" + escape(document.getElementById('Body').value)
}
