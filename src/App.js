import './App.css';
import GetMeme from './meme';
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

const isGoingOut= true
let answer = isGoingOut ? 'yes' : 'No'

function App() {
  return (
    <main className="App">
      <Nav />
      <h1>{answer}</h1>
      <GetMeme />
    </main>
  );
}

export default App;
