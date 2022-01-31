import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";

const About=()=>{

    useEffect(()=>{
        document.title="About"
    },[]);

    return(


        
        <Card>
            <CardBody className="text-center">
               <h6 style={{color: "red"}}>
                This is Course Application in which User can add,update,delete course!!!

            </h6>
            <h6 style={{color: "blue"}}>
                This Application developed By Anil Kumar,Ajay Kumar,Rahul,Prabhat 
            </h6>
            </CardBody>
            </Card>

    )
}
export default About;