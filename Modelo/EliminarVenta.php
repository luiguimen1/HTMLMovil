<?php
if ($_POST){
    require '../config.php';
    $VentaDAO = new VentaDAO();
    $VentaDAO->elimnarPedido($_POST);
}else{
    header("location:../");
}
