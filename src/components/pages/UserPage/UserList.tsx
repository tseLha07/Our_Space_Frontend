import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import { useNavigate, useParams } from "react-router-dom";
import MenuAppBar from "../../organisms/AppBar";
import {
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UserList = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (groupId !== undefined) {
      UserService.getUserFromGroup(groupId).then((data) => {
        setUsers(data.data);
      });
    }
  }, []);


  return (
    <>
      <MenuAppBar />
      <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          component="div"
        >
          Users List
        </Typography>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 17 }}>Firstname</TableCell>
              <TableCell style={{ fontSize: 17 }}>Lastname</TableCell>
              <TableCell style={{ fontSize: 17 }}>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonGroup variant="text">
        <Button onClick={() => navigate("/users/" + groupId)}>Dashboard</Button>
        <Button onClick={() => navigate("/")}>Home</Button>
      </ButtonGroup>
    </>
  );
};

export default UserList;
