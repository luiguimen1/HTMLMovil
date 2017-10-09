
$(document).ready(function () {
    var fkperVO;
    var idDivVenta;
    var Nombre;
    var desp;
    $(document).on("mobileinit", function () {
        $.mobile.loader.prototype.options.text = "<b>Conectando...</b>";
        $.mobile.loader.prototype.options.textVisible = true;
        $.mobile.loader.prototype.options.textonly = false;
        $.mobile.loader.prototype.options.theme = "a";
        $.mobile.loader.prototype.options.html = "";
    });


    $("#boton1").click(function () {
        $.mobile.loading("show");
        setTimeout(function () {
            var use = $("#usuario").val();
            var cla = $("#clave").val();
            if (use == "johana" && cla == "Qwerty123") {
                $.mobile.loading("hide");
                var usuario = $("#usuario").val();
                var mensaje = "Bienvenido " + usuario + " al sistema!!";
                $("#mensaje").html(mensaje);
                $.mobile.changePage("#paginaPerfil", {
                    transition: "flip"
                });
            } else {
                $.mobile.changePage("#pagina2");
            }
        }, 1000);
    });

    $(".Salir").click(function () {
        $.mobile.changePage("#pagina1", {
            transition: "pop",
            speed: 1000
        });
    });


    $(".Inico").click(function () {
        $(this).fadeOut(0);
        $("#Comprador").fadeOut(0);
        $("#Opciones").fadeIn(200);
        $("#user").html("");
        $("#Comprados").html("");
        $.mobile.changePage("#paginaPerfil", {
            transition: "flip"
        });
    });
    function IngresoMenu() {
        $("#Comprador").html("");
        $("#Comprados").html("");
        $("#Opciones").fadeOut(0);
        $(".Inico").fadeIn(200);
    }


    function cargarUser() {
        $("#user").html("<p></p>");
        IngresoMenu();
        var request = "Modelo/ListUser.php";
        var cadena = "acceso=true";
        metodo = function (datos) {
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var PersonaVO = data[i];
                PersonaVO.type = "fkperVO" + PersonaVO.id;
                PersonaVO.precio = 0;
                $("#user p").append(Estructura(PersonaVO));
                $("#" + PersonaVO.type).click(function () {
                    var nombre = $(this).html();
                    fkperVO = $(this).attr("fk");
                    $("#Comprador").fadeIn("show");
                    $("#ElNombre").html(nombre + " id =" + fkperVO);
                    CargarProductos();
                });
            }
        };
        f_ajax(request, cadena, metodo);
    }

    function CargarProductos() {
        $("#user").html("<p></p>");
        var request = "Modelo/LisTProd.php";
        var cadena = "acceso=true";
        metodo = function (datos) {
            var data = $.parseJSON(datos);
            var limite = data.length;
            for (var i = 0; i < limite; i++) {
                var Producto = data[i];
                Producto.type = "fkproVO" + Producto.id;
                $("#user").append(Estructura(Producto));
                $("#" + Producto.type).click(function () {
                    $("#Comprados").fadeIn();
                    var nombre = $(this).html();
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
        return '<button data-role="button" data-theme="a" data-inline="true" class="ui-link ui-btn ui-btn-a ui-btn-inline ui-shadow ui-corner-all" style="width:99px; padding-left:0px; padding-right:0px; " saldo="' + Object.saldo + '" id="' + Object.type + '" fk="' + Object.id + '" ' + (Object.precio != 0 ? ' valor="' + Object.precio + '"' : "") + '><img src="img/' + Object.foto + '" width="15px">' + Object.nombre + '</button>';
    }

    function EstructuraQuitar(Object) {
        var TextoHTML = '<a data-role="button" data-theme="a" data-inline="true" class="ui-link ui-btn ui-btn-b ui-btn-inline ui-shadow ui-corner-all" id="' + Object.type + '" fk="' + Object.id + '" ' + (Object.precio != 0 ? ' valor="' + Object.precio + '"' : "") + '>' + Object.nombre + '</a>';
        return TextoHTML;
    }

    $("#TraerUser").click(function () {
        cargarUser();
    });
    $("#AddUser").click(function () {
        var request = "Usuario/AddUser.php";
        var cadena = "acceso=true&movil=true";
        IngresoMenu();
        var metodo = function (datos) {
            $("#user").html(datos);
            $("#BuRegUser").click(function () {
                var nombre = $("#nombre").val();
                if (nombre == "") {
                    alert("El campo no pueden estar sin diligenciar");
                } else {
                    request = "Usuario/RegUser.php";
                    var cadena = "acceso=true&" + $("#ForAddUser").serialize();
                    var metodo = function (datos) {
                        if (datos == "1") {
                            alert("Datos Almacenados");
                            $("#ForAddUser").reset();
                            $("#Inico").trigger("click");
                        } else {
                            alert("Error de Comunicacón");
                        }
                    };
                    f_ajax(request, cadena, metodo);
                }
            });
            $("#cancel").click(function () {
                // cargarUser();
                $("#Inico").trigger("click");
            });
        };
        f_ajax(request, cadena, metodo);
    });
    $("#AddPro").click(function () {
        var request = "Producto/AddProd.php";
        var cadena = "acceso=true&movil=true";
        IngresoMenu();
        var metodo = function (datos) {
            $("#user").html(datos);
            $("#BuRegProd").click(function () {
                var nombre = $("#nombre").val();
                var precio = $("#precio").val();
                if (Nombre == "" || precio == "") {
                    alert("los campos no pueden estar sin diligenciar");
                } else {
                    request = "Producto/RegProd.php";
                    var cadena = "acceso=true&" + $("#ForAddUser").serialize();
                    var metodo = function (datos) {
                        if (datos == "1") {
                            alert("Datos Almacenados");
                            $("#ForAddUser").reset();
                            $("#Inico").trigger("click");
                        } else {
                            alert("Error de Comunicacón");
                        }
                    };
                    f_ajax(request, cadena, metodo);
                }
            });
            $("#cancel").click(function () {
                // cargarUser();
                $("#Inico").trigger("click");
            });
        };
        f_ajax(request, cadena, metodo);
    });
    var ObjectUpdate;
    $("#UpdPro").click(function () {
        $("#user").html("");
        IngresoMenu();
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
                    var nombre = $(this).html().split(">")[1];
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
    $("#AbonosUser").click(function () {
        $("#user").html("");
        IngresoMenu();
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
                    $.mobile.changePage("#abonar", {
                        transition: "flip"
                    });
                    var id = $(this).attr("fk");
                    var nombre = $(this).html().split(">")[1];
                    var saldo = $(this).attr("saldo");
                    $("#abuser").val(nombre);
                    $("#absaldo").val((eval(saldo) * -1));
                    $("#adID").val(id);
                    $("#abona").val("");
                    $("#regAbono").unbind();
                    $("#conPago").unbind();
                    $("#regAbono").click(function () {
                        if (eval($("#abona").val()) > 0) {
                            $.mobile.changePage("#ConfiAbono", {
                                transition: "flip"
                            });
                            $("#conCli").html($("#abuser").val());
                            $("#conDeb").html($("#absaldo").val());
                            $("#conAbo").html($("#abona").val());
                            $("#conPago").fadeIn();
                            $("#InfoTra").html("");
                            $("#conPago").click(function () {
                                $.mobile.loading("show");
                                var request = "Modelo/AbonaSaldo.php";
                                var cadena = "acceso=true&" + $("#forPago").serialize();
                                var metodo = function (datos) {
                                    $.mobile.loading("hide");
                                    if (eval(datos) == 1) {
                                        $("#conPago").fadeOut();
                                        $("#InfoTra").html("<h4>Transacción satisfactoría</h4>");
                                        setTimeout(function () {
                                            $(".Inico").trigger("click");
                                        }, 2500);
                                    } else {
                                        $("#InfoTra").html("<h5>Error</h4>");
                                    }
                                };
                                f_ajax(request, cadena, metodo);
                            });

                        } else {
                            alert("Error abano no puede estar limpio");
                        }
                    });
                });
            }
        };
        f_ajax(request, cadena, metodo);
    });




    $("#UpdUser").click(function () {
        $("#user").html("");
        IngresoMenu();
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
                    var nombre = $(this).html().split(">")[1];
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
    $("#InfoVen").click(function () {
        IngresoMenu();
        var request = "Usuario/ForInfo.php";
        var cadena = "acceso=true&movil=true";
        var metodo = function (datos) {
            $("#user").html(datos);
            $(function () {
                var dateFormat = "mm/dd/yy",
                        from = $("#fechaInicio")
                        .datepicker({
                            defaultDate: "+1w",
                            changeMonth: true,
                            numberOfMonths: 3
                        })
                        .on("change", function () {
                            to.datepicker("option", "minDate", getDate(this));
                        }),
                        to = $("#fechaFin").datepicker({
                    defaultDate: "+1w",
                    changeMonth: true,
                    numberOfMonths: 3
                }).on("change", function () {
                    from.datepicker("option", "maxDate", getDate(this));
                });

                function getDate(element) {
                    var date;
                    try {
                        date = $.datepicker.parseDate(dateFormat, element.value);
                    } catch (error) {
                        date = null;
                    }
                    return date;
                }
            });
            $("#fechaInicio").datepicker("option", "dateFormat", "yy/mm/dd");
            $("#fechaFin").datepicker("option", "dateFormat", "yy/mm/dd");
            // $("#fechaFin").datepicker();
            $("#general").click(function () {
                $("#listado tbody").html("");
                $("#listado").fadeOut();
                $("#GenerarExcel").fadeOut();
                var request = "Modelo/ListInfo.php";
                var cadena = "movil=true%acceso=true&" + $("#forInform").serialize();
                var metodo = function (datos) {
                    if (datos != 0) {
                        var tmp = $.parseJSON(datos);
                        $("#listado").fadeIn();
                        var limite = tmp.length;
                        $("#FecIni").html($("#fechaInicio").val());
                        $("#FecFin").html($("#fechaFin").val());
                        for (var i = 0; i < limite; i++) {
                            var tr = $("<tr></tr>");
                            var venta = tmp[i];
                            $("#listado tbody").append(tr);
                            tr.append("<td>" + venta.user + "</td>");
                            tr.append("<td>" + venta.cantidad + "</td>");
                            tr.append("<td>" + venta.precio + "</td>");
                            tr.append("<td id='Lista" + venta.id + "' fkuser='" + venta.id + "'> ver Lista </td>");
                            $("#Lista" + venta.id).click(function () {
                                var id = $(this).attr("fkuser");
                                var fecIni = $("#fechaInicio").val();
                                var fecFin = $("#fechaFin").val();
                                alert(id + " " + fecIni + " " + fecFin);
                            }).css("cursor", "pointer");
                        }
                        var tr = $("<tr></tr>");
                        $("#listado tbody").append(tr);
                        tr.append("<td colspan='4'><center><h4>Fin del Listado</h4></center></td>");
                        $("#GenerarExcel").fadeIn();
                    } else {
                        alert("No hay datos en las fechas en relaciona a la consulta");
                    }
                };
                f_ajax(request, cadena, metodo);
            });

            $("#GenerarExcel").click(function () {
                $("#listado").table2excel({
                    exclude: ".noExl",
                    name: "Reporte de Ventas"
                });
            });
            $("#cancel").click(function () {
                // cargarUser();
                $("#Inico").trigger("click");
            });
        };
        f_ajax(request, cadena, metodo);
    });
});
