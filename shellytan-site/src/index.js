import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base.scss';
import TitleScreen from './components/TitleScreen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <header id="title-screen">
        <TitleScreen />
      </header>
      <main>
        <div id="starry-sky" aria-hidden="true">
          <span className="star-layer--large"></span>
        </div>
      </main>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
