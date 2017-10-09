<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PersonaVo
 *
 * @author Mesa
 */
class PersonaVO {
    //put your code here
    private $id;
    private $nombre;
    private $foto;
    private $abona;
    
    function getAbona() {
        return $this->abona;
    }

    function setAbona($abona) {
        $this->abona = $abona;
    }
    
    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getFoto() {
        return $this->foto;
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
    
}
