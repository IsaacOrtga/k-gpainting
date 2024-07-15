<?php

// Verificar que la solicitud sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Iniciar la sesión
session_start();

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "kg_painting";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Obtener los datos del formulario
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Validar que los campos no estén vacíos
if (empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Email and Password are required."]);
    exit();
}

// Preparar y ejecutar la consulta
$stmt = $conn->prepare("SELECT id, username, email FROM administrator WHERE email = ? AND pass = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

// Verificar si se encontró el usuario
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Guardar información del usuario en la sesión
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
    $_SESSION['email'] = $user['email'];
    
    echo json_encode(["success" => true, "redirect" => "./admin/dashboard.php"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid email or password."]);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
