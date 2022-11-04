import styled from "styled-components";

const color = "#D0383E";

const NAVBAR = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;
const NAV_ITEMS = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 35px;
  margin-right: -40px;
  h1,
  a {
    cursor: pointer;
    font-family: "Poppins";
    font-size: 18px;
    color: ${color};
    font-weight: 400;
  }
  @media only screen and (max-width: 748px) {
    display: none;
  }
`;
const LOGO = styled.div`
  h1 {
    font-family: "Poppins";
    color: ${color};
  }
`;

const Navbar = () => {
  return (
    <NAVBAR>
      <LOGO>
        <h1>Cats😻</h1>
      </LOGO>
      <NAV_ITEMS className="nav-items">
        <h1>
          <a href="https://documenter.getpostman.com/view/5578104/RWgqUxxh" target={"_blank"} rel="noreferrer">
            API documentation
          </a>
        </h1>
        <h1>Contact</h1>
      </NAV_ITEMS>
    </NAVBAR>
  );
};

export default Navbar;
//D0383E
