<?php
// Accepts toutes les origine pour les CORS
// NE JAMAIS FAIRE EN PRODUCTION
// JE SUIS SERIEUX
header('Access-Control-Allow-Origin: *');

/*
// Une facon plus propre de gérer le CORS
// Mais ne fonctionne que pour un port précis
// Dans cet exemple, le port par défaut de live preview sur VSC
$allowed_origin = 'http://127.0.0.1:3000';
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] == $allowed_origin) {
    header('Access-Control-Allow-Origin: ' . $allowed_origin);
} else {
    header('HTTP/1.1 403 Forbidden');
    echo 'CORS policy does not allow access from the specified origin.';
    exit;
}
//*/

header('Content-Type: application/json');

// Example response data
$responseData = [
    'message' => 'Bonjour de ExoDemo_simpleCall.php!',
    'success' => true
];

// Envoie un JSON à la requête AJAX
echo json_encode($responseData);
