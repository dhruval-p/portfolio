import React from "react";
import './Skills.css'

const SkillCard=({name,logo})=>{
    return (
        <div className="skill">
            <img src={logo} alt="skill"/>
            <p>{name}</p>
        </div>
    )

}

export default SkillCard
