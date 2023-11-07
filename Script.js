function getContactValues() 
{
    //var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
   // var phoneNumber = document.getElementById('number').value;

    if (username === '' || email === '' || phoneNumber === '') {
        alert('Please fill in all the fields');
    } else {
        alert('Form submitted successfully! Thank you.');
        // You can perform additional actions here, like sending data to a server
    }
}


