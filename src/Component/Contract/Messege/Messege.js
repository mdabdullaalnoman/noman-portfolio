import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Messege.css';
import emailjs from 'emailjs-com';

const Messege = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0r8crxd', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    

    return (
        <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 mx-auto">
                <h3>Message Me </h3>
                <Form >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control name="name" type="name" placeholder="name" /><br></br>
                        <Form.Control name="email" type="email" placeholder="email" /><br></br>
                        <Form.Control name="subject" type="subject" placeholder="subject" /><br></br>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="message"  placeholder="message" rows={5} />
                    </Form.Group>
                    <Button onClick={sendEmail} variant="outline-warning">Submit</Button>{' '}
                </Form>
            </div>
        </div>
    </div>

        
            
       
    );
};

export default Messege;