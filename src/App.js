import logo from './logo.svg';
import './App.css';
import Jokes from './jokes';
import jokesData from './jokesData';
// import Jokes from './jokes'

export default function App() {
    const element = jokesData.map(Joke =>{
        return <Jokes setup = {Joke.setup} punchline = {Joke.punchline}/>
    })
    return (
        <div>
            {element}
        </div>

    )


}


