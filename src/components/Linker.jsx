export default function Linker(props) {
  return (
    <li>
        <a href={props.url}>
            {props.title}{props.author ? ` (${props.author})` : ""}
        </a>
        {props.notes ? ". " : ""}{props.notes}
    </li>
  )
}
