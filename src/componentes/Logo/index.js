import './estilo.css'
import logo from '../../imagens/logo.svg';
function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            {/* deixar a letra mais grossa-> <strong></strong> */}
            <p><strong>SENAI books</strong></p>
        </div>
    )
}

export default Logo;