<?php
if ($_POST) {
    if (!isset($_POST["movil"])) {
        ?>
        <form id="ForAddUser" name="ForAddUser">
            <div><input type="hidden" id="id" name="id" value="null" /></div>
            <div><label>Nombre:<input type="text" id="nombre" name="nombre" value="" /></label></div>
            <div><label>Precio:<input type="text" id="precio" name="precio" value="" /></label></div>
            <div><button type="button" id="BuRegProd">Registro</button>
                <button id="cancel" type="button">Cancelar</button></div>
        </form>
        <?php
    } else {
        ?>
        <form id="ForAddUser" name="ForAddUser">
            <input type="hidden" id="id" name="id" value="null" />
            <div class="ui-field-contain">
                <label for="nombre">Nombre</label>
                <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input type="text" name="nombre" id="nombre" placeholder="Ingrese Nombre" value="">
                </div>
            </div>
            <div class="ui-field-contain">
                    <label for="nombre">Precio</label>
                    <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                    <input type="number" name="precio" id="precio" placeholder="Ingrese Nombre" value="">
                </div>
            </div>
            <div class="ui-field-contain">
                <button id="BuRegProd" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-up-c" type="button" data-role="button" data-inline="true">Registar</button>
                <button id="cancel" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-up-c" type="button" data-role="button" data-inline="true">Cancelar</button>
            </div>

        </form>
        <?php
    }
} else {
    header("location:./");
}