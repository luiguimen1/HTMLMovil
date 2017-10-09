<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ProductoVO
 *
 * @author Mesa
 */
class ProductoVO {
    //put your code here
    private $id;
    private $nombre;
    private $foto;
    private $precio;
    
    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getFoto() {
        return $this->foto;
    }

    function getPrecio() {
        return $this->precio;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setFoto($foto) {
        $this->foto = $foto;
    }

    function setPrecio($precio) {
        $this->precio = $precio;
    }
}
