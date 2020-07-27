import React, {useState, useEffect} from 'react';
import './App.css';
import {IUser} from './models/IUser';
import axios from 'axios';
import ProjectList from "./components/projects/ProjectList";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div className="App container-fluid">
            <ProjectList users={users}/>
        </div>
    );
}

export default App;
