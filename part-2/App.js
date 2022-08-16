const App = () => (
    <div>
        <Tweet username="pixls" date="8/16/22" message="hello it's a tweet" />
        <Tweet username="someone_else" date="8/15/22" message="this one is my tweet" />
        <Tweet username="user3" date="8/13/22" message="the first Tweet" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));