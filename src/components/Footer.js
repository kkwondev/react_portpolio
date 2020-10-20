import React from 'react';
import styled from 'styled-components';
import { AiFillGithub,AiFillFacebook } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";

const FooterWrap = styled.footer`
    width:100%;
    height:10vh;
    font-size:12px;
    color:#666;
    position:absolute;
    bottom:20px;
    text-align:center;
    text-transform:uppercase;
`;
const SnsLink = styled.article`
    width:100%;
    margin: 0 auto;
    margin-bottom:5px;

`;
const SNS = {
    cursor :"pointer",
    marginRight:10,
    fontSize:32
}
const SNSAtag = styled.a `
    color:#666;

`;
function Footer() {
    return(
        <>
        <FooterWrap>
        <SnsLink>
            <SNSAtag 
            href="https://github.com/kkwondev/"
            target="_blank">
                <AiFillGithub style={SNS}/>
            </SNSAtag>
            <AiFillFacebook style={SNS}/>
            <RiKakaoTalkFill style={SNS} cursor="pointer"/>
        </SnsLink>
            copylight © kangkyoungwon.
        </FooterWrap>
        </>
    );
}
export default Footer;