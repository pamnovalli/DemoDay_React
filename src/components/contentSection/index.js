import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ContentSection = (props) => (
    <div id={props.id} className="ContentSection">
        <div className="header">
            <h1>{props.title}</h1>
        </div>
        <div className="content">
            {props.content}
        </div>
    </div>
)

export default ContentSection