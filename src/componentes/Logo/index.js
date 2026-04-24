
import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoDiv=styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg=styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoDiv>
            <LogoImg src={logo} alt='logo' ></LogoImg>
            {/* deixar a letra mais grossa-> <strong></strong> */}
            <p><strong>SENAI books</strong></p>
        </LogoDiv>
    )
}

export default Logo;