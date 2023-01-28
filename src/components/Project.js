import React from 'react'
import { Tab } from 'react-bootstrap'
import { Container, Col, Row } from 'react-bootstrap'
import newsmonkey1 from "../assets/img/NewsMonkey1.png"
import newsmonkey2 from "../assets/img/NewsMonkey2.png"
import newsmonkey3 from "../assets/img/NewsMonkey3.png"
import sidcare1 from "../assets/img/SidCare1.png"
import sidcare2 from "../assets/img/SidCare2.png"
import sidcare3 from "../assets/img/SidCare3.png"
import iNotebook1 from "../assets/img/iNotebook1.png"
import iNotebook2 from "../assets/img/iNotebook2.png"
// import iNotebook3 from "../assets/img/iNotebook3.png"
import iNotebook3 from "../assets/img/iNotebook3.png"
import Nav from 'react-bootstrap/Nav'
import { ProjectCard } from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"
export const Project = () => {
  const newsmonkey = [
    {
      title: "Newmonkey",
      description: "Get your daily dose of news for free",
      imageURL: newsmonkey1
    },
    {
      title: "Newmonkey",
      description: "Business Headlines",
      imageURL: newsmonkey2
    },
    {
      title: "Newmonkey",
      description: "Sports Headline",
      imageURL: newsmonkey3
    }
  ]
  const sidcare = [
    {
      title: "SidCare",
      description: "Customer review section",
      imageURL: sidcare1
    },
    {
      title: "SidCare",
      description: "About us",
      imageURL: sidcare2
    },
    {
      title: "SidCare",
      description: "Products",
      imageURL: sidcare3
    }
  ]
  const iNotebook = [
    {
      title: "iNotebook",
      description: "Your notebook on clod",
      imageURL: iNotebook1
    },
    {
      title: "iNotebook",
      description: "Add as many notes as you want",
      imageURL: iNotebook2
    },
    {
      title: "iNotebook",
      description: "Update your note",
      imageURL: iNotebook3
    }
  ]
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2 style={{marginBottom:"25px"}}>Projects</h2>
            {/* <p>Loreum ipsum is simply a dummy text of the printing and typesetting industry</p> */}
            <Tab.Container className="projects-tab mb-5" id="projects-tab" defaultActiveKey="first">
            <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center"  >
              <Nav.Item>
                <Nav.Link eventKey="first">
                  NewsMonkey
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  SidCare
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  iNotebook
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                {
                          newsmonkey.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                {
                          sidcare.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                {
                          iNotebook.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                </Row>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} />
    </section>
  )
}
