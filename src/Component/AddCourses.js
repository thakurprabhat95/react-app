import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from "axios";
import base_url from "../apicall/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
//add title in search bar
    useEffect(()=>{
        document.title="Add Courses"
    },[]);

    const [course,setCourse]=useState({});
    //handle form function
     
    const handleForm=(e)=>{
        console.log(course);
        postDataOnServer(course)
        e.preventDefault();
    }

    //creating function to post on the server
    const postDataOnServer=(data)=>{
        axios.post(`${base_url}/addcourses`,data).then(
            (response)=>{
                    console.log(response)
                    console.log("Success");
                    toast.success("done!!");
            },(error)=>{
                console.log(error)
                console.log("Failure");

            }
        )
        

    }

    return(
      
        <Fragment>
            <h2 className="text-center ml-3">Fill Course Detail</h2>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <Label for="userid">Course Id</Label>
                <Input type="text"
                 name="userid" 
                 id="userid" 
                 placeholder="Enter Here"
                //  value={props.course.id}
                 onChange={(e)=>{
                     setCourse({...course,id:e.target.value})
                 }}
                 />
            </FormGroup>

            <FormGroup>
                <Label for="title">Course Title</Label>
                <Input type="text" 
                name="course_title" 
                id="title" 
                placeholder="Enter Course Title"
                // value={props.course.title}
                onChange={(e)=>{
                    setCourse({...course,title:e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
          <Label for="description">Course Description</Label>
          <Input 
          type="textarea" 
          name="description" 
          id="description"
          style={{height:100}} 
        //   value={props.course.description}
          onChange={(e)=>{
            setCourse({...course,description:e.target.value})

          }}
          />
        </FormGroup>

        <Container className="text-center">
            <Button type="submit" color="success">Add Course</Button>
            <Button type="reset" color="warning ml-3">Clear</Button>
        </Container>
        </Form>

        </Fragment>
    )


}
export default AddCourse;