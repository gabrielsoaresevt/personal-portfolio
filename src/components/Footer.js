import arrowUpIcon from '../assets/arrow-up-icon.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__hamburguer-menu"></div>
        <img className="footer__arrow-up" src={arrowUpIcon} alt="Seta para rolar a página para cima"></img>
      </div>
    </footer>
  );
}