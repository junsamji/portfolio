import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import Bipex from './Bn';
import './Home.css';
import Bn from '../../assets/Bn.png';
import Sejung from '../../assets/Sejung.png';
import Hancom from '../../assets/hancom.png';

function Home() {
    return (
        <div className="divC">
            <AnimatedOnScroll animationOut="fadeOut" animationInDuration={600}>
            <div className="homediv">
                <ul type="square">
                    <li><h2>Name</h2>지준삼</li>
                    <li><h2>Career</h2>since 2011.11.01</li>
                    <li>
                        <h2>Skill & Tools</h2>
                        - Java, JavaScript, VisualBasic, C#<br/>
                        - Spring, SpringBoot, .NET, react<br/>
                        - Oracle, MSSQL<br/>
                        - Docker, Jenkins
                    </li>
                </ul>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="slideInUp" animationInDuration={1000}>
            <div className="homediv" style={{
                    textAlign:'center',
                    backgroundColor: '#ccc'}}>
                <div style={{
                    height:'10vh'
                }}>
                    <h1>경력사항</h1>
                </div>
                
                <div style={{
                    height:'25vh'
                }}>
                    <span><img src={Bn} height="100" alt="Bn" style={{
                    border: '1px solid gold',
                }}/></span>
                    <span><h2>(주)바이펙스 (2011.11 ~ 2013.09)</h2></span>
                </div>

                <div style={{
                    height:'25vh'
                }}>
                    <span><img src={Sejung} height="100" alt="Sejung" style={{
                    border: '2px solid gold',
                }}/></span>
                    <span><h2>(주)세정아이앤씨 (2013.10 ~ 2019.08)</h2></span>
                </div>

                <div style={{
                    height:'25vh'
                }}>
                    <span><img src={Hancom} height="100" alt="Hancom" style={{
                    border: '2px solid gold',
                }}/></span>
                    <span><h2>(주)한글과컴퓨터 (2019.09 ~ )</h2></span>
                </div>
            </div>
            </AnimatedOnScroll>
            <div className="homediv" style={{
                    textAlign:'center',
                    backgroundColor: '#FFF136'}}>
                <Bipex/>
            </div>
        </div>
    );
};

export default Home;