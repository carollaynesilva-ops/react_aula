// NÃO IMPORTA NADA PQ É COMO SE ISSO FOSSE O COMANDO DA FUTURA TAG QUE USAREMOS
// NO ARQUIVO PRINCIPAL

import './estilo.css'

const textoOpcoes=['CATEGORIAS','FAVORITOS','MINHA ESTANTE'];

function OpcoesHeader(){
    return(
        <ul className='opcoes'>

          {textoOpcoes.map((texto) =>(
            <li className='opcao'><p>{texto}</p></li>
          ))}

        </ul>
    )
}

export default OpcoesHeader;