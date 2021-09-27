<?php
    $pT = $_POST['puntT'];
    $pF = $_POST['puntF'];
    //Te dejo el ID del participante para que puedas buscar sus datos desde la base de datos
    $idUser = $_POST['idUser'];
    
    echo "Id del usuario: ".$idUser.".";//pruebas
    echo "Puntaje Tecnico: ".$pT." Puntaje Fisico: ".$pF." ..."//pruebas

?>