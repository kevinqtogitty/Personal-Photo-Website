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

let emailField = document.getElementById("email");
const formButton = document.querySelector('#formButton');
const form = document.getElementById('contactForm');

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
    let copyText = document.querySelector('.email').innerText;
    let copyTextMod = copyText.substring(0, 19)
    navigator.clipboard.writeText(copyTextMod);
}

function copiedToClipboard() {
    document.querySelector('.tooltip').innerText = 'Copied to clipboard!';
    let copied = document.querySelector('.email .dropdown');
    copied.style.left = '-95px';
}

const revert = document.querySelector('.email');

revert.addEventListener('mouseenter', () => {
    console.log('This is working');
    document.querySelector('.tooltip').innerText = 'Click to copy!';
})
