/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    var fkperVO;
    var idDivVenta;
    var Nombre;
    var desp;

    function cargarUser() {
        $("#user").html("");
        $("#TraerUser").fadeOut();
        var request = "Modelo/ListUser.php";
        var cadena = "acceso=true";
        metodo = function (datos) {
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var PersonaVO = data[i];
                PersonaVO.type = "fkperVO" + PersonaVO.id;
                PersonaVO.precio = 0;
                $("#user").append(Estructura(PersonaVO));
                $("#" + PersonaVO.type).click(function () {
                    var nombre = $(this).children("#UserNombre").html();
                    fkperVO = $(this).attr("fk");
                    $("#Comprador").fadeIn("show");
                    $("#ElNombre").html(nombre + " id =" + fkperVO);
                    CargarProductos();
                });
            }
        };
        f_ajax(request, cadena, metodo);
    }

    $("#TraerUser").click(function () {
        cargarUser();
    });

    function CargarProductos() {
        $("#user").html("");
        var request = "Modelo/LisTProd.php";
        var cadena = "acceso=true";
        metodo = function (datos) {
            $("#cancelpedio").fadeIn();
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var Producto = data[i];
                Producto.type = "fkproVO" + Producto.id;
                $("#user").append(Estructura(Producto));
                $("#" + Producto.type).click(function () {
                    $("#Comprados").fadeIn();
                    var nombre = $(this).children("#UserNombre").html();
                    fkproVO = $(this).attr("fk");
                    var request = "Modelo/registroVenta.php";
                    var cadena = "acceso=true&fkperVO=" + fkperVO + "&fkproVO=" + fkproVO + "";
                    var metodo = function (datos) {
                        if (datos != 0) {
                            var Micompra = {nombre: nombre, type: "compra" + datos, id: datos};
                            $("#Comprados").append(EstructuraQuitar(Micompra));
                            $("#" + Micompra.type).click(function () {
                                var id = $(this).attr("fk");
                                idDivVenta = $(this).attr("id");
                                var request = "Modelo/EliminarVenta.php";
                                var cadena = "acceso=true&id=" + id + "";
                                var metodo = function (datos) {
                                    if (parseInt(datos) != -1) {
                                        $("#" + idDivVenta).remove();
                                        idDivVenta = "";
                                    } else {
                                        alert("Comuniquese con el administrador error 2 " + datos);
                                    }
                                };
                                f_ajax(request, cadena, metodo);
                            });
                        } else {
                            alert("Comuniquese con el administrador")
                        }
                    };
                    f_ajax(request, cadena, metodo);
                });
            }
        };
        f_ajax(request, cadena, metodo);
    }

    function Estructura(Object) {
        var TextoHTML = '<div class="selecionar col-lg-2 well well-sm padre" id="' + Object.type + '" fk="' + Object.id + '" ' + (Object.precio != 0 ? ' valor="' + Object.precio + '"' : "") + '>' +
                '<div class="col-lg-4 hijo1">' +
                '    <img src="img/' + Object.foto + '" width="100%">' +
                '</div>' +
                '<div class="col-lg-8 hijo2" id="UserNombre">' + Object.nombre
        '</div>' +
                '</div>';
        return TextoHTML;
    }

    function EstructuraQuitar(Object) {
        var TextoHTML = '<div class="selecionar col-lg-2 well well-sm padre" id="' + Object.type + '" fk="' + Object.id + '">' +
                '<div class="col-lg-8 hijo2" id="UserNombre">' + Object.nombre + '' +
                '</div>' +
                '<div class="col-lg-4 hijo1">' +
                '    <img src="img/quitar.png" width="100%">' +
                '</div>' +
                '</div>';
        return TextoHTML;
    }

    $("#cancelpedio").click(function () {
        $("#user").html("");
        $("#Comprados").html("");
        $("#Comprador").html("");
        $(this).fadeOut();
        $("#TraerUser").fadeIn();
        $("#Comprador").fadeOut();
        $("#Comprados").fadeOut();
    });

    $("#Ejecutar").click(function () {
        var request = "sql.php";
        cadena = "acceso=true&consulta=" + $("#SQL").val();
        var metodo = function (datos) {
            $("#user").html(datos);
        };
        f_ajax(request, cadena, metodo);
    });

    $("#AddUser").click(function () {
        var request = "Usuario/AddUser.php";
        var cadena = "acceso=true";
        var metodo = function (datos) {
            $("#user").html(datos);
            $("#BuRegUser").click(function () {
                var nombre = $("#nombre").val();
                if (nombre == "" ) {
                    alert("El campo no pueden estar sin diligenciar");
                } else {
                    request = "Usuario/RegUser.php";
                    var cadena = "acceso=true&" + $("#ForAddUser").serialize();
                    
                    var metodo = function (datos) {
                        if(datos=="1"){
                            alert("Datos Almacenados");
                            $("#ForAddUser").reset();
                        }else{
                            alert("Error de Comunicacón");
                        }
                    };
                    f_ajax(request, cadena, metodo);
                }
            });
            $("#cancel").click(function () {
                cargarUser();
            });
        };
        f_ajax(request, cadena, metodo);
    });


    $("#AddPro").click(function () {
        var request = "Producto/AddProd.php";
        var cadena = "acceso=true";
        $("#Comprador").html("");
        $("#Comprados").html("");
        var metodo = function (datos) {
            $("#user").html(datos);
            $("#BuRegProd").click(function () {
                var nombre = $("#nombre").val();
                var precio = $("#precio").val();
                if (nombre == "" || precio == "") {
                    alert("los campos no pueden estar sin diligenciar");
                } else {
                    request = "Producto/RegProd.php";
                    var cadena = "acceso=true&" + $("#ForAddUser").serialize();
                    var metodo = function (datos) {
                        if(datos=="1"){
                            alert("Datos Almacenados");
                            $("#ForAddUser").reset();
                        }else{
                            alert("Error de Comunicacón");
                        }
                    };
                    f_ajax(request, cadena, metodo);
                }
            });
            $("#cancel").click(function () {
                cargarUser();
            });
        };
        f_ajax(request, cadena, metodo);
    });

    var ObjectUpdate;
    $("#UpdPro").click(function () {
        $("#user").html("");
        var request = "Modelo/LisTProd.php";
        var cadena = "acceso=true";
        var metodo = function (datos) {
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var Producto = data[i];
                Producto.type = "fkproVO" + Producto.id;
                $("#user").append(Estructura(Producto));
                $("#" + Producto.type).click(function () {
                    var id = $(this).attr("fk");
                    var precio = $(this).attr("valor");
                    var nombre = $(this).children("#UserNombre").html();
                    ObjectUpdate = {
                        id: id,
                        precio: precio,
                        nombre: nombre
                    };
                    $("#AddPro").on("click", function () {
                        if (ObjectUpdate != null) {
                            setTimeout(function () {
                                $("#nombre").val(ObjectUpdate.nombre);
                                $("#id").val(ObjectUpdate.id);
                                $("#precio").val(ObjectUpdate.precio);
                                ObjectUpdate = null;
                            }, 500);
                        }
                    }).trigger("click");
                });
            }
        };
        f_ajax(request, cadena, metodo);
    });
    
    $("#UpdUser").click(function () {
        $("#user").html("");
       // IngresoMenu();
        var request = "Modelo/LisTUser.php";
        var cadena = "acceso=true";
        var metodo = function (datos) {
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var Producto = data[i];
                Producto.type = "fkuserVO" + Producto.id;
                $("#user").append(Estructura(Producto));
                $("#" + Producto.type).click(function () {
                    var id = $(this).attr("fk");
                    var nombre = $(this).children("#UserNombre").html();
                    ObjectUpdate = {
                        id: id,
                        nombre: nombre
                    };
                    $("#AddUser").on("click", function () {
                        if (ObjectUpdate != null) {
                            setTimeout(function () {
                                $("#id").val(ObjectUpdate.id);
                                $("#nombre").val(ObjectUpdate.nombre);
                                ObjectUpdate = null;
                            }, 500);
                        }
                    }).trigger("click");
                });
            }
        };
        f_ajax(request, cadena, metodo);
    });
});