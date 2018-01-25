import React from 'react';


const Like = (props) => {
  return (
    <div>
    {props.like}
    <br/>
    <button onClick={props.handleOnLike}>Like</button>
    <button onClick={props.handleOnDislike}>Dislike</button>
    </div>
  )
}


export default Like
