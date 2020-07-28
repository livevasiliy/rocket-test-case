import React from "react";
import styled from "styled-components";

const Copyright = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 60px;
   padding: 0.5rem 1rem;
   background-color: #343a40;
   color: #ffffff;
   text-align: center;
   font-size: 22px;
   font-weight: 600;
   line-height: 18px;
`

const Footer: React.FC = () => {
    return (
        <Copyright>
            <span>Василий Пивоваров, 2020</span>
        </Copyright>
    )
}

export default Footer
