<?php
class Datos{
	private $hostname='127.0.0.1';
	private $usuario='root';
	private $clave='123456';
	private $db='Registro';
	
	public function Datos(){
	}
	
	public function get_hostname(){
		return $this->hostname;
	}
	
	public function get_usuario(){
		return $this->usuario;
	}
	
	public function get_clave(){
		return $this->clave;
	}
	
	public function get_DB(){
		return $this->db;
	}	
}