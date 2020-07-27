import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {IUser} from "../../models/IUser";
import {IProject} from '../../models/IProject';
import ProjectItem from "./project/ProjectItem";

interface ProjectListProps {
    users: IUser[]
}

const ProjectList: React.FC<ProjectListProps> = ({users}) => {

    const [arProjects, setarProjects] = useState<Array<IProject[]>>([])

    useEffect(() => {
        users.map(user => {
            return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then((response) => {
                    setarProjects(prevState => [response.data, ...prevState])
                })
        })

    }, [users]);

    function getUser(id: number) {
        return users.find(user => user.id === id) as IUser;
    }

    return (
        <div className={"row"}>
            {arProjects.map(projects => {
                return projects.map(project => {
                        return (
                            <ProjectItem
                                project={{
                                    id: project.id,
                                    title: project.title,
                                    username: getUser(project.userId).username,
                                    name: getUser(project.userId).name
                                }}
                                key={project.id}
                            />
                        )
                    }
                )
            })}
        </div>
    )
}

export default ProjectList;
