<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ProductoDAO
 *
 * @author Mesa
 */
class ProductoDAO {

    //put your code here
    public function listaProductos() {
        $sql = " select * from producto order by nombre desc;";
        $bd = new MySQL();
        $data = $bd->query($sql);
        echo json_encode($data);
    }

    public function registar($data) {
        $ProductoVO = new ProductoVO();
        $tmp = json_decode(json_encode($data));
        $ProductoVO->setId($tmp->id);
        $ProductoVO->setNombre($tmp->nombre);
        $ProductoVO->setPrecio($tmp->precio);
        $sql="insert into producto (id,nombre,precio) values (".$ProductoVO->getId().",'".$ProductoVO->getNombre()."','".$ProductoVO->getPrecio()."') "
                . "ON DUPLICATE KEY UPDATE nombre = '".$ProductoVO->getNombre()."',precio='".$ProductoVO->getPrecio()."';";
        $BD=new MySQL();
        echo $BD->execute_query($sql);
    }

}
