import React from 'react'
import {Button} from '../index'
const GamingLabraryCard = (props) => {
  return (
    <>
    <div className="gaming-labrary-card">
        <ul>
            <li>
                <img src={props.img} alt="" />
            </li>
            <li>
                <h4>{props.title}</h4><span>{props.company}</span>
            </li>
            <li>
                <h4>DateAdded</h4><span>{props.hours_played}</span>
            </li>
            <li>
                <h4>Currently</h4><span>{props.currently}</span>
            </li>
            <Button className=" bg-transparent border border-gray-600 hover:bg-slate-50 text-gray-600 
            " value="Download" />
        </ul>
    </div>
    </>
    )
}

export default GamingLabraryCard