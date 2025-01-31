# Guess the Number

## Descripción del proyecto

Bienvenido a **Guess the Number**, un divertido juego de adivinanzas en el que pondrás a prueba tu intuición y estrategia. ¡Tú decides el rango de números y la cantidad de intentos para encontrar el número secreto! Con cada intento, recibirás pistas que te acercarán a la respuesta correcta. ¡Buena suerte!

## Tabla de Contenidos

- [Descripción del proyecto](#descripci%C3%B3n-del-proyecto)
- [Demo](#demo)
- [Características Principales](#caracter%C3%ADsticas-principales)
- [Instalación y Ejecución](#instalaci%C3%B3n-y-ejecuci%C3%B3n)
- [El Proceso](#el-proceso)

## Demo

![Demo Guess The Number](/img/Guess-the-number-js-Made-with-Clipchamp.gif)

## Características Principales

- El usuario define el rango de números a adivinar.
- Se puede establecer la cantidad de intentos.
- El juego proporciona pistas en cada intento para guiarte.
- Simple, intuitivo y rápido de jugar.
- Experiencia interactiva con prompts y alertas en el navegador.

## Instalación y Ejecución

1. **Descarga o clona el repositorio**:
   ```sh
   git clone https://github.com/PamWebDev/Guess-The-Number-JavaScript.git
   ```
2. **Abre el archivo en tu navegador**:
   - Dirígete a la carpeta donde descargaste el proyecto y abre el archivo `index.html` en tu navegador favorito.
3. **¡Disfruta del juego!**

## El Proceso

Este proyecto nació como una forma divertida de aplicar y reforzar conocimientos en JavaScript, especialmente en el uso de estructuras de control, interacción con el usuario y manipulación de valores aleatorios. Cada decisión en el diseño del juego está pensada para ofrecer una experiencia desafiante pero accesible para todos.

Aquí un poco sobre mi proceso: 

1. Una primera versión con funciones básicas que permitieran definir el rumbo del juego.
```sh
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}
```
2. Aquí ya se considera la posibilidad de que el usuario tenga más de un intento para poder adivinar, así que implementamos un bucle while, además de brindar pistas y mensajes que indiquen el estado del juego. 
```sh
//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
    }
}
```
3. En este punto, empezamos a agregar funciones para hacer el juego más divertido y el código más limpio, por ejemplo, la implementación de `Math.random` para tener un número aleatorio en cada turno, y el uso de operadores ternarios para reducir líneas de código.
```sh
//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}

```
4. Finalmente, se agregaron mensajes y funciones (personalización de número de intentos y rango del número aletorio) para hacer el juego más amigable y divertido para el usuario. Te invito clonar o ir a los archivos de este proyecto para observar el código final 😉


Si bien la lógica del juego es simple, trabajar en él me ayudó a mejorar mi comprensión de la programación y, sobre todo, a disfrutar del proceso de aprendizaje 🙆‍♀️✨

---

Espero que disfrutes jugando tanto como yo disfruté desarrollándolo. ¡Diviértete adivinando el número secreto! 🎉
