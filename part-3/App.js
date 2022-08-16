const App = () => (
    <div>
        <Person name="person1" age={21} hobbies={["writing", "eating", "dancing"]} />
        <Person name="person2" age={7} hobbies={["playing", "legos", "drawing"]} />
        <Person name="thirdperson" age={18} hobbies={["bikes", "video games", "sleeping", "partying"]} />
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));