import './App.css';

function Blah() {
    return (
        <p>Made another change</p>
    );
}

function Test() {
    return (
        <p>We chillin'</p>
    );

}

function App() {
    

    return (
        <div>
            <h1>This works!</h1>
            <Test />
            <Blah />
        </div>
    );
}

export default App;