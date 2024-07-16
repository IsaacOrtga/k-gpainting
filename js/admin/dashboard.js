$(document).ready(function () {
    function loadReviews(status) {
        $.ajax({
            url: '../controller/dashboard.php',
            type: 'POST',
            data: { status: status },
            dataType: 'json',
            success: function (data) {
                $('#reviews-container').empty();
                data.forEach(function (review) {
                    $('#reviews-container').append(`
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${review.street}</h5>
                                    <p class="card-text">${review.review}</p>
                                    <p class="card-text"><small class="text-muted">Submitted by: ${review.clientname}</small></p>
                                </div>
                            </div>
                        </div>
                    `);
                });
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    }

    $('#archived-link').click(function (e) {
        e.preventDefault();
        loadReviews('archived');
    });

    $('#published-link').click(function (e) {
        e.preventDefault();
        loadReviews('published');
    });

    $('#pending-link').click(function (e) {
        e.preventDefault();
        loadReviews('pending');
    });

    // Load pending reviews by default
    loadReviews('published');
});
