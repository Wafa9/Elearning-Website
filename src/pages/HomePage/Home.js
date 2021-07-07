import React from 'react';
import { homeObjOne ,homeObjTwo} from './Data';
import { InfoSection,Card } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
       <InfoSection {...homeObjTwo} />
      <Card />
     
      
     
      
     
     
    </>
  );
}

export default Home;