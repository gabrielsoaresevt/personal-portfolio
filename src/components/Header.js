import SocialMediaListItem from './SocialMediaListItem';
import NavigationMenuListItem from './NavigationMenuListItem';

import { data } from '../data';

const navigationMenuList = [
  {
    href: "#inicio",
    sectionName: "Início"
  },
  {
    href: "#portfolio",
    sectionName: "Portfólio"
  },
  {
    href: "#tech-stack",
    sectionName: "Tech Stack"
  },
  {
    href: "#contato",
    sectionName: "Contato"
  },
  {
    href: "#curriculo",
    sectionName: "Currículo"
  }
]

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img className="header__profile-photo"
          src="https://github.com/gabrielsoaresevt.png" 
          alt="Foto do Gabriel Soares Evangelista"
        />
        <p className="header__name">
          Gabriel Soares Evangelista
          <span className="header__role">
            Desenvolvedor Web
          </span>
        </p>
      </div>
      <div className="container side-menu">
        <ul className="header__list__social-media">
          {
            data.socialMediaList.map((item, index) => {
              return (
                <SocialMediaListItem 
                  key={index}
                  icon={item.icon}
                  url={item.url}
                  alt={item.alt}
                />
              )
            })
          }
        </ul>
        <ul className="header__list__sections">
          {
            navigationMenuList.map((item, index) => {
              return (
                <NavigationMenuListItem 
                  key={index}
                  href={item.href}
                  sectionName={item.sectionName}
                />
              )
            })
          }
        </ul>
      </div>
    </header>
  );
}