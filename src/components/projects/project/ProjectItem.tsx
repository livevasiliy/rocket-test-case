import React from 'react';
import styled from "styled-components";
import {ProjectItemProps} from "../../../types/ProjectItemProps";

const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const Card = styled.div`
    display: flex;    
    height: 150px;
    font-size: 16px;
    -webkit-box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);
    -moz-box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);
    box-shadow: 10px 10px 14px -4px rgba(0,0,0,0.28);
`

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #343a40;
`

const CardTitle = styled.h2`
    font-size: 18px;
    margin: 0.5rem 1rem;
    color: #ffffff;
`
const CardSubTitle = styled.h5`
    font-size: 14px;
    font-weight: 400;
    margin-left: 1rem;
    color: #ffffff;
`

const ProjectItem: React.FC<ProjectItemProps> = ({project}) => {
    return (
        <div className={"col-12 col-md-6"} key={project.id}>
            <Wrapper>
                <Card className={"card"}>
                    <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <div>
                            <CardSubTitle>{project.name}</CardSubTitle>
                            <CardSubTitle>nickname: {project.username}</CardSubTitle>
                        </div>
                    </CardBody>
                </Card>
            </Wrapper>
        </div>
    )
}
export default ProjectItem
