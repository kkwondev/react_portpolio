import React from 'react';
import me from '../img/me.jpg';
import styled from 'styled-components';
import ListCareer from './ListCareer';

const Introwrap = styled.section`
  width:80%;
  margin:0 auto;
  padding:50px 0px;
  box-sizing:border-box;
`;
const ImgMe = styled.article`
  width:150px;
  height:150px;
  border-radius:100px;
  background-image: url(${me});
  background-size:cover;
  background-position:top center;
  background-repeat:no-repeat;
  margin:0 auto;
  display:block;
  margin-bottom:50px;
`;
const Introtext = styled.article`
  text-align:center;
  letter-spacing:-1.5px;
  font-size:25px;
  font-weight:300;
  margin-bottom:50px;
`;
const Information = styled.article`
  width:100%;
  height:200px;
  text-align:center;
  padding:10px;
  box-sizing:border-box;
  color:#666;
  letter-spacing:-1.5px;
`;
const Career = styled.article`
  width:50%;
  float: left;
`;
const Skils = styled.article`
  width:50%;
  float: left;

  `;
  const Title = {
    marginBottom : 20
  }
function Introduction () {
    return (
      <Introwrap>
        <ImgMe/>
        <Introtext>
          <p>강경원</p>
          <p>1996.05.25</p>
        </Introtext>
        <Information>
          <Career>
            <h2 style={Title}>CAREER</h2>
          <ListCareer/>
          </Career>
          <Skils>
           <h2 style={Title}>SKILS</h2>
           <p>HTML CSS JAVASCRIPT REACT</p>
          </Skils>
        </Information>
      </Introwrap>
    );
}
export default Introduction;