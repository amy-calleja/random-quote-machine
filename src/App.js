import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faQuoteLeft, faQuoteRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  useEffect(() => {
    handleGetNewQuote();
  }, [])

function handleGetNewQuote() {
  let apiUrl = 'https://dummyjson.com/quotes/random'
  axios.get(apiUrl).then(showData)
}

function showData(response){
setQuote(response.data.quote)  
setAuthor(response.data.author)
}

let tweet = `https://twitter.com/intent/tweet?text="${quote}-${author}"`
let twitterLogo = <FontAwesomeIcon className='icons' icon={faTwitter} />
let quotesLeft = <FontAwesomeIcon className='quotes-left' icon={faQuoteLeft} />
let quotesRight = <FontAwesomeIcon className='quotes-right' icon={faQuoteRight} />
let arrow = <FontAwesomeIcon className='arrow' icon={faCaretRight} />

  return (
    <div className="App">
      <div className='container align-center mt-5 p-5' id='quote-box'>
        <div className='row'>
            <h2 className='text-center mt-4' id='text'>{quotesLeft}{quote}{quotesRight}</h2>
        </div>

        <div className='row'>
            <h3 className='mt-3 mb-2 text-center' id='author'> -{author}</h3>
        </div>
        
        <div className="d-flex justify-content-center">
            <a href={tweet} target="_blank" rel="noreferrer" className='btn btn-info mt-4' id='tweet-quote'>{twitterLogo}</a>
            <button onClick={handleGetNewQuote} className='btn btn-primary mt-4' id='new-quote'> New Quote {arrow}</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
