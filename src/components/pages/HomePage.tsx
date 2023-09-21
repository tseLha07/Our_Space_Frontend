import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from '../organisms/AppBar';

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <>
    <MenuAppBar/>
        <Box
      display='flex'
      alignItems='baseline'
      justifyContent='left'
      flexDirection={'column'}
    >
      <h1>
      Hello! this is the Home Page. Team_03 Project
      </h1>
      
    </Box>
    </>

  );
}
