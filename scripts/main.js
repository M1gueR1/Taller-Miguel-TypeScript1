import { series } from './data.js';
var totalSeasons = 0;
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.position, "</td>\n                        <td> <a href=\"").concat(serie.linkSerie, "\" target=\"_blank\"> ").concat(serie.name, " </td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.amountOfSeasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
promedioDiv.innerHTML = "Seasons average: ".concat(calcularPromedioTemporadas(series));
function calcularPromedioTemporadas(series) {
    for (var i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
    }
    var promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
}
