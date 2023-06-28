import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 't-writer.js';

import Aos from  "aos";
import "aos/dist/aos.css";

import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import PortfolioListItem from './components/PortfolioListItem';
import TechStackListItem from './components/TechStackListItem';
import CurriculumPDF from './documents/curriculum-web-developer.pdf'; 

import { data } from './data.js';

export default function App() {
  const appContainerRef = useRef();
  const typeWriterAnimation = useRef();
  const copyright = useRef();

  const year = new Date();
  const currentYear = year.getFullYear();

  useEffect(() => {
    copyright.current.innerHTML = `
      Designed and Built by Gabriel ©${currentYear}<br/>
      Tech Stack Images from <a target="_blank" href="https://github.com/get-icon/geticon" rel="noreferrer">@tomchen</a>
    `;

    const writer = new Typewriter(typeWriterAnimation.current, {
      loop: true,
      typeColor: '#FFF',
      cursorColor: '#FFF'
    })
    writer
      .type('Olá, seja bem-vindo!')
      .rest(550)
      .changeOps({ deleteSpeed: 80 })
      .remove(20)
      .type('Eu sou Desenvolvedor Web')
      .rest(550)
      .changeOps({ deleteSpeed: 80 })
      .remove(17)
      .type('UI & UX Designer')
      .rest(550)
      .clear()
      .start()
      // .type('Olá, eu sou Web Developer')
      // .rest(550)
      // .changeOps({ deleteSpeed: 80 })
      // .remove(13)
      // .type('UI/UX Designer')
      // .rest(550)
      // .remove(21)
      // .type('seja bem-vindo!')
      // .rest(550)
      // .clear()
      // .start()
    
    Aos.init({ duration: 2500 });
  }, [currentYear])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateForm(e) {
    e.preventDefault();
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    let textMessage = "";
    if(name === '') {
      textMessage = "Preencha o campo nome";
    } else if(email === '') {
      textMessage = "Preencha o campo e-mail";
    } else if(!regEx.test(email)) {
      textMessage = "E-mail inválido"
    } else if(message === '') {
      textMessage = "Preencha o campo mensagem";
    } else if (message.length > 300) {
      textMessage = "Máximo de caracteres permitidos: 1000";
    }
    if(textMessage !== "") {
      showMessage(textMessage);
      return false;
    } else {
      textMessage = "E-mail enviado com sucesso!";
    }
    sendEmail(textMessage);
  }

  function sendEmail(textMessage) {
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_ewrut2x", "template_8rgc3j9", templateParams, "rvb3tIoimxX8se9n-")
    .then(() => {
      showMessage(textMessage);
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      textMessage = "Falha ao enviar e-mail..."
      showMessage(textMessage);
      console.log("Erro: ", err);
    })
  }

  function showMessage(textMessage) {
    const showMessage = document.createElement('div');
    if(textMessage !== "E-mail enviado com sucesso!") {
      showMessage.classList.add("alert");
    } else {
      showMessage.classList.add("alert", "sucess");
    }
    showMessage.innerText = textMessage;
    appContainerRef.current.appendChild(showMessage);
    setTimeout(() => {
      showMessage.remove();
    }, 3000); 
  }
  return (
    <div ref={appContainerRef} className="App">
      <Header />
      <main className="main">
        <div className="container">
          <section className="main__apresentation section">
            <h2 data-aos="fade-right" id="inicio" ref={typeWriterAnimation} className="apresentation main__apresentation__title section-title">
            </h2>
            <p data-aos="fade" className="main__apresentation paragraph">
              Meu objetivo como Desenvolvedor Web é combinar design, funcionalidades e performance para juntos criarmos algo incrível!
              Utilizando tecnologias como <span className="accent-text">HTML</span>, <span className="accent-text">CSS</span>, <span className="accent-text">JavaScript</span>, <span className="accent-text">Sass/SCSS</span>, <span className="accent-text">React</span> e outras, me comprometo a
              entender as necessidades dos meus clientes e transformá-las em soluções únicas.
            <br />
            <br />
              Explore meu portfólio e descubra como posso elevar sua presença online para o próximo nível!
            </p>
          </section>
          <section className="section portfolio">
            <SectionTitle
              id="portfolio"
              title="Portfólio"
              className="section-title"
            />            
            {
              data.portfoliList.map((item, index) => {
                return (
                  <PortfolioListItem 
                    key={index}
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
              id="tech-stack"
              title="Tech Stack"
              className="section-title"
            />
            <p className="paragraph">
              Principais tecnologias e ferramentas que utilizado para desenvolvimento de websites
            </p>
            <ul data-aos="fade" className="tech-stack__images">
              {
                data.techStackList.map((item, index) => {
                  return(
                    <TechStackListItem 
                      key={index}
                      image={item.image}
                      alt={item.altText}
                    />
                  );
                })
              }
            </ul>
          </section>
          <section className="section">
            <SectionTitle
              id="contato"
              title="Contato"
              className="section-title"
            />
            <form  data-aos="fade-bottom" className="form" onSubmit={validateForm}>
              <div className="form__box-input">
                <label className="form__label" htmlFor="name">Nome:</label>
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
                <label className="form__label" htmlFor="email">E-mail:</label>
                <input 
                  id="email"
                  className="form__input form__input__email" 
                  type="text"
                  placeholder="Informe seu endereço de e-mail..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form__box-input">
                <label className="form__label" htmlFor="message">Mensagem:</label>
                <textarea 
                  id="message"
                  className="form__input form__input__message" 
                  type="text"
                  placeholder="Como posso te ajudar?"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button className="button button-form" type="submit">Enviar</button>
            </form>
          </section>
          <section className="section">
            <SectionTitle
              id="curriculo"
              title="Currículo"
              className="section-title" 
            />
            <p data-aos="fade-right" className="paragraph">
              Veja meu resumo profissional, habilidades e certificações!
            </p>
            <a href={CurriculumPDF} className="button button-curriculum">Baixar PDF</a>
          </section>
          <p ref={copyright} className="paragraph copyright">
          </p>
        </div> 
      </main>
      <Footer />
    </div>
  );
}
