$(document).ready(function() {
    $('#adminForm').on('submit', function(event) {
        event.preventDefault(); 

        // Field validation
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        if (email === "") {
            alert("Email is required.");
            return;
        }

        if (password === "") {
            alert("Password is required.");
            return;
        }

        let randomCode = [];
        for(let i = 0; i < password.length; i++){
            randomCode.push(password.charCodeAt(i));
        }

        let userData = `${email}^--${randomCode}^--${password}`;
        let passwordEncrypt = btoa(userData);
        console.log('Pass encriptada: ' + passwordEncrypt)
        // Ajax query
        $.ajax({
            url: './controller/login-controller.php',
            type: 'POST',
            data: {
                email,
                passwordEncrypt
            },
            success: function(response) {
                let jsonResponse = JSON.parse(response);
                if (jsonResponse.success) {
                    window.location.href = jsonResponse.redirect;
                } else {
                    alert(jsonResponse.message);
                }
            },
            error: function() {
                alert("An error occurred while processing your request. Please try again.");
            }
        });
    });
});
