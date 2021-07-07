import styled from 'styled-components';



export const Heading = styled.h3`
  margin-bottom: 125px;
 text-align: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;

  }
`;


export const CardsSection = styled.div`
  padding: 60px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
   background-color: rgba(255, 255, 255, 1);
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardTitle = styled.h1`
  color: #7B7693;
  font-size: 20px;
   margin: 0px 0 6px 20px;
`;
export const CardIcon = styled.div`
  margin: 18px 0 0 20px;
  font-size: 50px;
  /* background-color: #fff; */
  border-radius: 25px;
`;

export const CardPar = styled.p`
  margin-left: 20px;
  color: #7B7693;
  font-size: 12px;
`;


export const CardI = styled.div`
  background: #f0f7f6;
  box-shadow: 0px 0px 42.32px 3.68px rgba(0, 1, 1, 0.122);
  width: 270px;
  height: 200px;
  text-decoration: none;
  border-radius: 14px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 70%;
    &:hover {
      transform: none;
    }
  }
`;