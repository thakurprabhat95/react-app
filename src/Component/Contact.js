import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";

const Contact=()=>{
    useEffect(()=>{
        document.title="Contact Us"
    },[]);


    return(

        <Card>
            <CardBody className="text-center">
            <h2 className="text-center" style={{color: "red"}}>Contact Our Team:</h2>
            <h6 style={{color: "blue"}}>
              Anil Kumar:-anil.kumar@agreeya.net
              <br/>
              Ajay Kumar:- ajay.kumar@agreeya.net
              <br/>
              Rahul:- rahul@agreeya.net
              <br/>
              Prabhat:- prabhat.thakur@agreeya.net
            </h6>
            </CardBody>
            </Card>
    )
}
export default Contact;