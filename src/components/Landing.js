import React, { Component } from 'react';
import '../App.css';

import HeroImage from './LandingComponents/HeroimageComponent'
import LandingComponentTwo from './LandingComponents/LandingComponentTwo'
import LandingComponentThree from './LandingComponents/LandingComponentThree'
import LandingComponentFour from './LandingComponents/LandingComponentFour'
import DesignPrompt from './LandingComponents/DesignPrompt'
import Prototype from './LandingComponents/Prototype'
import Footer from './LandingComponents/Footer'

class Landing extends Component {


  render(){
    return(
      <div>
        <HeroImage />
      <DesignPrompt />
        <LandingComponentTwo/>
        <LandingComponentThree/>
        <LandingComponentFour/>
        <Prototype/>
        <Footer/>


        </div>
    )
  }
}

export default Landing;
