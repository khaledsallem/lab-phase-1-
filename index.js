// function for navBar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}
// function for video autoplay home page
window.addEventListener('load', async () => {
    let video = document.querySelector('video[muted][autoplay]');
    try {
        await video.play();
    } catch (err) {
        video.controls = true;
    }
});

// form validation
function validateForm() {
    if (document.myForm.fname.value == "") {
        alert("Please provide your name !");
        document.myForm.fname.focus();
        return false;
    }

    if (document.myForm.number.value == "") {
        alert("Please provide your phone number !");
        document.myForm.number.focus();
        return false;
    }

    if (document.myForm.email.value == "") {
        alert("Please provide your email !");
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.message.value == "") {
        alert("Please provide your letter !");
        document.myForm.message.focus();
        return false;
    }

}

// add-cart 
let sum = 180

document.querySelector('#minus').addEventListener('click',()=>{
    document.getElementsByTagName('span').innerHTML--
})
document.querySelector('#plus').addEventListener('click',()=>{
    document.getElementsByTagName('span').innerHTML++
})