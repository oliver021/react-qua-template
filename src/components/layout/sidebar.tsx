import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    Desktop,
    InfoSquare,
    CodeAlt,
    User,
    Server,
    MapAlt,
    CheckSquare,
} from "@styled-icons/boxicons-regular";
import reactLogo from "../../logo.svg"

const UserData = styled.div`
    width: calc(100%) - 3.6px;
    height: 78px;
    margin: 0;
    padding: 3.6px;
    text-align: center;
    background: #2f2f2f;
    margin-bottom: 10px;
    box-shadow: -0.5px 2px 5px rgba(11,11,11,0.7);
`;

const MenuContainer = styled.ul`
    width: 100%;
    margin:0;
    padding:0;
    height: auto;
    & > li{
        padding-left: 14.5px;
        cursor: pointer;
        padding-top: 3px;
        padding-bottom: 3px;
    }
`;

const MenuItem = styled.li`
    width: calc(100%) - 14.5px;
    height: 47px;
    list-style: none;
    list-style-type: none;
     & > a{
         color: black;
         margin-left: 18px;
         text-decoration: none;
         font-size: 16.2px;
         font-weight: 300;
         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     }

     &:hover{
        background: #cdcdcd;
     }
`;

const Divider = styled.hr`
    margin-left:0;
    width: 98%;
    height: 3.2px;
    background: rgba(11, 11, 11, 0.2);
    border: 0;
    border-radius: 0 33px 0px 0px;
    margin-bottom: 18px;
`;

const MenuDivider = (p: {title: string}) => <>
    <b>{p.title}</b>
    <Divider/>
</>;


export default function SidebarApp(){
    return <>
    <UserData>
        <img height="80px" src={reactLogo} alt="Demo logo"/>
    </UserData>
    <MenuContainer>
          <MenuDivider title="Main"/>
        <MenuItem>
            <Desktop size={30} color="white"/>
            <Link to="/">Dashboard</Link>
        </MenuItem>
        <MenuItem>
        <InfoSquare size={30} color="white"/>
            <Link to="/home/metrics">Metrics</Link>
        </MenuItem>
        <MenuItem>
        <CodeAlt size={30} color="white"/>
            <Link to="/home/console">Console</Link>
        </MenuItem>
        <MenuDivider title="Management"/>
        <MenuItem>
            <Server size={30} color="white"/>
            <Link to="/">Servers</Link>
        </MenuItem>
        <MenuItem>
            <MapAlt size={30} color="white"/>
            <Link to="/">Location</Link>
        </MenuItem>
        <MenuItem>
        <CheckSquare size={30} color="white"/>
            <Link to="/metrics">Issues</Link>
        </MenuItem>
        <MenuItem>
        <User size={30} color="white"/>
            <Link to="/console">Users</Link>
        </MenuItem>
    </MenuContainer>
    </>
}