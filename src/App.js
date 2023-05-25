import linkedinIcon from './assets/linkedin-icon.png';
import youtubeIcon from './assets/youtube-icon.png';
import githubIcon from './assets/github-icon.png';

import arrowUpIcon from './assets/arrow-up-icon.png';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img 
            src="https://github.com/gabrielsoaresevt.png" 
            alt="Foto do Gabriel Soares Evangelista" />
          <p className="header__name">
            Gabriel Soares Evangelista
            <span className="header__role">
              Desenvolvedor Web
            </span>
          </p>
        </div>
        <div className="container">
          <ul className="header__list__social-media">
            <li>
              <a href="https://www.linkedin.com/in/gabriel-soares-evangelista">
                <img 
                  src={linkedinIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@gabrielsoares9405/featured">
                <img 
                  src={youtubeIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/gabrielsoaresevt">
                <img 
                  src={githubIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
          </ul>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#curriculo">Currículo</a></li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="hamburguer-menu"></div>
          <img src={arrowUpIcon} alt="Seta para rolar a página para cima"></img>
        </div>
      </footer>
    </div>
  );
}
