import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {IUser} from "../../models/IUser";
import {IProject} from '../../models/IProject';
import {ProjectListProps} from '../../types/ProjectListProps';
import ProjectItem from "./project/ProjectItem";
import Search from "./../common/Search";

const ProjectList: React.FC<ProjectListProps> = ({users}) => {

    const [arProjects, setarProjects] = useState<Array<IProject[]>>([])
    const [searchValue, setSearchValue] = useState<string>("");
    const [filterableProjects, setFilterableProjects] = useState<Array<IProject[]>>([])

    useEffect(() => {
        users.map(user => {
            return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then((response) => {
                    setarProjects(prevState => [response.data, ...prevState])
                })
        })

    }, [users]);

    useEffect(() => {
        const results = arProjects.map(projects => {
            return projects.filter(project => {
                return project.title.toLowerCase().includes(searchValue);
            })
        });
        setFilterableProjects(results)
    }, [searchValue, arProjects])

    function getUser(id: number) {
        return users.find(user => user.id === id) as IUser;
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
            <Search
                value={searchValue}
                placeholder={"Введите название проекта"}
                handleChange={changeHandler}
            />
            {filterableProjects.map(projects => {
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
        </>
    )
}

export default ProjectList;
