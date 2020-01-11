import React, {Component} from 'react';
import '../scss/elements/_HomeWhoWeHelp.scss';
import '../scss/settings/_fonts.scss'
import '../scss/settings/_colors.scss'

class HomeWhoWeHelp extends Component {
  render() {
    return (
      <>
      <div>
        <h2>Komu pomagamy</h2>
        <ul>
          <li>Fundacjom</li>
          <li>Organizacjom pozarządowym</li>
          <li>Lokalnym zbiórkom</li>
        </ul>
        <div className= "Fundations">
          <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
          z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
          komu pomagają i czego potrzebują.</p>
          <div>
            <div>
              <h3>Fundacja “Dbam o Zdrowie”</h3>
              <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
            </div>
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
          <div>
            <div>
              <h3>Fundacja “Dla dzieci”</h3>
              <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
            </div>
            <p>ubrania, meble, zabawki</p>
          </div>
          <div>
            <div>
              <h3>Fundacja “Bez domu”</h3>
              <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
            </div>
            <p>ubrania, jedzenie, ciepłe koce</p>
          </div>
        </div>
        <div className= "NGO">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.</p>
          <div>
            <div>
              <h3>Organizacja “Lorem Ipsum 1”</h3>
              <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
            </div>
            <p>dolore, magna, aliqua</p>
          </div>
          <div>
            <div>
              <h3>Organizacja “Lorem Ipsum 2”</h3>
              <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
            </div>
            <p>gravida, rutrum, quisque</p>
          </div>
          <div>
            <div>
              <h3>Organizacja “Lorem Ipsum 3”</h3>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <p>consectetur, adipiscing, elit</p>
          </div>
        </div>
        <div className= "LocalCollect">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.</p>
          <div>
            <div>
              <h3>Zbiórka “Lorem Ipsum 1”</h3>
              <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
            </div>
            <p>dolore, magna, aliqua</p>
          </div>
          <div>
            <div>
              <h3>Zbiórka “Lorem Ipsum 2”</h3>
              <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
            </div>
            <p>gravida, rutrum, quisque</p>
          </div>
          <div>
            <div>
              <h3>Zbiórka “Lorem Ipsum 3”</h3>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <p>consectetur, adipiscing, elit</p>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default HomeWhoWeHelp
