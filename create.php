<?php
//Richiamo il file jSon che è lo stesso della list.php
$fileJson = file_get_contents("dati.json");

//decodifico fileJson cje sono i dati della lista che mi viene caricata al mounted della pagina in main.js
$todoList = json_decode($fileJson, true);

//creo variabile per aggiungere un nuovo componente alla lista che ha la stessa chiave degli elementi che già sono in lista
$newElementTodo = [
    "cosa" => $_POST["cosa"],
    "fare" => $_POST["fare"],
    "booleano" => true
];


//pusho il nuovo elemento nella lista all'ultimo indice visto che non lo sto dihiarando nelle quadre
$todoList[] = $newElementTodo;

//creo variabile printJson e dico che mi deve ricodificare print in versione json
$todoListJson = json_encode($todoList);

//scrivo di nuovo la lista aggionata con ogni elemento sul disco
file_put_contents("dati.json", $todoListJson);

header('Content-Type: application/json');


echo $todoListJson;
