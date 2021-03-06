import { ReactComponent as GitHubIcon } from 'assets/img/gitHub.svg';/*Importando imagem*/
import './styles.css';

function Navbar() {

    return (<header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>MovieAvaliator</h1>
                <a href="https://github.com/amadeu100401">
                    <div className='dsmovie-contact-container'>
                        <GitHubIcon />
                        <p className='dsmovie-contact-link'>/AmadeuMartim</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;