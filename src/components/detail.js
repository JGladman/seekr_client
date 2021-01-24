import React from 'react';

const detail = (props) => {
    return <div style = {{width: "95%", height: "900px"}} 
        className = "z-50 bg-gray-800 m-auto text-white p-28 sticky top-3 left-3 right-3 bottom-5">

        <div className = "flex justify-between px-10">
            <div className = "text-center">
                <div className = "text-5xl">{props.job.companyName}</div>
                <div className = "mt-5 text-2xl">{props.job.jobTitle}</div>
            </div>
            <ul className = "list-none text-lg">
                <li className = "items-center">
                    Priority
                    <input 
                        onChange = {props.setPriority} 
                        className = "mx-3" 
                        type = "range" 
                        min = "1" 
                        max = "5" 
                        value = {props.priority}/>
                    {props.priority}
                </li>
                <li>Category: {props.job.category}</li>
                <li>Date Applied: {props.job.dateApplied}</li>
                <li>Intervew Date: {props.job.interviewDate}</li>
            </ul>
        </div>
        <div className = "my-16 text-center text-3xl">Application Step: {props.applicationStepNumToStr[props.job.applicationStep]}</div>
        <textarea 
            style = {{width: "80%", color: 'black'}} 
            className = "ml-24 mt-16 h-80 bg-white"
            placeholder = "write some Memo"
            onChange = {props.onChange}
        />
    </div>
}

export default detail;