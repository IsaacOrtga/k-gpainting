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

// Obtener el estado de los reviews desde el parámetro AJAX
$status = isset($_POST['status']) ? $_POST['status'] : '';

// Validar el parámetro de estado
if (empty($status)) {
    echo json_encode(["success" => false, "message" => "Status is required."]);
    exit();
}

// Preparar y ejecutar la consulta
$query = "SELECT * FROM review WHERE published ";
if ($status === 'published') {
    $query .= "IS NOT NULL";
} else {
    $query .= "= ?";
}

$stmt = $conn->prepare($query);
if ($status !== 'published') {
    $stmt->bind_param("s", $status);
}
$stmt->execute();
$result = $stmt->get_result();

// Obtener los resultados
$reviews = $result->fetch_all(MYSQLI_ASSOC);

// Enviar la respuesta en formato JSON
echo json_encode($reviews);

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
