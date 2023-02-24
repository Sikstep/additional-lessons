import React from 'react';
import {TasksType} from '../App';

type SuperTodolistType = {
    tasks: TasksType[]
    children?: React.ReactNode

}
export const SuperTodolist: React.FC<SuperTodolistType> = (props) => {

    const {tasks, children} = props;

    const mappedTasks = tasks.map(el => {
        return (
            <li key={el.id}>{el.title}
                <input type="checkbox" checked={el.isDone}/>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {mappedTasks}
            </ul>
            <div style={{backgroundColor: 'yellow'}}>{children}</div>
            <div>---------------------------------------------------</div>
        </div>
    );
};

