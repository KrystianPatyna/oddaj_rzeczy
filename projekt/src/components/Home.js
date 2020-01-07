import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout"

class Home extends Component {
  render() {
    return <>
    <HomeHeader/>
    <HomeAbout/>
    </>
  }
}

export default Home
