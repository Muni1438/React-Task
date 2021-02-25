import React, { useState } from "react";
function useOwnState(initialState={}) {
  const [state, setstate] = useState(initialState);
  const Errors= (error) => {
    throw new Error(error);
  };
 const Notification=(data)=>{
     return alert(data)
 }
return [state,setstate,Errors,Notification]
}

export default useOwnState;
