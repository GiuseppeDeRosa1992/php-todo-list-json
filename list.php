<?php
$fileJson = file_get_contents("dati.json");

header("Content-Type: application/json;");

echo $fileJson;
