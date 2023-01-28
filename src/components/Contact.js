import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
export const Contact = () => {
    const formInitialDetails ={
        firstname:" ",
        lastname:" ",
        email:"",
        phone:"",
        message:""
}
    const [formDetails, setformDeatils] = useState(formInitialDetails);
    const [buttonText,SetbuttonText]=useState('Send');
    const [status, setstatus] = useState({});
    const onFormUpdate=(category,value)=>{
        setformDeatils({
            ...formDetails,
            [category]:value
        })
    }
    const handleSubmit=()=>{

    }
  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className="align-itm-center">
                <Col md={6}>
                    <img src={contactImg} alt="contact form img"/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}  action="https://formspree.io/f/xeqwegjv"  method="POST" >
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" name="firstName" placeholder="First Name" />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" name='lastName' placeholder="last Name" />
                            </Col>
                            <Col sm={12} md={12} className="px-1 my-2">
                                <input type="email" value={formDetails.email} name="mail" placeholder="Email" onChange={(e)=>onFormUpdate('email',e.target.value)} />
                            </Col>
                            {/* <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} name="phone" placeholder="Phone no." onChange={(e)=>onFormUpdate('phone',e.target.value)} />
                            </Col> */}
                            <Col>
                            <textarea  className="px-1" row="7" value={formDetails.message} placeholder="Message" name='msg' onChange={(e)=>onFormUpdate('message',e.target.value)} />
                            <button type='submit'> <span>{buttonText}</span> </button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success===false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
