import styled from "styled-components";

const color = "#D0383E";

const CARD = styled.div`
  /* height: 287px; */
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  /* cursor: pointer; */
  h1{
    color: white;
    font-family: 'Poppins';
  }
  h3{
    color: white;
    font-family: 'Poppins';
  }
`
const IMG = styled.img`
  /* max-width: 200px; */
  height: 200px;
  border-radius: 5px 5px 0 0;
`
const TEXT = styled.div`
  background-color: ${color};
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin-top: -5px;
  h1{
    font-size: 20px;
    font-weight: 400;
  }
  h3{
    font-size: 15px;
    font-weight: 400;
  }
`

const Cards = ({ image, id,name, description, origin }) => {
  try {
    const link = image.url
    return (
      <CARD>
        <IMG src={link} alt="none" />
        <TEXT>
          <h1 key={id}>{name}</h1>
          <h3>{origin}</h3>
        </TEXT>
      </CARD>
    );
  } catch (error) {
    console.log('Errrorrr */*');
  }
};

export default Cards;
