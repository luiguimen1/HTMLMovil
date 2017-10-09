<?php
if ($_POST){
    require '../config.php';
    
    $VentaDAO = new VentaDAO();
    $VentaDAO->ListaVentas($_POST);
}else{
    header("location:../");
}