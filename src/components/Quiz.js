import React from 'react';
import Questions from './Questions.js';
import Header from './Header.js';
import Footer from './Footer.js';

import Logo from '../img/logo.png';

import '../styles/App.css';

export default function Quiz() {

  window.onload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='body'>

      <head>
        <title>Tech Hackers</title>
        <link rel="icon" href={Logo} alt="Logo do site" />
      </head>

      <Header />

      <main className='main-quiz'>
        <div className="content">
          <div className="conteudo-titulo">
            <div className="titulo">
              <h1>Quiz</h1>
            </div>
          </div>

          <Questions />

          <div className="espaco-vazio"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}