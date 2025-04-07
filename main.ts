import { Serie } from './Serie.js';
import { series } from './data.js';

let totalSeasons = 0;
let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;

renderSeriesInTable(series);



function renderSeriesInTable(series: Serie[]): void {
console.log('Desplegando series');
series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.position}</td>
                        <td> <a href=\"${serie.linkSerie}\" target="_blank"> ${serie.name} </td>
                        <td>${serie.channel}</td>
                        <td>${serie.amountOfSeasons}</td>`;
    seriesTbody.appendChild(trElement);
});
}

promedioDiv.innerHTML = `Seasons average: ${calcularPromedioTemporadas(series)}`;


function calcularPromedioTemporadas(series: Serie[]): number {
    for (let i = 0; i < series.length; i++) {
        totalSeasons += series[i].amountOfSeasons;
      }
    let promedioSeasons = totalSeasons / series.length;
    return promedioSeasons;
  }