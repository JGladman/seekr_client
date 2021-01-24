import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deletePost, selectJobs
} from './jobsSlice';
import {GrClose} from "react-icons/gr"
import Detail from "../../components/detail"

export function Jobs() {
    const [priority, setPriorty] = useState("1");
    const [detail, setDetail] = useState("");

    const jobs = useSelector(selectJobs);
    const dispatch = useDispatch();
    console.log(jobs);

    const rectangleClass = "w-96 h-96 m-10 "
    const center = " mx-auto w-10/12 mt-14 "
    const bgColorWithApplicationStep = {
        "0": "h-5 w-1/4 bg-yellow-500 ",
        "1": "h-5 w-1/2 bg-yellow-200 ",
        "2": "h-5 w-3/4 bg-green-200 ",
        "3": "h-5 w-full bg-green-500 ",
        "4": "h-5 w-full bg-red-500 "
    }
    const applicationStepNumToStr = [
        "Applied",
        "Interview Scheduled",
        "Interview Finished",
        "Accepted",
        "Rejected"
    ]

    


    const jobsObjToJSX = jobs.map(job => {
        // setPriorty(job.priority);

        const details2 = <Detail 
            data-is_detail = {true} 
            job = {job} 
            setPriority = {() => (e) => setPriorty(e.target.value)} 
            priority = {priority}        
            applicationStepNumToStr = {applicationStepNumToStr}/>

        const details = <div data-is_detail = {true} style = {{width: "95%", height: "900px"}} 
            className = "z-50 bg-gray-800 m-auto text-white p-28 sticky top-3 left-3 right-3 bottom-5">

            <div className = "flex justify-between px-10">
                <div className = "text-center">
                    <div className = "text-5xl">{job.companyName}</div>
                    <div className = "mt-5 text-2xl">{job.jobTitle}</div>
                </div>
                <ul className = "list-none text-lg">
                    <li className = "items-center">
                        Priority
                        <input 
                            onChange = {(e) => setPriorty(e.target.value)} 
                            className = "mx-3" 
                            type = "range" 
                            min = "1" 
                            max = "5" 
                            value = {priority}/>
                        {priority}
                    </li>
                    <li>Category: {job.category}</li>
                    <li>Date Applied: {job.dateApplied}</li>
                    <li>Intervew Date: {job.interviewDate}</li>
                </ul>
            </div>
            <div className = "my-16 text-center text-3xl">Application Step: {applicationStepNumToStr[job.applicationStep]}</div>
            <textarea 
                style = {{width: "80%", color: 'black'}} 
                className = "ml-24 mt-16 h-80 bg-white"
                placeholder = "write some Memo"
                onChange = {(e) => console.log(e.target.value)}
            />
        </div>
        
        const spreadOutDetails = (e) => {
            // console.dir(e.target);
            if (!e.target.dataset?.deletepostcalled){
                setDetail(details2);
            }     
        }

      return (
        <div onClick = {spreadOutDetails} key = {job._id} className = {rectangleClass + "bg-gray-800"}>
            <div className = "float-right">
                <GrClose data-deletepostcalled = {true} onClick = {() => dispatch(deletePost({id: job._id}))} 
                    className = "m-3 bg-gray-100"/>
            </div>
            <div className = {"h-48 bg-white" + center +  "pt-4"}>
                <div className = "text-center p-4 text-3xl">
                    {job.companyName}
                </div>
                <div className = "text-center p-2 text-xl">
                    {job.jobTitle}
                </div>
                <div className = "text-center p-2 text-base">
                    {job.category}
                </div>
            </div>
            <div className = "mt-28 mx-3">
                <div className = {bgColorWithApplicationStep[job.applicationStep] + "w-full bg-opacity-30"}>
                    <div className = {bgColorWithApplicationStep[job.applicationStep]}></div>
                </div>
            </div>
        
        </div>         
      )
  })


  return (
    <div>
        <div className = "h-24 border-b-2">
            Header
        </div>
        <div onClick = {(e) => {
            console.log(e.target);
            if (detail !== "" && !e.target.dataset?.is_detail){
                setDetail("");
            }
        }} className = "mx-16 my-12 ">
            <div className = "flex flex-wrap justify-evenly">
                {jobsObjToJSX}
            </div>
            {detail}
        </div>
    </div>
  );
}
