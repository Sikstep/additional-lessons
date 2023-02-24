import React from 'react';
import './App.css';
import {SuperButton} from './Components/SuperButton';
import {v1} from 'uuid';
import {SuperTodolist} from './Components/SuperTodolist';

export type TasksType = {
    id: string
    title: string
    isDone: boolean

}

function App() {

    const tasks: TasksType[] = [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
    ];

    return (
        <div>
            <SuperButton callBack={() => {
            }} color={'red'}>Red Super Button</SuperButton>
            <SuperButton callBack={() => {
            }} color={'secondary'}>Without color Supper Button</SuperButton>
            <SuperButton callBack={() => {
            }} disabled>Without color Supper Button</SuperButton>
            <SuperTodolist tasks={tasks}>
                <SuperButton callBack={() => {
                }} color={'red'}>Red Super Button</SuperButton>
                <SuperButton callBack={() => {
                }} color={'secondary'}>Without color Supper Button</SuperButton>
                <SuperButton callBack={() => {
                }} disabled>Without color Supper Button</SuperButton>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <SuperButton callBack={() => {
                }} color={'red'}>Red Super Button</SuperButton>
                <SuperButton callBack={() => {
                }} color={'secondary'}>Without color Supper Button</SuperButton>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>

                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
                <div>INFO</div>
            </SuperTodolist>

        </div>
    );
}


export default App;
