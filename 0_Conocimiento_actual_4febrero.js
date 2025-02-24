// inicializaciones de vazriables 
const a = 20;
let b;
b = true;
var c;
c = "vacio";

// operaciones aritméticas
const suma = a + b;
const resta = a - b;
const multiplicacion = a * b;
const division = a / b;
const modulo = a % b;

// operaciones de comparación
const esIgual = a === b;
const esDistinto = a !== b;
const esMayor = a > b;
const esMenor = a < b;
const esMayorIgual = a >= b;
const esMenorIgual = a <= b;

// operaciones lógicas
const and = a && b;
const or = a || b;
const not = !b;

// condiciones y ciclos 
if (a > 0) {
    console.log("a es mayor que 0");
} else if (a < 0) {
    console.log("a es menor que 0");
} else {
    console.log("a es igual a 0");
}

for (let i = 0; i < 10; i++) {
    console.log("numero", i);
}
let k = 10;
while (k > 0) {
    console.log(k);
    k--;
}
let j = 10;
do {
    console.log(k);
    k--;
} while (k > 0);

//funciones 
function sumar(x, y) {
    return x + y;
}

const resultadoSuma = sumar(5, 10);
console.log("Resultado de la suma:", resultadoSuma);

let restar = (a, b) => {
    return a - b;
}
const resultadoResta = restar(10, 5);
console.log("Resultado de la resta:", resultadoResta);

// arrow function con parametro por defecto
const multiplicar = (x = 1, y = 1) => {
    return x * y;
}
const resultadoMultiplicacion = multiplicar(5);
console.log("Resultado de la multiplicacion:", resultadoMultiplicacion);
