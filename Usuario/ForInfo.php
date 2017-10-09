<?php
if ($_POST) {
    if (!isset($_POST["movil"])) {
        ?>

        <?php
    } else {
        ?>
        <form id="forInform" name="forInform">
            <label>Fecha Inicio</label>
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input type="text" data-role="date" id="fechaInicio" name="fechaInicio">
            </div>

            <label>Fecha Fin</label>
            <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">
                <input type="text" data-role="date" id="fechaFin" name="fechaFin">    
            </div>
            <div class="ui-field-contain">
                <button type="button" id="general" name="general" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-up-c">Generar</button>
                <button type="button" id="cancel" name="cancel" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-up-c">Cancelar</button>
                <button type="button" style="display: none;" id="GenerarExcel" name="GenerarExcel" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-inline ui-btn-up-c">Excel</button>
            </div>
        </form>
<div id="error1">
    
</div>
        <table id="listado" style="display: none;" data-role="table" id="table-custom-2" data-mode="columntoggle" class="ui-body-d ui-shadow table-stripe ui-responsive ui-table ui-table-columntoggle" data-column-btn-theme="b" data-column-btn-text="Columns to display..." data-column-popup-theme="a">
            <thead>
                <tr class="ui-bar-d">
                    <th colspan="4">Informe de gastos por usuario   </th>
                </tr>
                <tr class="ui-bar-d">
                    <th data-priority="1" style="text-align: right;">Fecha Inicio</th>
                    <th id="FecIni"></th>
                    <th data-priority="1" style="text-align: right;">Fecha Fin</th>
                    <th id="FecFin">Ver</th>
                </tr>
                <tr class="ui-bar-d">
                    <th data-priority="2">Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Ver</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>

        <?php
    }
}