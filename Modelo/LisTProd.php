<?php
if ($_POST){
    require '../config.php';
    
    $ProductoDAO = new ProductoDAO();
    $ProductoDAO->listaProductos();
}else{
    header("location:../");
}