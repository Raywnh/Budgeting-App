import React from 'react'
import Item from './Item'

export default function List(props) {
  return (
    props.items.map(item => {return <Item key={item.id} item={item} deleteComponent={props.deleteComponent} 
                                            editComponent={props.editComponent}/>})
  )
}
