import React from 'react';
import Styles from './image.module.css'

const ImageBox = (props) =>{
    return (
        <div className={Styles.recipe}>
            <p>{props.calories}</p>
            <img src={props.picurl} alt="" className={Styles.image}/>
        </div>
    )
}

export default ImageBox