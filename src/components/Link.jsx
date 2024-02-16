function Link(props) {
    return (
        <a href={props.href}>
            {props.name}
        </a>
    );
}

export default Link;