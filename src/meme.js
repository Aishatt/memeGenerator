import React from 'react'
import meme from "./memeData"

//ourMeme is the displayed update
// while smf is the setter func that allows us to make chnages to state value

export default function GetMeme(){
  const [ourMeme, setMemefunc] = React.useState('Get Meme');
  const[memeImage , setMemeImage] = React.useState('')

  //url is the url prop of our image located in memedata array
  let url;
  function buttonClick(){
    const memesArray = meme.data.memes;
    //get random index number of our meme
    const randomMeme= Math.floor(Math.random() * memesArray.length);
    setMemeImage( memesArray[randomMeme].url)
    console.log(url)
    setMemefunc('Click for more ...')
  } 

  //update value of state

  return <>  
  
  <div class="container">
  
  <input className='input-1' type="text" placeholder="Input 1" />
  <input className='input-2' type="text" placeholder="Input 2" />
  <button onClick={buttonClick} className='button'>{ourMeme}</button>
  </div>
  <div className='meme--img'>  
  <img src={memeImage} className='' alt='' />
  </div>

</>
} 