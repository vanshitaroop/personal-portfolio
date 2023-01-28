import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageURL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageURL} style={{width:"500px" , height:"300px"}} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
