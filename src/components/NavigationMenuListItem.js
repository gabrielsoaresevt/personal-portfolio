export default function navigationMenuListItem(props) {
  return (
    <li className="header__list__sections__item">
      <a href={props.href}>
        {props.sectionName}
      </a>
    </li>
  );
}