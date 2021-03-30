import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Profile = () => {
  return (
    <>
		<Container>
			<h1 class="text-center mb-5">Page de profil</h1>
			<div class="input-group">
  				<div class="input-group-prepend">
    				<span class="input-group-text" id="">First and last name</span>
  				</div>
  				<input type="text" class="form-control" placeholder="John"></input>
  				<input type="text" class="form-control" placeholder="Doe"></input>
			</div>
		</Container>
  	</>
  )
}
export default Profile;
