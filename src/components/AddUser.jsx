import { FormControl,FormGroup,InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import {addUser} from '../services/api';
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = ()=>{

    const [user, setUser] = useState(initialValues);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async ()=>{
        try{
            await addUser(user);
            navigate("/all");
        }
         
         catch(error){
            /*if (error.response && error.response.status === 400) {
            // Parse the validation errors and update the state to reflect them in the UI
            const validationErrors = parseValidationErrors(error.response.data);
            setErrors(validationErrors);
          } else {
            // Handle other errors
            
          }*/
          console.error('Error:', error.message);
        };
         
    }
    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button onClick={()=>addUserDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;