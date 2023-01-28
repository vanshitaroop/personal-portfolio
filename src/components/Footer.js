import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "animate.css"
import TrackVisibility from "react-on-screen"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} style={{width:"200px"}} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <TrackVisibility>
              {({ isVisible }) =>
            <div  className={isVisible?" social-icon animate__animated animate__bounce":"social-icon"}>
              <a href="https://www.linkedin.com/in/vanshita-roopchandani-5943171b8/?original_referer=https%3A%2F%2Fsidhealthcare.com%2F"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/vanshita.roopchandani/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/vanshita_roopchandani/"><img src={navIcon3} alt="Icon" /></a>
            </div>}
            </TrackVisibility>
            <p style={{marginTop:"25px"}}>Developed by Vanshita roopchandani🧃</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
