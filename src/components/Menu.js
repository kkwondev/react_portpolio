import React, {useState} from 'react';
import Home from './Home';
import styled, {css} from 'styled-components';
import { Route,Link } from 'react-router-dom';
import Introduction from './Introduction';
import { GrMenu } from "react-icons/gr";
const Header = styled.header`
    width:100%;
    height:60px;
    padding:0 0 0 30px;
    box-sizing:border-box;
    position:relative;
    letter-spacing:1.5px;
    @media all and (min-width:200px) {
        padding:0 20px 0 20px;
    }
    @media all and (min-width:700px) {
        padding:0 0 0 30px;
    }
`;
const MenuWrap = styled.ul`
    width:100%;
    height:60px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#666;
`;
const MoMenuWrap = styled.ul`
    width:100%;
    height:120px;
    background-color:#fff;
    text-transform:uppercase;
    letter-spacing:1.5px;
    color:#666;
    position:absolute;
    top:-100%;
    z-index:999;
    transition:all 0.3s;
    opacity:0;
    ${props =>
    props.open &&
    css`
       top:60px;
       opacity:1;
    `
    }
`;
const Logo = styled.h1`
    float: left;
    line-height:60px;
    font-size:15px;
    font-weight:600;
    color:#333;
    text-transform:uppercase;
`;
const Menus = styled.li `
    float:right;
    line-height:60px;
    padding:0 30px;
    cursor: pointer;
    font-size:15px;
    font-weight:400;
    @media all and (min-width:200px) {
        display:none;
    }
    @media all and (min-width:700px) {
        display:block;
    }
`;
const Hambuger = styled.div`
    width:60px;
    height:60px;
    line-height:65px;
    font-size:25px;
    text-align:right;
    /* position:absolute;
    top:50%;
    right:0; */
    float:right;
    /* transform:translateY(-50%); */
    cursor: pointer;
    @media all and (min-width:200px) {
        display:block;
    }
    @media all and (min-width:700px) {
        display:none;
    }
`;
const MoblieMenus = styled.li`
    width:100%;
    display:block;
    height:60px;
    line-height:60px;
    text-align:center;
    font-size:15px;
    font-weight:400;
    text-transform:uppercase;
    letter-spacing:2px;
    border-bottom:1px solid #666;
    cursor: pointer;
`;

function Menu() {
    const Ready = () => {
        alert("준비중입니다.");
        setOpen(false);
    }
    const [open,setOpen] = useState(false);
    console.debug(open);
    const openMenu = () => {
        setOpen(!open)
    }
    
    return(
        <>
        <Header>
            <Logo>
                <Link to="/" className="logo_title">kkwon dev</Link>
            </Logo>
        <MenuWrap>
            <Menus onClick={Ready}>Portpolio</Menus>
            <Menus>
                <Link to="/intro" className="logo_title">introduction</Link>
                </Menus>
                <Hambuger>
                    <GrMenu onClick={openMenu}/>
                </Hambuger>
        </MenuWrap>
        </Header>
        <MoMenuWrap open={open}>
            <MoblieMenus open={open}>
                <Link to="/intro" className="logo_title">introduction</Link>
                </MoblieMenus>
            <MoblieMenus onClick={Ready} open={open}>Portpolio</MoblieMenus>
        </MoMenuWrap>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/intro" component={Introduction}/>
        </>
    );
}
export default Menu;