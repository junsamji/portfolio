import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import hc from '../../assets/hancom.png'

function Hancom() {
    return(
        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000}>
        <div>
            <div><img src={hc}/></div>
            <div>
            <h1>주요 업무</h1>
            </div>
            <div>
                <h2>- ERP개발 및 운영</h2>
                <h2>- 그룹웨어 시스템 운영 (IBM Lotus Notes Solution)</h2>
            </div>
            <div>
            <h1>프로젝트</h1>
            </div>
            <div>
                <h2>- Cargo System</h2>
                <h2>- CCM ( 골프장 통합관리 - 레이포드CC )</h2>
                <h2>- 자산관리 시스템</h2>
            </div>
        </div>
        </AnimatedOnScroll>
    );
}

export default Hancom;