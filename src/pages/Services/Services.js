
import React from 'react';
import { InfoSection, Card } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Card />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Services;