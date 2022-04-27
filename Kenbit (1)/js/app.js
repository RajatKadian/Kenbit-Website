// update after every second
setInterval(function() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    document.getElementById("currentTime").innerHTML = n;
}, 1000);

// listen submit sub_email form
document.querySelector(".sub_email").addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.querySelector(".sub_email input").value;

    // ensure email is valid
    if (email.indexOf("@") == -1) {
        alert("Please enter a valid email");
        return;
    }

    // ensure email has extension
    if (email.indexOf(".") == -1) {
        alert("Please enter a valid email");
        return;
    }

    // ensure email starts with a letter and not a number
    if (email.charAt(0).match(/[0-9]/)) {
        alert("Please enter a valid email");
        return;
    }
    
    
    // alert(email);
    alert("Thank you for subscribing to our newsletter. We will notify you on our new technologies");
});

// listen submit on quote form
document.querySelector('.quote').addEventListener('submit', function(e){
    e.preventDefault();
    // get the values
    const name = document.querySelector('.quote input[type="text"]').value;
    const email = document.querySelector('.quote input[type="email"]').value;
    const message = document.querySelector('.quote textarea').value;

    // validate fields
    if(name === '' || email === '' || message === ''){
        alert('Please fill all fields');
        return;
    }

    // ensure email is valid
    if(!email.includes('@')){
        alert('Please enter a valid email');
        return;
    }
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})