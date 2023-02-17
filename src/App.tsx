import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './Components/Button';
import {Input} from './Components/Input';
import {v1} from 'uuid';

type DataType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [data, setData] = useState<DataType[]>([]);

    const doFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        doFetch()
    }, [])

    const mappedData = data.map(el => {
        return (
            <li key={el.id}>
                <span>{el.id}</span>
                {/*<span>{el.userId}</span>*/}
                <span>{el.title}</span>
                <input type="checkbox" checked={el.completed}/>
            </li>
        )
    })

    const showMeFoo = () => {
      doFetch()
    }

    const clearMeFoo = () => {
        setData([])
    }
    const [newTitle, setNewTitle] = useState('');
    const addNewTitle = () => {
        const newTast = {userId: 1000, id: data.length+1, title: newTitle, completed: false}
        setData([newTast, ...data])
        setNewTitle('')
    }

    return (
        <div className="App">
            <Button name={'Show me'} callback={showMeFoo}/>
            <Button name={'Clear me'} callback={clearMeFoo}/>
            <div>
                <Input newTitle={newTitle} setNewTitle={setNewTitle}/>
                <Button name={'Add newTitle'} callback={addNewTitle}/>
            </div>
            <ul>
                {mappedData}

            </ul>
        </div>
    );
}

export default App;
