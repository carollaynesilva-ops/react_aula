import styled from "styled-components";
import Input from "../Input";
import{useState} from "react";
import {livros} from './dadosPesquisa';

const PesquisaContainer= styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85 px 0px;
    height: 270px;
    width: 100%;
`

const Titulo= styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo= styled.h3`
    font-size: 16px;
    font-weigth:500;
    margin-bottom:40px;
`


function Pesquisa() {
    const[livrosPesquisados, setLivrosPesquisados]= useState('')
    return (
        // O REACT OBRIGA A GNT A USAR AS COISAS TUDO CERTINHO
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input placeholder="Escreva sua próxima leitura"

            // a função é disparada e, neste caso específico, exibe o valor final 
            // do input no console do navegador.
                onBlur={evento=>{
                    const textoDigitado= evento.target.value;
                    const resultadoPesquisa=livros.filter()
                }}
            
            />
    
        </PesquisaContainer>

    )
}

export default Pesquisa;

// O estado no React (state) é um objeto que armazena dados dinâmicos 
// de um componente, permitindo que a interface reaja e se 
// atualize automaticamente quando esses dados mudam.