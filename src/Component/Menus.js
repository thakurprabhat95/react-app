import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{

    return(
        <ListGroup>

              {/* Here we use ListGroupItem-->link and href-->to as page is refreshing */}
        <Link className="list-group-item list-group-item-action" active tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/addcourse" action>Add Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/viewcourse" action>View Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
        </ListGroup>
      
    )
}
export default Menus;