import { series } from './data.js';
var totalSeasons = 0;
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
actualizarTablaDinamica(series);
function actualizarTablaDinamica(series) {
    console.log('Llenando la tabla con series');
    for (var i = 0; i < series.length; i++) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(series[i].position, "</td>\n                        <td> <a href=\"").concat(series[i].linkSerie, "\" target=\"_blank\">").concat(series[i].name, "</a> </td>\n                        <td>").concat(series[i].channel, "</td>\n                        <td>").concat(series[i].amountOfSeasons, "</td>");
        seriesTbody.appendChild(trElement);
    }
}
promedioDiv.innerHTML = "Seasons average: ".concat(calcularPromedioTemporadas(series));
function calcularPromedioTemporadas(series) {
    for (var i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
    }
    var promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
}
