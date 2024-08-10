const alunos = [
    { nome: 'Luiz Felipe', nota: 5.9 },
    { nome: 'Gabriel', nota: 7.0 },
    { nome: 'Pedro', nota: 8.5 },
    { nome: 'Ana', nota: 4.7 },
    { nome: 'Luiz Henrique', nota: 6.2 }
];

function alunosAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >=6);
}

const listaDeAprovados = alunosAprovados(alunos);

console.log(listaDeAprovados);
