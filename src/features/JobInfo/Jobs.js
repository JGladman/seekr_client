import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deletePost, selectJobs
} from './jobsSlice';
import {GrClose} from "react-icons/gr"
import Detail from "../../components/detail"
import ClickAwayListener from "react-click-away-listener";
import {AiOutlineSortAscending} from "react-icons/ai";
import {IoMdAddCircle} from "react-icons/io"

export function Jobs() {
    const [detail, setDetail] = useState(<div></div>);
    const [showingDetails, setShowingDetails] = useState(false);

    const  jobs = useSelector(selectJobs);
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

        const details = <Detail 
            data-is_detail = {true} 
            job = {job} 
            applicationStepNumToStr = {applicationStepNumToStr}
            />

        const spreadOutDetails = (e) => {
            // console.dir(e.target);
            if (!e.target.dataset?.deletepostcalled){
                setShowingDetails(true);
                setDetail(details);
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

  let turnOffDetail = () => {
      if (showingDetails) {
          showingDetails = !showingDetails;
          setDetail(<div></div>)
      } 
  }



  return (
    <div>
        <div className = "h-24 border-b-2">
            Header
        </div>
        <div className = "mx-16 my-12 ">
        <ClickAwayListener 
                onClickAway = {
                    () => {
                        if (showingDetails)
                            setShowingDetails(false)}
                }>
            <div className = "flex flex-wrap justify-evenly">
                {jobsObjToJSX}
            </div>
           
                {showingDetails? detail: <div></div>}
            </ClickAwayListener>
        </div>
        <div className = "sticky" style = {{top: "100px", bottom: "0px", right: "10px"}} >
            <AiOutlineSortAscending className = "sticky" style = {{top: "100px", bottom: "0px",left: 
            "2px", right: "10px"}} />
            <IoMdAddCircle />
        </div>
    </div>
  );
}
