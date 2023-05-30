import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';

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
          <section className="section">
            <SectionTitle
              title="Portfólio"
            />
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
