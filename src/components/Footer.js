import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
    width:100%;
    height:50px;
    line-height:50px;
    font-size:12px;
    color:#666;
    position:absolute;
    bottom:0;
    text-align:center;
    text-transform:uppercase;
`;
function Footer() {
    return(
        <FooterWrap>
            copylight © kangkyoungwon.
        </FooterWrap>
    );
}
export default Footer;