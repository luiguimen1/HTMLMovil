<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PersonaDAO
 *
 * @author Mesa
 */
class PersonaDAO {

    //put your code here
    public function listaUser() {
        $sql = " select * from persona order by nombre desc;";
        $bd = new MySQL();
        $data = $bd->query($sql);
        echo json_encode($data);
    }

    public function registar($data) {
        $PersonaVO = new PersonaVO();
        $tmp = json_decode(json_encode($data));
        $PersonaVO->setId($tmp->id);
        $PersonaVO->setNombre($tmp->nombre);
        $sql = "insert into persona (id,nombre) values (" . $PersonaVO->getId() . ",'" . $PersonaVO->getNombre() . "') "
                . "ON DUPLICATE KEY UPDATE nombre = '" . $PersonaVO->getNombre() . "';";
        $BD = new MySQL();
        echo $BD->execute_query($sql);
    }

    public function abonar($data) {
        $PersonaVO = new PersonaVO();
        $tmp = json_decode(json_encode($data));
        $PersonaVO->setId($tmp->adID);
        $PersonaVO->setAbona($tmp->abona);
        $sql = "UPDATE persona SET saldo=(saldo+" . $PersonaVO->getAbona() . ") where id=" . $PersonaVO->getId() . ";";
        $BD = new MySQL();
        echo $BD->execute_query($sql);
    }

}
