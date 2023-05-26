import linkedinIcon from '../assets/linkedin-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';
import githubIcon from '../assets/github-icon.png';

import SocialMediaListItem from './SocialMediaListItem';
import NavigationMenuListItem from './NavigationMenuListItem';

const socialMediaListData = [
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/gabriel-soares-evangelista",
    alt: "Ícone do LinkedIn"
  },
  {
    icon: youtubeIcon,
    url: "https://www.youtube.com/@gabrielsoares9405/featured",
    alt: "Ícone do Youtube"
  },
  {
    icon: githubIcon,
    url: "https://github.com/gabrielsoaresevt",
    alt: "Ícone do GitHub"
  }
];

const navigationMenuListData = [
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
          {
            socialMediaListData.map(function(item) {
              return (
                <SocialMediaListItem 
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
            navigationMenuListData.map(function(item) {
              return (
                <NavigationMenuListItem 
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