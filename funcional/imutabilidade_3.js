const pessoa = {
  nome: "Vitor",
  altura: 1.76,
  cidade: "São Paulo",
  end: {
    rua: "Feliz!",
  },
};

// Atribuição por referêcia
const outraPessoa = pessoa;

// Passagem por referêcia
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "João";
  novaPessoa.cidade = "Fortaleza";
  novaPessoa.end.rua = "ABC";
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);

console.log(pessoa);
console.log(novaPessoa);

let a = 3;
let b = a; // atribuição por valor (copia!)
a++;
b--;
console.log(a, b);
