import React from 'react';
import styled from 'styled-components';
import { AiFillGithub,AiFillFacebook } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";

const FooterWrap = styled.footer`
    clear:both;
    width:100%;
    height:100px;
    padding:35px 0 0 0;
    box-sizing:border-box;
    font-size:12px;
    color:#666;
    text-align:center;
    text-transform:uppercase;
`;
const SnsLink = styled.article`
    width:100%;
    height:30px;
    margin: 0 auto;
    margin-bottom:10px;

`;
const SNS = {
    cursor :"pointer",
    marginRight:10,
    fontSize:32,
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
            <SNSAtag href="https://github.com/kkwondev/"
            target="_blank">
            <AiFillFacebook style={SNS}/>
            </SNSAtag>
            <SNSAtag href="https://github.com/kkwondev/"
            target="_blank">
            <RiKakaoTalkFill style={SNS} cursor="pointer"/>
            </SNSAtag>
        </SnsLink>
            copylight © kangkyoungwon.
        </FooterWrap>
        </>
    );
}
export default Footer;