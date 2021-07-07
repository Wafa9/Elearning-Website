import React from 'react';
import { InfoSection , Card } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function About() {
  return (
    <>
     <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
      <Card />
    </>
  );
}

export default About;