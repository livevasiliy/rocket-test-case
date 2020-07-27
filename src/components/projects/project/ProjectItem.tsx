import React from 'react';
import {ProjectItemProps} from "../../../types/ProjectItemProps";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const Card = styled.div`
    display: flex;
    font-size: 16px;
`

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`

const CardTitle = styled.h2`
    font-size: 18px;
    margin-left: 1rem;
`
const CardSubTitle = styled.h5`
    font-size: 14px;
    font-weight: 300;
    margin-left: 1rem;
    color: #383838;
`

const ProjectItem: React.FC<ProjectItemProps> = ({project}) => {
    return (
        <div className={"col-12 col-md-6"} key={project.id}>
            <Wrapper>
                <Card className={"card"}>
                    <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <p className={"card-text"}>
                            <CardSubTitle>{project.name}</CardSubTitle>
                            <CardSubTitle>nickname: {project.username}</CardSubTitle>
                        </p>
                    </CardBody>
                </Card>
            </Wrapper>
        </div>
    )
}
export default ProjectItem
