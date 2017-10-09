<?php
if ($_POST){
    require '../config.php';
    
    $PersonaDAO = new PersonaDAO();
    $PersonaDAO->registar($_POST);
}else{
    header("location:../");
}