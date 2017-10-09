<?php
ini_set('display_errors', 0);
$r_r = "";
while (!file_exists($r_r . 'class/Mysql/Datos.php')) {
    $r_r.= '../';
}
require $r_r . 'class/Mysql/Datos.php';
require $r_r . 'class/Mysql/MySQL.php';
require $r_r . 'class/dao/PersonaDAO.php';
require $r_r . 'class/dao/ProductoDAO.php';
require $r_r . 'class/dao/VentaDAO.php';
require $r_r . 'class/vo/PersonaVO.php';
require $r_r . 'class/vo/ProductoVO.php';
require $r_r . 'class/vo/VentaVO.php';