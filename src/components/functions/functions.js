export async function getNewId(dados) {
    const interDados = dados.slice();
    interDados.sort((a, b) => { return (b.idx - a.idx) });
    return interDados[0].idx;
}