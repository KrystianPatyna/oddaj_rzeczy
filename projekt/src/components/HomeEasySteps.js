import React, {Component} from 'react';
import '../scss/settings/_fonts.scss';
import '../scss/settings/_colors.scss';
import '../scss/elements/_HomeEasySteps.scss';
import Decoration from '../assets//Decoration.svg';
import Icon_1 from '../assets//Icon-1.svg';
import Icon_2 from '../assets//Icon-2.svg';
import Icon_3 from '../assets//Icon-3.svg';
import Icon_4 from '../assets//Icon-4.svg';

class HomeEasySteps extends Component {
  render() {
    return (
      <>
        <div className='EasyStepsContainer'>
          <h2>Wystarczą 4 proste kroki</h2>
          <div id='decoration'>
            <img src={Decoration}/>
          </div>
          <div id='greyContainer'>
            <div className='InfoIcon'>
              <div id = 'icon'>
                <img src={Icon_1}/>
              </div>
              <p>Wybierz rzeczy</p>
              <div className = 'bottomLine'/>
              <p id ='SmallerParagraph'>ubrania, zabawki, sprzęt i inne</p>
            </div>
            <div className='InfoIcon'>
              <div id = 'icon'>
                <img src={Icon_2}/>
              </div>
              <p>Spakuj je</p>
              <div className = 'bottomLine'/>
              <p id ='SmallerParagraph'>skorzystaj z worków na śmieci</p>
            </div>
            <div className='InfoIcon'>
              <div id = 'icon'>
                <img src={Icon_3}/>
              </div>
              <p>Zdecyduj komu chcesz pomóc</p>
              <div className = 'bottomLine'/>
              <p id ='SmallerParagraph'>wybierz zaufane miejsce</p>
            </div>
            <div className='InfoIcon'>
              <div id = 'icon'>
                <img src={Icon_4}/>
              </div>
              <p>Zamów kuriera</p>
              <div className = 'bottomLine'/>
              <p id ='SmallerParagraph'>kurer przyjedzie w dogodnym terminie</p>
            </div>
          </div>
          <button className = 'button'>oddaj rzeczy</button>
        </div>
      </>
    )
  }
}

export default HomeEasySteps
