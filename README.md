# Calculadora Web

Este proyecto es una calculadora web simple implementada con HTML, CSS y JavaScript.

## Estructura del Proyecto

- **index.html**: El archivo principal que contiene la estructura HTML de la calculadora.
- **css/**: Carpeta que contiene los archivos CSS para los estilos de la página.
- **js/**: Carpeta que contiene los archivos JavaScript para la funcionalidad de la calculadora.

## Funcionalidades

La calculadora permite realizar operaciones básicas como suma, resta, multiplicación, división y exponenciación. También incluye funciones para manejar decimales y borrar entradas.

## Implementación en JavaScript

El archivo JavaScript principal contiene las siguientes funciones:

- **resultado()**: Muestra el resultado de la operación actual.
- **op()**: Actualiza la visualización de la operación actual.
- **cero()** a **nueve()**: Añaden los dígitos correspondientes a la operación actual.
- **corta()**: Elimina el último carácter de la operación actual.
- **mult()**: Añade el operador de multiplicación.
- **div()**: Añade el operador de división.
- **suma()**: Añade el operador de suma.
- **resta()**: Añade el operador de resta.
- **ex()**: Añade el operador de exponenciación.
- **punto()**: Añade un punto decimal.
- **cls()**: Reinicia la calculadora.

### Ejemplo de Código JavaScript

```javascript
let x = '0', y = '0';
let p = 0;

function resultado() {
    document.getElementById('resul').style = 'display:grid;';
    document.getElementById('op').style = 'font-size:1rem;';
    document.getElementById('op').innerHTML = '<i>' + x + ' =</i>';
    y = eval(y);
    document.getElementById('resul').textContent = y;
}

function op() {
    document.getElementById('op').style = 'font-size:2rem;';
    document.getElementById('op').textContent = x;
}

// Funciones para los dígitos
function cero() { if (x != '0') { x = x + '0'; y = y + '0'; } else { x = '0'; y = '0'; } op(); }
function uno() { if (x != '0') { x = x + '1'; y = y + '1'; } else { x = '1'; y = '1'; } op(); }
// ... (Funciones dos() a nueve() similares)

// Funciones para operadores
function mult() { if (x != '0') { x = x + 'x'; y = y + '*'; } p = 0; op(); }
function div() { if (x != '0') { x = x + '÷'; y = y + '/'; } p = 0; op(); }
function suma() { if (x != '0') { x = x + '+'; y = y + '+'; } p = 0; op(); }
function resta() { if (x != '0') { x = x + '-'; y = y + '-'; } else { x = '-'; y = '-'; } p = 0; op(); }
function ex() { if (x != '0') { x = x + '^'; y = y + '**'; } p = 0; op(); }
function punto() { if (p == 0) { x = x + '.'; y = y + '.'; p = 1; } op(); }

// Función para borrar
function cls() { x = '0'; y = '0'; p = 0; op(); document.getElementById('resul').style = "display: none;"; }