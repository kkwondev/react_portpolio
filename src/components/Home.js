import React from 'react';
import styled from 'styled-components';
const MainWrap =styled.section`
    clear: both;
    width:100%;
    height:90vh;
    position:relative;
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