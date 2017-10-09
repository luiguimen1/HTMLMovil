-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Servidor: localhost
-- Tiempo de generación: 02-10-2017 a las 01:54:34
-- Versión del servidor: 5.0.51
-- Versión de PHP: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Base de datos: `registro`
-- 

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `persona`
-- 

CREATE TABLE `persona` (
  `id` int(11) NOT NULL auto_increment,
  `nombre` varchar(50) collate utf8_unicode_ci NOT NULL,
  `foto` varchar(50) collate utf8_unicode_ci NOT NULL default 'sinfoto.png',
  `saldo` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`),
  KEY `nombre` (`nombre`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

-- 
-- Volcar la base de datos para la tabla `persona`
-- 

INSERT INTO `persona` VALUES (1, 'Johana', 'sinfoto.png', 0);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `producto`
-- 

CREATE TABLE `producto` (
  `id` int(11) NOT NULL auto_increment,
  `nombre` varchar(50) collate utf8_unicode_ci NOT NULL,
  `foto` varchar(50) collate utf8_unicode_ci NOT NULL default 'sinfoto2.png',
  `precio` int(11) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=19 ;

-- 
-- Volcar la base de datos para la tabla `producto`
-- 

INSERT INTO `producto` VALUES (12, 'Yogurt Bolsa', 'sinfoto2.png', 1000);
INSERT INTO `producto` VALUES (11, 'Jugo Nectar', 'sinfoto2.png', 2000);
INSERT INTO `producto` VALUES (10, 'Vive 100', 'sinfoto2.png', 2000);
INSERT INTO `producto` VALUES (9, 'Gomitas', 'sinfoto2.png', 300);
INSERT INTO `producto` VALUES (8, 'ChocoBreak', 'sinfoto2.png', 200);
INSERT INTO `producto` VALUES (7, 'Wafer Noel', 'sinfoto2.png', 400);
INSERT INTO `producto` VALUES (6, 'Chocoso', 'sinfoto2.png', 1500);
INSERT INTO `producto` VALUES (5, 'Ponque Gala', 'sinfoto2.png', 1000);
INSERT INTO `producto` VALUES (4, 'Chocolatina Jet', 'sinfoto2.png', 500);
INSERT INTO `producto` VALUES (3, 'Chokis', 'sinfoto2.png', 800);
INSERT INTO `producto` VALUES (2, 'Brownie', 'sinfoto2.png', 1800);
INSERT INTO `producto` VALUES (1, 'coca-cola', 'sinfoto2.png', 2000);
INSERT INTO `producto` VALUES (13, 'Jugo Hit', 'sinfoto2.png', 1200);
INSERT INTO `producto` VALUES (14, 'Pony Malta', 'sinfoto2.png', 1200);
INSERT INTO `producto` VALUES (18, 'Milo Frio', 'sinfoto2.png', 2000);

-- --------------------------------------------------------

-- 
-- Estructura de tabla para la tabla `venta`
-- 

CREATE TABLE `venta` (
  `id` int(11) NOT NULL auto_increment,
  `fkperVO` int(11) NOT NULL,
  `fkproVO` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL default '1',
  `precio` int(11) NOT NULL,
  `fecha` timestamp NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=107 ;

-- 
-- Volcar la base de datos para la tabla `venta`
-- 

