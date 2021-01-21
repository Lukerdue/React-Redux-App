import { getJoke } from './actions'
import { connect } from 'react-redux'

function App(props) {

  function clickHandler(e){
    e.preventDefault()
    props.getJoke();
  }

  console.log(props)

  return (
    <div className="App">
      <button onClick={clickHandler}>Get Joke</button>
      <div className="joke">
        {props.humor.type === "twopart" ? <p>{props.humor.setup}<br/>{props.humor.delivery}</p>: <p>{props.humor.joke}</p>}
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    humor: state.humor
  }
}

export default connect(mapStateToProps, { getJoke })(App);
