import React from 'react';
import { FcCalendar, FcGraduationCap ,FcGlobe} from "react-icons/fc";
import { Heading,CardsSection,CardWrapper ,CardTitle ,CardIcon ,CardI ,CardPar} from './Card.elements';


const Slider = () => {
    return (
         <CardsSection>
          <Heading> We are just, Out of Ordinary </Heading>  
          <CardWrapper>
          <CardI>
              <CardIcon><FcCalendar/></CardIcon>
              <CardTitle> Courses Schedule </CardTitle>
              <CardPar>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum distinctio vero repudiandae ex ratione reiciendis repellat, voluptas sequi facilis.</CardPar>
          </CardI>
           <CardI>
              <CardIcon><FcGraduationCap /></CardIcon>
              <CardTitle> Expert Certifications </CardTitle>
              <CardPar>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum distinctio vero repudiandae ex ratione reiciendis repellat, voluptas sequi facilis.</CardPar>
          </CardI>
           <CardI>
              <CardIcon><FcGlobe /></CardIcon>
              <CardTitle> Online Courses </CardTitle>
              <CardPar>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum distinctio vero repudiandae ex ratione reiciendis repellat, voluptas sequi facilis.</CardPar>
          </CardI>
          
          </CardWrapper>
          </CardsSection> 
    )
}

export default Slider
