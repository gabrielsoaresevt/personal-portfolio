import linkedinIcon from './assets/linkedin-icon.png';
import youtubeIcon from './assets/youtube-icon.png';
import githubIcon from './assets/github-icon.png';

import arrowUpIcon from './assets/arrow-up-icon.png';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <img className="header__profile-photo"
            src="https://github.com/gabrielsoaresevt.png" 
            alt="Foto do Gabriel Soares Evangelista" />
          <p className="header__name">
            Gabriel Soares Evangelista
            <span className="header__role">
              Desenvolvedor Web
            </span>
          </p>
        </div>
        <div className="container side-menu">
          <ul className="header__list__social-media">
            <li className="header__list__social-media__item">
              <a href="https://www.linkedin.com/in/gabriel-soares-evangelista" rel="noopener noreferrer">
                <img 
                  src={linkedinIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
            <li className="header__list__social-media__item">
              <a href="https://www.youtube.com/@gabrielsoares9405/featured" rel="noopener noreferrer">
                <img 
                  src={youtubeIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
            <li className="header__list__social-media__item"> 
              <a href="https://github.com/gabrielsoaresevt" target="_blank" rel="noopener noreferrer">
                <img 
                  src={githubIcon} 
                  alt="Ícone do LinkedIn" />
              </a>
            </li>
          </ul>
          <ul className="header__list__sections">
            <li className="header__list__sections__item"><a href="#inicio">Início</a></li>
            <li className="header__list__sections__item"><a href="#portfolio">Portfólio</a></li>
            <li className="header__list__sections__item"><a href="#tech-stack">Tech Stack</a></li>
            <li className="header__list__sections__item"><a href="#contato">Contato</a></li>
            <li className="header__list__sections__item"><a href="#curriculo">Currículo</a></li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
          <section className="main__about-me">
            <h2 id="#inicio" className="main__aboout-me__title">Sobre mim</h2>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__hamburguer-menu"></div>
          <img className="footer__arrow-up" src={arrowUpIcon} alt="Seta para rolar a página para cima"></img>
        </div>
      </footer>
    </div>
  );
}
