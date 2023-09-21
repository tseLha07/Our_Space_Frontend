import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Group } from "../../types/models/Group";
import GroupService from "../../Services/Groupservice";
import { Box, Button } from "@mui/material";
import MenuAppBar from "../organisms/AppBar";

export default function GroupListPage(){
    const navigate = useNavigate();
    const [groupList, setGroupList] = useState<Group[]>([]); 

    useEffect(() => {
        GroupService()
        .getAllGroups()
        .then((data) => {
          setGroupList(data.data);
          console.log("data", data)
          }).catch((error) => {
          console.log(error)
          });
    
      },[]);

      return (
        <>
        <MenuAppBar/>
            <Box
          display='flex'
          alignItems='baseline'
          justifyContent='left'
          flexDirection={'column'}
        >
          <div style={{alignContent: 'left'}}>
            <h2>Groups:</h2>
            {groupList.map((group) => 
              (
                <>
                
                <div>
                  <img src={group.logo} style={{height: 70, width: 70}}/><br />
                  Name = {group.name}, <br />
                  Description = {group.description}, <br />
                  Motto = {group.motto}, <br />
                  <Button onClick={() => navigate("/users/dashboard/" + group.id )}>users</Button>
                </div>
                </>
              )
          )}
          </div>
          
        </Box>
        </>
    
      );
    
}