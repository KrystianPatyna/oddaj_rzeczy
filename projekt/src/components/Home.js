import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeCols from "./HomeThreeCols";
import HomeEasySteps from "./HomeEasySteps"
import HomeAbout from "./HomeAbout"
import HomeWhoWeHelp from "./HomeWhoWeHelp"
import HomeFooter from "./HomeFooter"

class Home extends Component {
  render() {
    return <>
    <HomeHeader/>
    <HomeThreeCols/>
    <HomeEasySteps/>
    <HomeAbout/>
    <HomeWhoWeHelp/>
    <HomeFooter/>
    </>
  }
}

export default Home
