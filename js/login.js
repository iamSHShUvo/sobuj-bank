document.getElementById('login-submit').addEventListener('click', function () {

    //    get the email
    const emailField = document.getElementById('user-mail');
    const userEmail = emailField.value;

    // console.log('userMail')

    // get the password
    const passwordField = document.getElementById('current-password');
    const userPassword = passwordField.value;

    // condition of being right 
    // check email and password
    if (userEmail == 'abcd@def.com' && userPassword == 'abcd') {
        window.location.href = 'banking.html';
    }
})

//handle deposit and withdraw button event handler
