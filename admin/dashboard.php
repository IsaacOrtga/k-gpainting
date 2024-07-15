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
    <link rel="stylesheet" href="./styles/admin.css">
    <title>Admin Dashboard - K&G Painting</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['username']; ?></h1>
    <!-- Contenido del Dashboard -->
</body>
</html>
