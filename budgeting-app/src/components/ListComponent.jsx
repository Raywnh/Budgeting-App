import React, { useState, useRef } from 'react';
import Item from './Item';

export default function ListComponent(props) {

  return (
    <div className="list-container">
      {props.items.map(items =>{return <Item key ={props.items.name} items={props.items}/>})}
    </div>
  )


}
