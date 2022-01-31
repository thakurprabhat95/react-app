import React from "react";
import {
    Card,
    CardBody,
    
    CardSubtitle,
    CardText,
    
    Button,
    Container
} from "reactstrap";
import axios from "axios";
import base_url from "../apicall/bootapi";



const Course=({course,update})=>{

   
    const deletecourse=(id)=>{
        axios.delete(`${base_url}/deletecourses/${id}`).then(
            (response)=>{
                console.log(response.data);
                console.log("deleted..");
                update(id);

            },(error)=>{
                console.log(error);
                console.log("server problem,not deleted");
            }
        )

    }

    const editHandler=(id)=>{
        axios.get(`${base_url}/getcourses/${id}`).then(
            (response)=>{
                const resp=response.data;
                console.log(resp);
              
                
                // <Route exact path="/addcourse" element={ <AddCourse course={resp}/>}/>



            },(error)=>{
                console.log(error);
            }
        )
    }
    return(

        <Card className="text-center"> 
            <CardBody>
                {/* <CardSubtitle className="font-dweight-bold">Java Course</CardSubtitle>
                <CardText>It is a java course for beginners!!</CardText> */}
                 <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button  key={course.id} color="danger" onClick={()=>{
                        deletecourse(course.id)
                    }}>Delete</Button>
                    <Button key={course.id} color="warning ml-3" 
                    onClick={()=>editHandler(course.id)}>Update</Button>

                </Container>
            </CardBody>
        </Card>
    )
}
export default Course;