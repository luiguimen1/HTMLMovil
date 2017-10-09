<?php
class MySQL {
    private $conexion;
    var $dato_conn;

    private function conectar() {
        if (!isset($this->conexion)) {
            $this->conexion = (mysql_connect($this->dato_conn->get_hostname(), $this->dato_conn->get_usuario(), $this->dato_conn->get_clave())) or die(mysql_error());
            mysql_select_db($this->dato_conn->get_DB(), $this->conexion) or die( "Error de acceso A BD" );
        }
    }

    public function MySQL() {
        $this->dato_conn = new Datos();
    }

    private function consulta($sql) {
        $this->conectar();
        $r = mysql_query($sql, $this->conexion);
        if (!$r) {
            $this->cerrar();
            return "-1";
            exit;
        }
        return $r;
    }

    public function query($Select) {
        $datos_db = $this->consulta($Select);
        if ($this->num_rows($datos_db) > 0) {
            $c = 0;
            while ($r = $this->fetch_array($datos_db)) {
                $lis[$c] = $r;
                $c++;
            }
            mysql_free_result($datos_db);
            $this->cerrar();
            return $lis;
        }
        $this->cerrar();
        return 0;
    }

    public function execute_query($Modificar) {
        $datos_db = $this->consulta($Modificar);
        return $datos_db;
    }

    private function fetch_array($consulta) {
        return mysql_fetch_array($consulta);
    }

    private function fetch_object($consulta) {
        return mysql_fetch_object($consulta);
    }

    private function num_rows($consulta) {
        return mysql_num_rows($consulta);
    }

    private function cerrar() {
        try {
            mysql_close($this->conexion);
            $this->conexion = null;
        } catch (Exception $e) {
            
        }
    }

}