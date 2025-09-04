let fecha = new Date();
let mes = fecha.getMonth();
let anio = fecha.getFullYear();
let diasMes = new Date(anio, mes + 1, 0).getDate();
let primerDia = new Date(anio, mes, 1).getDay();
let diasMesAnterior = new Date(anio, mes, 0).getDate();
let lunes = document.getElementById("Lunes");
let martes = document.getElementById("Martes");
let miercoles = document.getElementById("Miercoles");
let jueves = document.getElementById("Jueves");
let viernes = document.getElementById("Viernes");
let sabado = document.getElementById("Sabado");
let domingo = document.getElementById("Domingo");
document.getElementById("fecha").innerHTML = fecha.toDateString();
document.getElementById("header-calendario").innerHTML = fecha.toLocaleString('es-ES', { month: 'long' }) + " " + anio;
for (let i=0; i<=5; i++){
    for (let j=0; j<=6; j++){
        let diaMes = document.createElement("div");
        diaMes.classList.add("dia-mes");
        if (i === 0 && j < primerDia - 1){
            diaMes.innerHTML = diasMesAnterior - (primerDia - 2 - j);
            diaMes.style.color = "#ccc";
        }
        else if ((i === 0 && j >= primerDia - 1) || (i > 0 && (i * 7 + j - primerDia + 1) <= diasMes)){
            diaMes.innerHTML = i * 7 + j - primerDia + 2;
        }
        else{
            diaMes.innerHTML = (i * 7 + j - primerDia + 2) - diasMes;
            diaMes.style.color = "#ccc";
        }
        document.getElementById("dias-mes").appendChild(diaMes);
        if (j === 0){
            lunes.appendChild(diaMes);
        }
        else if (j === 1){
            martes.appendChild(diaMes);
        }
        else if (j === 2){
            miercoles.appendChild(diaMes);
        }
        else if (j === 3){
            jueves.appendChild(diaMes);
        }
        else if (j === 4){
            viernes.appendChild(diaMes);
        }
        else if (j === 5){
            sabado.appendChild(diaMes);
        }
        else if (j === 6){
            domingo.appendChild(diaMes);
        }
        
    }
}
