<?php

$todoList = [
    [
        'fare' => 'Cucinare',
        'cosa' => 'Pasta e patate',
        'booleano' => true
    ],

    [
        'fare' => 'Pulire',
        'cosa' => 'Lavare pavimento',
        'booleano' => true
    ],

    [
        'fare' => 'Fare la spesa',
        'cosa' => 'Comprare Acqua',
        'booleano' => true
    ],

    [
        'fare' => 'Giocare',
        'cosa' => 'Giocare a cod',
        'booleano' => true
    ],
];

header("Content-Type: application/json;");

$jsonString = json_encode($todoList);

echo $jsonString;
