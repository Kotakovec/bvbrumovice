<?php
header("Content-Type: application/json");

// Připojení k databázi (nahraďte údaje)
$db = new mysqli("localhost", "username", "password", "booking_db");

// Kontrola chyb
if ($db->connect_error) {
    die(json_encode(["success" => false, "message" => "Chyba databáze"]));
}

// Zpracování POST požadavku
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $apartmentId = $data["apartment_id"];
    $checkIn = date("Y-m-d", strtotime($data["check_in"]));
    $checkOut = date("Y-m-d", strtotime($data["check_out"]));
    
    // Uložení do databáze (příklad)
    $stmt = $db->prepare("INSERT INTO reservations (apartment_id, check_in, check_out) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $apartmentId, $checkIn, $checkOut);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Rezervace úspěšná!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Chyba při rezervaci"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Neplatný požadavek"]);
}
?>