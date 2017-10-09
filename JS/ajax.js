loading = '<center><img src="img/loading.gif" alt="Procesando"/></center>';
ImgError = '<span><img src="img/error.png" alt="Error" width="32px" height="32px" /></span>';
ImgAcierto = '<span><img src="img/acierto.png" alt="Acierto" width="32px" height="32px"/></span>';

jQuery.fn.reset = function () {
    $(this).each(function () {
        this.reset();
    });
};

var efe_aja;
function f_ajax(request, cadena, metodo) {
    this.efe_aja = $.ajax({
        url: request,
        cache: false,
        beforeSend: function () { /*httpR es la variable global donde guardamos la conexion*/
            $(document).ajaxStop();
            $(document).ajaxStart();
        },
        type: "POST",
        dataType: "html",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8;',
        data: cadena,
        //timeout: 8000,
        success: function (datos) {
            metodo(datos);
        },
        error: function () {//jqXHR, textStatus, errorThrown 
            alert("Error");
        }
    });
}
