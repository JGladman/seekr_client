import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deletePost, selectJobs
} from './jobsSlice';
import {GrClose} from "react-icons/gr"


export function Jobs() {
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

  const jobsObjToJSX = jobs.map(job => {
      return (
        <div key = {job._id} className = {rectangleClass + "bg-gray-800"}>
                    
            <div className = "float-right">
                <GrClose onClick = {() => dispatch(deletePost({id: job._id}))} className = "m-3 bg-gray-100"/>
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
        <div className = "mx-16 my-12">
            <div className = "flex flex-wrap justify-evenly">
                {jobsObjToJSX}
                {/* <div className = {rectangleClass + "bg-gray-800"}>

                    <div className = "float-right">
                        <GrClose className = "m-3 bg-gray-100"/>
                    </div>
                    <div className = {"h-48 bg-white" + center +  "pt-4"}>
                        <div className = "text-center p-4 text-3xl">
                            Company
                        </div>
                        <div className = "text-center p-2 text-xl">
                            Job Title
                        </div>
                        <div className = "text-center p-2 text-base">
                            Category
                        </div>
                    </div>
                    <div className = "mt-28 mx-3">
                        <div className = {bgColorWithApplicationStep[0] + "w-full bg-opacity-30"}>
                            <div className = {bgColorWithApplicationStep[0]}></div>
                        </div>
                    </div>
                    
                </div>                */}
            </div>
        </div>
    </div>
  );
}
