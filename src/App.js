import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './Component/Home';
import Course from './Component/Course';
import Allcourses from './Component/Allcourses';
import AddCourse from './Component/AddCourses';
import Header from './Component/Header';
import Menus from './Component/Menus';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';

function App() {


  const btnHandle=()=>{
    // toast("this is my first react app!!!")
    toast.success("done!!",{
      position:'top-center'
    })
  }

  return ( 
   <div>
     {/* <ToastContainer/>
     <h1>Welcome to Course Application!!</h1>
     <Button color="danger" outline onClick={btnHandle}>
       
       First React Button</Button> */}
       {/* <Home/> */}
       {/* <Course course={{title:"React js course",description:"This is best course on youtube"}}/> */}
       {/* <Allcourses/>
       <AddCourse/> */}
  
    
  
      <Router>
       <Container>
       <Header/>
       <Row>
         <Col md={4}>
             <Menus/>
         </Col>
         
         <Col md={8}>
         
         <Routes>
         <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addcourse" element={<AddCourse/>}/>
          <Route exact path="/viewcourse" element={<Allcourses/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
         
        
         </Col>
       </Row>
     
     </Container>
     </Router>
  
    
     
     
   </div>
  );
}

export default App;
