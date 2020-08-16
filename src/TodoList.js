import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{

    render(){
        const list = this.props.items;
        console.log(list);
        const listItems = list.map((todoItem,index) => 
            <Todo key={index} text={todoItem.text}
            priority={todoItem.priority}
            dueDate={todoItem.dueDate}/>
        );
        return (
            <ul>{listItems}</ul>
        );
    }


};

