import React from 'react';
import profile from '../assets/profile.jpg';

const AboutMe = () => (
  <section>
    <img src={profile} alt="Developer" />
    <p>Short bio about the developer.</p>
  </section>
);

export default AboutMe;