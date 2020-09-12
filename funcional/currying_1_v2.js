function textComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // Lazy evaluation
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

const forcarTamanhoPadrao = textComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido!");

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };

// textComTamanhoEntre(4)(255)("Nome inválido")(p1.nome);
// forcarTamanhoPadrao("Nome inválido")(p1.nome);
forcarNomeProdutoValido(p1.nome);
