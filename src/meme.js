import React from 'react'
import meme from "./memeData"
export default function GetMeme(){
  const [isImp , setIsImp] = React.useState('My Meme');
  const[memeImage , setMemeImage] = React.useState('')

  let url;
  function buttonClick(){
    const memesArray = meme.data.memes;
    const randomMeme= Math.floor(Math.random() * memesArray.length);
    setMemeImage( memesArray[randomMeme].url)
    console.log(url)
  } 

  function handleClick(){
    setIsImp('Lets get our Meme ...')
  }

  return <>
  
  <div class="container">
  
  <input className='input-1' type="text" placeholder="Input 1" />
  <input className='input-2' type="text" placeholder="Input 2" />
  <button onClick={buttonClick} className='button'>Get a new meme image</button>

  <button onClick={handleClick} className='button'>{isImp}</button>
  </div>
  <div className='meme--img'>  
  <img src={memeImage} className='' alt='' />
  </div>

</>
} 