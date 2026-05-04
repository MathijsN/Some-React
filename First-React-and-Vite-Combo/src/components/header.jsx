export default function Header(props) {
    return (
        <>
            <a href={props.link} target="blank">{props.content}</a>
        </>
    )
}