<?php
if ($_POST){
    require '../config.php';
    $VentaDAO = new VentaDAO();
    $VentaDAO->regVenta($_POST);
}else{
    header("location:../");
}