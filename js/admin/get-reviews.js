$(document).ready(function() {
        // Ajax query
        $.ajax({
            url: './controller/getReviews-controller.php',
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