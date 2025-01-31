let nombre = prompt('Por favor, ingresa tu nombre')
alert(`¡Hola ${nombre}! Te damos la bienvenida a Guess the Number. Vamos a configurar tu entorno de juego`)
let numeroMaximoPosible = prompt('Tú decides la dificultad! Ingresa el número (rango) máximo a adivinar. Ejemplo: 10, 20, 50, etc.');
let intentos = prompt('Bien! Ahora ingresa el número de intentos que quieres tener');

let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let maximosIntentos = 5;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingresa un número entre 1 y ${numeroMaximoPosible}`));

    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Acertaste! El número era ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor')
        } else {
            alert('El número secreto es mayor')
        }
        intentos++;

        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}