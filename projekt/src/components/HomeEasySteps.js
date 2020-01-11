import React, {Component} from 'react';

import '../scss/settings/_fonts.scss';
import '../scss/settings/_colors.scss';
import '../scss/elements/_HomeHeader.scss'

class HomeEasySteps extends Component {
  render() {
    return (
    <>
    <h2>Wystarczą 4 proste kroki</h2>
    <div>
      <div>
        <p>Wybierz rzeczy</p>
        <p>ubrania, zabawki, sprzęt i inne</p>
      </div>
      <div>
        <p>Spakuj je</p>
        <p>skorzystaj z worków na śmieci</p>
      </div>
      <div>
        <p>Zdecyduj komu chcesz pomóc</p>
        <p>wybierz zaufane miejsce</p>
      </div>
      <div>
        <p>Zamów kuriera</p>
        <p>kurer przyjedzie w dogodnym terminie</p>
      </div>
    </div>
    <div>oddaj rzeczy</div>
    </>
  )
  }
}

export default HomeEasySteps
