export async function getNewId(dados) {
    if (dados.length === 0) {
        return 1
    }
    const interDados = dados.slice();
    interDados.sort((a, b) => { return (b.id - a.id) });
    return interDados[0].id;
}