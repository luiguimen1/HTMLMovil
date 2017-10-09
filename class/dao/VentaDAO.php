<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of VentaDAO
 *
 * @author Mesa
 */
class VentaDAO {

    //put your code here
    function regVenta($data) {
        $VentaVO = new VentaVO();
        $VentaVO->setFkperVO($data["fkperVO"]);
        $VentaVO->setHkproVO($data["fkproVO"]);
        $sql = "insert into venta (fkperVO,fkproVO,precio) values (" . $VentaVO->getFkperVO() . "," . $VentaVO->getHkproVO() . ", (select precio from producto where id = " . $VentaVO->getHkproVO() . "));";
        $BD = new MySQL();
        if ($BD->execute_query($sql) == 1) {

            $sql = "UPDATE persona SET  saldo=(saldo-(select precio from producto where id = " . $VentaVO->getHkproVO() . ")) WHERE id=" . $VentaVO->getFkperVO() . ";";
            $BD->execute_query($sql);

            $sql = "SELECT MAX(id) AS id FROM venta;";
            $data = $BD->query($sql);
            echo $data[0]["id"];
        } else {
            echo '0';
        }
    }

    function elimnarPedido($data) {
        $VentaVO = new VentaVO();
        $VentaVO->setId($data["id"]);
        $sql = "UPDATE persona SET saldo=(saldo+(select precio from venta where id = " . $VentaVO->getId() . ")) WHERE id=(select fkperVO from venta where id = " . $VentaVO->getId() . ");";
        $BD = new MySQL();
        $BD->execute_query($sql);
        $sql = "delete from venta where id =" . $VentaVO->getId() . ";";
        echo $BD->execute_query($sql);
    }

    function ListaVentas($data) {
        $tmp = json_decode(json_encode($data));
        $sql = "SELECT p.id id, p.nombre user, sum(v.precio) precio, sum(v.cantidad) cantidad FROM venta v, persona p WHERE v.fecha BETWEEN '" . $tmp->fechaInicio . "'  AND '" . $tmp->fechaFin . " 23:59:59' and p.id = v.fkperVO group by p.id order by p.nombre;";
        $BD = new MySQL();
        $data = $BD->query($sql);
        echo json_encode($data);
    }

}
