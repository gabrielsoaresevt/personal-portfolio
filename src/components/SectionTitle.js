export default function SectionTitle(props) {
  return (
    <h2 id={props.id} className={props.className} >{props.title}</h2>
  );
}