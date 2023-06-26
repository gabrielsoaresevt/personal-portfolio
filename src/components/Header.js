import { useState } from "react"

import SocialMediaListItem from './SocialMediaListItem';
import NavigationMenuListItem from './NavigationMenuListItem';

import { data } from '../data';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }

  return (
    <header className="header">
      <div className="container">
        <img className="header__profile-photo"
          src="https://github.com/gabrielsoaresevt.png" 
          alt="Foto do Gabriel Soares Evangelista"
        />
      </div>
      <p className="header__name">
        Gabriel Soares Evangelista
        <span className="header__role">
          Desenvolvedor Web
        </span>
      </p>
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
        <ul className={`header__list__sections ${isOpen ? "active" : "" }`}>
          {
            data.navigationMenuList.map((item, index) => {
              return (
                <NavigationMenuListItem 
                  toggleMenu={toggleMenu}
                  key={index}
                  href={item.href}
                  sectionName={item.sectionName}
                />
              )
            })
          }
        </ul>
      </div>
      <div className="container">
        <div onClick={toggleMenu} className="header__mobile-menu">
          <div className="line-one"></div>
          <div className="line-two"></div>
          <div className="line-three"></div>
        </div>
      </div>
    </header>
  );
}