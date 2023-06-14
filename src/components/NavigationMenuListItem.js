export default function navigationMenuListItem(props) {
  return (
    <li key={props.index} className="header__list__sections__item">
      <a href={props.href}>
        {props.sectionName}
      </a>
    </li>
  );
}