<?php
require './config.php';
$bd = new MySQL();

print_r($bd->query($_POST["consulta"]));
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

