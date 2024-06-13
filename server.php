<?php

$todoList = [
    [
        'fare' => 'Cucinare',
        'cosa' => 'Pasta e patate',
    ],

    [
        'fare' => 'Pulire',
        'cosa' => 'Lavare pavimento',
    ],

    [
        'fare' => 'Fare la spesa',
        'cosa' => 'Comprare Acqua',
    ],

    [
        'fare' => 'Giocare',
        'cosa' => 'Giocare a cod',
    ],
];

header("Content-Type: application/json;");

$jsonString = json_encode($todoList);

echo $jsonString;
