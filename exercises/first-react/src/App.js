import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://www.monsterhomebuyerhelps.com/wp-content/uploads/2019/03/super-simple-cover-2.png" className="App-logo" alt="logo" />
        <h1>Super Simple Home Buyer Helps</h1>
        <p>
        We have compiled a book that we know will help you reach your goal of buying a home this year.
        </p>
        <a
          className="App-link"
          href="https://www.amazon.com/Super-Simple-Home-Buyers-Handbook-ebook/dp/B07QP9NXSD/ref=sr_1_1?crid=LL0VJ45S3AY9&keywords=super+simple+home+buyers+handbook&qid=1571936908&sprefix=super+simple+home%2Caps%2C184&sr=8-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy the book here!
        </a>
      </header>
    </div>
  );
}

export default App;
