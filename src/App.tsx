import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {IUser} from './models/IUser';
import ProjectList from "./components/projects/ProjectList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
            })
    }, [])

    return (
        <>
            <Header/>
            <div className="App container-fluid">
                <div className={"row"}>
                    <ProjectList users={users}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
