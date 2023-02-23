import React from 'react';
import './App.css';
import {SuperButton} from './Components/SuperButton';


function App() {
    return (
        <div>
            <SuperButton callBack={ () => {} } color={'red'}>MyNameIsButton</SuperButton>
        </div>
    );
}



export default App;
