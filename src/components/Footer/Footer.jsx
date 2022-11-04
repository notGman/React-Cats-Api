import styled from "styled-components";

const color = "#D0383E";

const MAIN = styled.div`
  line-height: 30px;
  text-align: center;
  font-family: "Roboto";
  color: white;
  margin: 80px 0 0 50px;
  h4{
    font-weight:lighter;
  }
  a{
    font-weight:lighter;
    color: ${color};
  }
  `
const Footer = () =>{
  return(
    <MAIN>
      <a href="#"><h4>Versió Català</h4></a>
      <h4>Developed by <a href="#">@not._.gman</a></h4>
      <h4>Images by Tomomi Imura (<a href="#">@girlie_mac</a>)</h4>
      <h4>Check out <a href="#">Abstract API</a>, the home for modern, developer-friendly tools like the <a href="#">IP Geolocation API, VAT Validation & Rates API, Public Holiday API</a>, and more.</h4>
    </MAIN>
  );
}

export default Footer;


