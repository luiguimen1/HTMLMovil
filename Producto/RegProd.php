<?php
if ($_POST){
    require '../config.php';
    
    $ProductoDAO = new ProductoDAO();
    $ProductoDAO->registar($_POST);
}else{
    header("location:../");
}