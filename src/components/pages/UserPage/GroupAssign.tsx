import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import UserForm from '../../molecules/UserForm/UserForm';
import { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const GroupAssign = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
      UserService.getAllUsers().then((data) => {
        setUsers(data.data);
      });
  }, []);

  const handleAdd = () => {
    navigate("/adduser");
  };

  return (
    <>
     <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth style={{marginTop: 40}}>
        <InputLabel id="demo-simple-select-label" >User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
            {users.map((user) => (
                <MenuItem value={10}>{user.firstName}</MenuItem>
            ))}
          
        </Select>
      </FormControl>
    </Box>
    </>
  );
};
export default GroupAssign;
