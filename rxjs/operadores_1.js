// Os dois tipos...
// 1. Operadores de Criação
const { from } = require("rxjs");

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require("rxjs/operators");

from([1, 2, "ana", false, "último"])
  .pipe(
    last(),
    map((el) => el[0]),
    map((texto) => `A letra encontrada foi: ${texto}`)
  )
  .subscribe(function (valor) {
    console.log(valor);
  });
