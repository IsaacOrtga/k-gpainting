<?php
// Iniciar la sesión
session_start();

// Verificar si el usuario está autenticado
if (!isset($_SESSION['user_id'])) {
    // Redirigir al inicio de sesión si no está autenticado
    header('Location: /admin-login.html');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../styles/dashboard.css">
    <title>Admin Dashboard - K&G Painting</title>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">K&G Painting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" id="archived-link">Archived</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="published-link">Published</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" id="pending-link">Pending</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Main Content -->
    <div class="container mt-4 dashboardContent">
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username'], ENT_QUOTES, 'UTF-8'); ?></h1>
        <h4>Here are the comments published</h4>
        <div class="row mt-4" id="reviews-container">
            <!-- Dynamic content will be loaded here -->
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="../js/admin/dashboard.js"></script>
</body>
</html>
