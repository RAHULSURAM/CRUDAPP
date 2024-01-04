import { TableCell,Table,TableHead,TableRow,TableBody,styled, Button } from "@mui/material";

import {getUsers,deleteUser} from '../services/api.js';
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


const StyledTable = styled(Table)`
   width: 90%;
   margin: 50px auto 0 auto;
`

const Thead = styled(TableRow)`
    background: #000;
    & > th {
        color: #fff;
        font-size: 20px
    }
`

const TBody = styled(TableRow)`
    & > td {
        color: #000;
        font-size: 20px
    }
`

const AllUsers = ()=>{

    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    const deleteUserData = async(id)=>{
        await deleteUser(id);
        getUserDetails();
    }

    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails= async ()=>{
        let response = await getUsers();
        setUsers(response.data);
        console.log(response);
    }
    return (
        <StyledTable>
            <TableHead>
                 <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                 </Thead>
            </TableHead>
            <TableBody>
                 {
                    users.map(user=>
                        <TBody>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                        <Button variant="contained" style={{marginRight:10}} onClick={()=>navigate(`/edit/${user.id}`)}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                    </TableCell>
                 </TBody>
                        )
                 }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;