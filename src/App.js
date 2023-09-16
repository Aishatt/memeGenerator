import './App.css';
import GetMeme from './meme';

//Nav
function Nav(){
  return <nav>
  <div class="logo">
    <img src="Logo.png" alt="Logo" />
   
  </div>
  <div class="links">
    <h4 >React Course - Project 3</h4>
  </div>
</nav>
}

//add item to list on click
function Todotesting(){
  const thingArray= ["thing1", "thing2"]
  const thingElement = thingArray.map(thing => <p key= {thing}>{thing}</p>)
//additem onclick function, add one to thingarray and make it the new thing
  function addItem(){
    const newThing = `Thing ${thingArray.length + 1}`
    thingArray.push(newThing)
    console.log(thingArray)
  }

  return(<>
  <button onClick={addItem} className='button'>Add Item </button>
    {thingElement}

  </>)

}



const isGoingOut= true
let answer = isGoingOut ? 'yes' : 'No'

function App() {
  return (
    <main className="App">
      <Nav />
      <h1>{answer}</h1>
      <GetMeme />
      <Todotesting />
    </main>
  );
}

export default App;
