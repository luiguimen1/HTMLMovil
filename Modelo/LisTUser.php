<?php
if ($_POST){
    require '../config.php';
    
    $PersonaDAO = new PersonaDAO();
    $PersonaDAO->listaUser();
}else{
    header("location:../");
}