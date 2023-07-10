let notasAlunos = [
    {
        nome: "Maria",
        nota: 8
    },
    {
        nome: "João",
        nota: 6
    },
    {
        nome: "Luciana",
        nota: 4
    },
    {
        nome: "Lucas",
        nota: 3
    },
    {
        nome: "Pedro",
        nota: 7
    },
    {
        nome: "José",
        nota: 5
    }
]

let alunosAprovados = notasAlunos.filter((aluno) => {
    return aluno.nota >= 6
})

console.log(alunosAprovados)