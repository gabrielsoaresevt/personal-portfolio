export default function PortfolioListItem(props) {
  return (
    <div className="portfolio__item">
      <h2 className="portfolio__item__title">
        {props.title}
      </h2>
      <div className="portfolio__item__info">
        <div className="portfolio__item__info__description">
          <p>
            {props.description}
          </p>
          <div className="box-button">
            <a className="button" target="_blank" rel="noreferrer" href={props.github}>
              GitHub
            </a>
            <a className="button"  target="_blank" rel="noreferrer" href={props.website}>
              Website
            </a>
          </div>
        </div>
        <div className="portfolio__item__info__container-img">
          <img src={props.preview} alt={props.alt}/>
        </div>
      </div>             
    </div>
  );
}