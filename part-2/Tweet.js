const Tweet = (props) => (
    <div>
        <h3>{props.username}</h3>
        <p>{props.date}</p>
        <p>{props.message}</p>
    </div>
);