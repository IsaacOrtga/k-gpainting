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

        let randomNum = Math.floor(Math.random() * 100000);
        let now = new Date();
        let userData = `${now}^--${randomNum}^--${password}`;
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
