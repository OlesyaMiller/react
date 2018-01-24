import React from 'react';
import { Link } from 'react-router-dom';


const Like = (props) => {
  return (
    <div>
    {props.like}
    <br/>
    <Link to="" onClick={props.handleOnLike}>Like</Link>
    <Link to="" onClick={props.handleOnDislike}>Dislike</Link>
    </div>
  )
}


export default Like
