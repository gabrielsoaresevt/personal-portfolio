import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <section className="main__apresentation">
            <SectionTitle
              title="Olá, eu sou Gabriel Soares Evangelista"
            />
          </section>
          <section>
            <SectionTitle
              title="Portfólio"
            />
          </section>
          <section>
            <SectionTitle
              title="Tech Stack"
            />
          </section>
          <section>
            <SectionTitle
              title="Contato"
            />
          </section>
          <section>
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
