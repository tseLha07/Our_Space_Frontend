import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import UserService from "../../../Services/UserService";
import MenuAppBar from "../../organisms/AppBar";
import { User } from "../../../types/models/User.model";
import AddIcon from '@mui/icons-material/Add';


export default function AllUserPage(){
    const navigate = useNavigate();
    const [userList, setUserList] = useState<User[]>([]); 

    useEffect(() => {
        UserService
        .getAllUsers()
        .then((data) => {
          setUserList(data.data);
          console.log("data", data)
          }).catch((error) => {
          console.log(error)
          });
    
      },[]);

      const handleAdd = () => {
        navigate("../useredit/");
      };

      return (
        <>
        <MenuAppBar />
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All Users
        </Typography>
        <IconButton onClick={handleAdd}>
        <AddIcon />
        </IconButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 17 }}>Firstname</TableCell>
              <TableCell style={{ fontSize: 17 }}>Lastname</TableCell>
              <TableCell style={{ fontSize: 17 }}>Email</TableCell>
              <TableCell style={{ fontSize: 17 }}>Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.lastName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.group_id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </>
    
      );
    
}