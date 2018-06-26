import React from 'react';
import Welcome from './landing/Welcome';
import About from './landing/About';
import Apply from './landing/Apply';
import Partners from './landing/Partners';
import Hacktalks from './landing/Hacktalks';
import Stories from './landing/Stories';
import Media from './landing/Media';
import JunctionX from './landing/JunctionX';
import Volunteer from './landing/Volunteer';
import Footer from './landing/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="apply">
          <Apply />
        </div>
        <div id="stories">
          <Stories />
        </div>
        <div id="junctionx">
          <JunctionX />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="hacktalks">
          <Hacktalks />
        </div>
        <div id="media">
          <Media />
        </div>
        <div id="volunteer">
          <Volunteer />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
