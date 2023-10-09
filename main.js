
let nombre = prompt("Hola! Ingrese su nombre:");
alert(`Bienvenid@ ${nombre} a nuestra sección: Cálculo de Metabolismo Basal`);

alert(`Le pedimos que nos brinde los siguientes datos para poder hacer el cálculo del suyo..`);

const calculoHombre = (elPeso, laAltura, laEdad) => {
    let resultado = ((10 * elPeso) + (6.25 * laAltura) - (5 * laEdad) + 5);
    alert(`Las calorias minimas que debe consumir por dia son: ${resultado}`);
}

const calculoMujer = (elPeso, laAltura, laEdad) => {
    let resultado = ((10 * elPeso) + (6.25 * laAltura) - (5 * laEdad) - 161);
    alert(`Las calorias minimas que debe consumir por dia son: ${resultado}`);
}

let edad = Number(prompt("Ingrese su edad"));
if (edad >= 18){
    let estatura = Number(prompt("Ahora ingrese su estatura en cm"));
        while (isNaN(estatura)) {
            estatura = Number(prompt(`Por favor escriba solamente los números, sin el "cm". \n Ejemplo: "160" para 1,60 m`));
        }
    let peso = Number(prompt("Ingrese su peso en kg"));
        while (isNaN(peso)) {
            peso = Number(prompt(`Por favor escriba solamente los números, sin el "kg". \n Ejemplo: "65" para 65 kg`));
        }
    let genero = prompt(`Por último, indique su género con "M" para Mujer o "H" para Hombre`);
        while (genero != "M" && genero != "H") { 
            genero = prompt(`El campo ingresado es incorrecto. Indique con una "M" o "H" para finalizar.`);
        }
        switch (genero) {
            case "H":
                calculoHombre(peso, estatura, edad);
                break;
            case "M":
                calculoMujer(peso, estatura, edad);
                break;
        }
}
else if (edad < 18) {
    alert("Lo sentimos, no recomendamos brindar esta información a menores de edad.");
} 




