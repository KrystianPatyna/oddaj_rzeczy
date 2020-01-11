import React, {Component} from 'react';
import Home_Hero_Image from '../assets//Home-Hero-Image.jpg';

import '../scss/settings/_colors.scss';
import '../scss/elements/_HomeHeader.scss';

class HomeHeader extends Component {
  render() {
    return (
      <>
      <header>
        <div className='HeroImage'>
          <img src={Home_Hero_Image}/>
        </div>
          <div className = 'TopMenu'>
            <ul className = 'LoginRegister'>
              <li>Zaloguj</li>
              <li>Załóż konto</li>
            </ul>
            <ul className = 'Navigation'>
              <li>Start</li>
              <li>O co chodzi</li>
              <li>O nas</li>
              <li>Funfacja i organizacja</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div className = 'Intro'>
            <h1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h1>
            <ul>
              <li>Oddaj rzeczy</li>
              <li>Zorganizuj zbiórkę</li>
            </ul>
          </div>
      </header>
      </>
    )
  }
}

export default HomeHeader
