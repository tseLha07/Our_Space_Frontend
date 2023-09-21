import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import MenuAppBar from "../../organisms/AppBar";
import {
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UserTable = () => {
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

  const handleAdd = () => {
    navigate("/adduser");
  };

  const handleEdit = (id: string) => {
    navigate("../useredit/" + id);
  };

  const handleDelete = (id: string) => {
    UserService.deleteUser(id).then(() =>
      setUsers(users.filter((user) => user.id == id))
    );
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
          User's Dashboard
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
              <TableCell style={{ fontSize: 17 }}>Actions</TableCell>
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
                <TableCell component="th" scope="row">
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        <ButtonGroup variant="text">
          <Button onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button onClick={() => navigate("../")}>
            Home
          </Button>
        </ButtonGroup>
    </>
  );
};

export default UserTable;
