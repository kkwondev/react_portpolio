import React from 'react';
import styled, { keyframes } from 'styled-components';
const MainWrap =styled.section`
    clear: both;
    width:100%;
    height:90vh;
    position:relative;
`;
const TypeAnimations = keyframes`
    0% {
        opacity:0;
        top:50%;
    }
    100% {
        opacity:1;
        top:52%;
    }
`;
const Main = styled.article`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    text-align:center;
    box-sizing:border-box;
    font-weight:300;
    letter-spacing: 10px;
    color:#666;
    animation: ${TypeAnimations} 1.5s infinite linear alternate;
    @media all and (min-width:200px) {
        width:100%;
        font-size:25px;
        line-height:40px;
    }
    @media all and (min-width:500px) {
        font-size:40px;
    }
    @media all and (min-width:1000px) {
        font-size:50px;
    }
`;
function Home () {
    return(
        <MainWrap>
            <Main>
                KKWON 의 REACT.
            </Main>
        </MainWrap>
    );
}
export default Home;