import React from 'react';
import "./ToDoApp1.css"

function ToDoApp1({items,deleteItem,updateItem}){
    const listItems = items.map(item =>
   {
       return <div key={item.key}>
     <p className="data_p" >
         <input className="data_input" type="text" id={item.key} value={item.text} onChange={(e)=>{
             updateItem(e.target.value,item.key)}}/>
        <span>
       
        <button className="data_btn" onClick={() => {
            deleteItem(item.key)
        }}  >delete</button>
        </span>
     </p>
     
    </div>})
    return <div>
        {listItems}
    </div>;
  }

  export default ToDoApp1;