<?php
if ($_POST){
    require '../config.php';
    $PersonaDAO = new PersonaDAO();
    $PersonaDAO->abonar($_POST);
}else{
    header("location:../");
}

