import { useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import PortfolioListItem from './components/PortfolioListItem';

import spaceTourismWebsitePreview from './assets/img/portfolio/space-tourism-website.png';
import newsHomepagePreview from './assets/img/portfolio/news-homepage.png';

const portfoliListData = [
  {
    title: "Space Tourism Website",
    description: `Desenvolvido com HTML, CSS, SASS/SCSS e JavaScript. Veja este projeto sobre turismo 
    espacial com carousel exibindo planetas, a equipe espacial e suas tecnologias!
    Layout totalmente responsivo e fluido.`,
    github: "https://github.com/gabrielsoaresevt/space-tourism-website",
    website: "https://the-future-space-tourism.netlify.app",
    preview: spaceTourismWebsitePreview,
    alt: "Imagem do projeto - Space Tourism Website"
  },
  {
    title: "News Homepage",
    description: `Desenvolvido com HTML, CSS Grid, Custom Properties, SASS/SCSS e JavaScript.
    Veja uma um site com uma temática de página principal de notícias.`,
    github: "https://github.com/gabrielsoaresevt/news-homepage",
    website: "https://gabrielsoaresevt.github.io/news-homepage/",
    preview: newsHomepagePreview,
    alt: "Imagem do projeto - News Homepage"
  },
  {
    title: "Space Tourism Website",
    description: `Desenvolvido com HTML, CSS, SASS/SCSS e JavaScript. Veja este projeto sobre turismo 
    espacial com carousel exibindo planetas, a equipe espacial e suas tecnologias!
    Layout totalmente responsivo e fluido.`,
    github: "https://github.com/gabrielsoaresevt/space-tourism-website",
    website: "https://the-future-space-tourism.netlify.app",
    preview: spaceTourismWebsitePreview,
    alt: "Imagem do projeto - Space Tourism Website"
  }
]

export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function formValidation(e) {
    e.preventDefault();

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if(name === '') {
      console.log("Preencha o campo nome");
      return false;
    }

    if(email === '') {
      console.log("Preencha o campo e-mail");
      return false
    } else if(regEx.test(email)) {
      console.log("E-mail válido");
      return false;
    } else if (!regEx.test(email)) {
      console.log("E-mail inválido");
      return false;
    }

    if(message === '') {
      console.log("Preencha o campo de mensagem");
      return false;
    } else if (message.length > 300) {
      console.log("Máximo de caracteres permitidos: 1000");
      return false;
    }
    
    console.log("Tudo ok!");
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <section className="main__apresentation section">
            <SectionTitle
              title="Olá, me chamo Gabriel Soares Evangelista"
            />
            <p className="main__apresentation paragraph">
              Desenvolvedor Web Freelancer e UI/UX Designer. Minha paixão é entender as necessidades
              dos meus clientes e buscar ajudá-los da melhor forma possível para entregar aquilo que cumpra com suas
              expectativas e faça a diferença em suas vidas!
            </p>
          </section>
          <section className="section portfolio">
            <SectionTitle
              title="Portfólio"
            />            
            {
              portfoliListData.map(function(item) {
                return (
                  <PortfolioListItem 
                    title={item.title}
                    description={item.description}
                    github={item.github}
                    website={item.website}
                    preview={item.preview}
                    alt={item.alt}
                  />
                )
              })
            }
          </section>
          <section className="section tech-stack">
            <SectionTitle
              title="Tech Stack"
            />
            <p>
              Principais tecnologias e ferramentas que utilizado para desenvolvimento de websites
            </p>
            <ul className="tech-stack__images">
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/html-5.svg" alt="Imagem ícone HTML5"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/css-3.svg" alt="Imagem ícone CSS3"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/javascript.svg" alt="Imagem ícone JavaScript"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/sass.svg" alt="Imagem ícone SASS"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/git-icon.svg" alt="Imagem ícone Git"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg" alt="Imagem ícone Bootstrap"></img></li>
              <li className="tech-stack__images__item"><img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/visual-studio-code.svg" alt="Imagem ícone VS Code"></img></li>
            </ul>
          </section>
          <section className="section">
            <SectionTitle
              title="Contato"
            />
            <form className="form" onSubmit={formValidation}>
              <div className="form__box-input">
                <label className="form__label" for="name">Nome:</label>
                <input 
                  id="name"
                  className="form__input form__input__name" 
                  type="text"
                  placeholder="Me diga o seu nome..."
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form__box-input">
                <label className="form__label" for="email">E-mail:</label>
                <input 
                  id="emaile"
                  className="form__input form__input__email" 
                  type="text"
                  placeholder="Informe seu endereço de e-mail..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form__box-input">
                <label className="form__label" for="message">Mensagem:</label>
                <textarea 
                  id="message"
                  className="form__input form__input__message" 
                  type="text"
                  placeholder="Como posso te ajudar?"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button className="button form__button" type="submit">Enviar</button>
            </form>
          </section>
          <section className="section">
            <SectionTitle
              title="Currículo"
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
