


const Person = (props) => {
    let voteMessage
    if (props.age >= 18) voteMessage = <p>please go vote!</p>
    else voteMessage = <p>you must be 18</p>
    const shortName = props.name.slice(0, 6);
    return (
        <div>
            <h3>{shortName}</h3>
            <h4>{props.age}</h4>
            {voteMessage}
            <p>Learn some information about this person</p>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}