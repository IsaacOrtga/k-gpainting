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

        // Ajax query
        $.ajax({
            url: './controller/login-controller.php',
            type: 'POST',
            data: {
                email,
                password
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
