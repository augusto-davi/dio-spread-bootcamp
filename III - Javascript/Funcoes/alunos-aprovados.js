const relacaoAlunos = [
    {aluno: 'A', nota: 3},
    {aluno: 'B', nota: 7},
    {aluno: 'C', nota: 5},
    {aluno: 'D', nota: 10},
    {aluno: 'E', nota: 4},
    {aluno: 'F', nota: 9}
]
 
function alunosAprovados(arr, num = 7){
    const aprovados = arr.filter((alunos) => {
        return alunos.nota >= num ?? alunos.aluno;
    });

    return aprovados;
}

console.log(alunosAprovados(relacaoAlunos))