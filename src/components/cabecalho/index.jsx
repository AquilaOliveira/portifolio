//retorna um componente cabecalho
//um componente em jsx tem uma regra de retornar um unico componente 
function cabecalho() {
    return (
        <>
            <div>
                {retornarTexto()}
            </div>
        </>
    )
}

function retornarTexto() {
    return "oi"
}

//export default fala para o codigo qual funcão exportar como o nosso componente
export default cabecalho