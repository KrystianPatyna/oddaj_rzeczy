import React, {Component} from 'react';
import '../scss/settings/_colors.scss'
import '../scss/elements/_HomeHeader.scss'

class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className = 'HeaderContainer'>
          <div className = 'TopMenuContainer'>
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
        </div>
      </>
    )
  }
}

export default HomeHeader
