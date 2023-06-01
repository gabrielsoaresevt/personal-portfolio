import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';

import portfolioImg from './assets/img/portfolio/space-tourism-website.png';

export default function App() {
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
            <div className="portfolio__item">
              <h2 className="portfolio__item__title">
                Space Tourism Website
              </h2>
              <div className="portfolio__item__info">
                <div className="portfolio__item__info__description">
                  <p>
                    Desenvolvido com HTML, CSS, SASS/SCSS e JavaScript. Veja este projeto sobre turismo 
                    espacial com carousel exibindo planetas, a equipe espacial e suas tecnologias!
                    Layout totalmente responsivo e fluido.
                  </p>
                  <div className="box-button">
                    <a className="button" target="_blank" rel="noreferrer" href="https://github.com/gabrielsoaresevt/space-tourism-website">
                      GitHub
                    </a>
                    <a className="button"  target="_blank" rel="noreferrer" href="https://the-future-space-tourism.netlify.app/">
                      Website
                    </a>
                  </div>
                </div>
                <div className="portfolio__item__info__container-img">
                  <img src={portfolioImg} alt="Imagem do projeto - Space Tourism Website"/>
                </div>
              </div>             
            </div>
          </section>
          <section className="section">
            <SectionTitle
              title="Tech Stack"
            />
          </section>
          <section className="section">
            <SectionTitle
              title="Contato"
            />
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
