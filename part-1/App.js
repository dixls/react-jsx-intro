const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name = "My name is name" />
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));