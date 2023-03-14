import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faB } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()


function handleGetNewQuote() {
  let apiUrl = 'https://dummyjson.com/quotes/random'
  axios.get(apiUrl).then(showData)
}

function showData(response){
setQuote(response.data.quote)  
setAuthor(response.data.author)
}

  return (
    <div className="App">
      <div className='container align-center mt-5 p-3' id='quote-box'>
        <div className='row'>
            <h2 className='text-center mt-4' id='text'>{quote}</h2>
        </div>
        <div className='row'>
            <h3 className='mt-2 text-end' id='author'> -{author}</h3>
        </div>
        
        <button  className='btn btn-info mt-2' id='tweet-quote'><FontAwesomeIcon className='icons' icon={faBell} /></button>

        <button onClick={handleGetNewQuote} className='btn btn-primary mt-2' id='new-quote'>New Quote</button>
      </div>
      
    </div>
  );
}

export default App;
