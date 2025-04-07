import { Serie } from './Serie.js';
import { series } from './data.js';

let totalSeasons = 0;
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;

actualizarTablaDinamica(series);



function actualizarTablaDinamica(series: Serie[]): void {
console.log('Llenando la tabla con series');
for (let i = 0; i < series.length; i++) {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${series[i].position}</td>
                        <td> <a href="${series[i].linkSerie}" target="_blank">${series[i].name}</a> </td>
                        <td>${series[i].channel}</td>
                        <td>${series[i].amountOfSeasons}</td>`;
    seriesTbody.appendChild(trElement);
}
}

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;


function calcularPromedioTemporadas(series: Serie[]): number {
    for (let i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
      }
    let promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
  }