<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of VentaVO
 *
 * @author Mesa
 */
class VentaVO {
    //put your code here
    private $id;
    private $fkperVO;
    private $hkproVO;
    private $precio;
    private $fecha;
    
    
    function getId() {
        return $this->id;
    }

    function getFkperVO() {
        return $this->fkperVO;
    }

    function getHkproVO() {
        return $this->hkproVO;
    }

    function getPrecio() {
        return $this->precio;
    }

    function getFecha() {
        return $this->fecha;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setFkperVO($fkperVO) {
        $this->fkperVO = $fkperVO;
    }

    function setHkproVO($hkproVO) {
        $this->hkproVO = $hkproVO;
    }

    function setPrecio($precio) {
        $this->precio = $precio;
    }

    function setFecha($fecha) {
        $this->fecha = $fecha;
    }
}
