function func(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log("Name:", name);
    console.log("Phone Number:", phone);
    console.log("Email ID:", email);
    console.log("Message:", message);
}