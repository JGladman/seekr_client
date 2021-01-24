import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import '../../stylesheets/detail.css';
import {AiFillLeftCircle} from "react-icons/ai";
import {AiFillRightCircle} from "react-icons/ai";
import {AiFillStop} from "react-icons/ai";


const Detail = (props) => {
  const [edittingActivated, setEdittingActivated] = useState(false);
  const [coloredStars, setColoredStars] = useState([
    props.application.priority >= 1,
    props.application.priority >= 2,
    props.application.priority >= 3,
    props.application.priority >= 4,
    props.application.priority >= 5,
  ]);

  const [applicationStep, setApplicationStep] = useState(props.application.applicationStep);

  const colorStars = (selectedIndex) => {
    //sth weird happens here. It seems counter intuitive but works correctly. Prob because of the timing of the update
    if (!edittingActivated) {
      return;
    }
    const newColoredStars = [false, false, false, false, false];
    for (let j = 0; j <= selectedIndex; j++) {
      newColoredStars[j] = true;
    }
    //
    //props.application.priority = selectedIndex + 1;
    setColoredStars(newColoredStars);
  };

  const [categoryComponent, setCategoryComponent] = useState(
    props.application.category,
  );
  const [dateAppliedComponent, setDateAppliedComponent] = useState(
    props.application.dateApplied,
  );
  const [interviewDateComponent, setInterviewDateComponent] = useState(
    props.application.interviewDate,
  );

  const toggleInfoEdit = () => {
    console.log('edittingActivated: ', edittingActivated);
    if (!edittingActivated) {
      const categroyEditMode = (
        <input
          className="text-gray-600"
          type="text"
          placeholder="Category"
          onChange={(e) => (props.application.category = e.target.value)}
        />
      );

      const dateAppliedEditMode = (
        <input
          className="text-gray-600"
          type="date"
          onChange={(e) => (props.application.dateApplied = e.target.value)}
        />
      );

      const InterviewDateEditMode = (
        <input
          className="text-gray-600"
          type="date"
          onChange={(e) => (props.application.interviewDate = e.target.value)}
        />
      );

      setCategoryComponent(categroyEditMode);
      setDateAppliedComponent(dateAppliedEditMode);
      setInterviewDateComponent(InterviewDateEditMode);
    } else {
      setCategoryComponent(props.application.category);
      setDateAppliedComponent(props.application.dateApplied);
      setInterviewDateComponent(props.application.interviewDate);
    }
  };



  return (
    <div
      style={{ width: '85%', top: '0px' }}
      className="z-50 bg-gray-800 m-auto text-white  sticky left-3 right-3 bottom-3"
    >
      <div className="h-28 w-full flex justify-end px-14 py-10">
        <FiEdit
          onClick={() => {
            toggleInfoEdit();
            setEdittingActivated(!edittingActivated);
          }}
          style={{
            display: 'inline',
            width: '40px',
            height: 'auto',
            cursor: 'pointer',
          }}
          className={edittingActivated ? 'text-purple-400' : ''}
        />
      </div>
      <div className="px-28 pb-20">
        <div className="flex justify-between px-10">
          <div className="text-center">
            <div className="text-5xl">{props.application.companyName}</div>
            <div className="mt-5 text-2xl">{props.application.jobTitle}</div>
          </div>
          <ul
            id="PriorityCategoryDateAppliedInterviewDate"
            className="list-none text-lg"
          >
            <li className="items-center flex flex-row">
              Priority :
              <ul
                id="priorityRating"
                className="inline flex flex-row list-none ml-2"
              >
                <li
                  onClick={() => colorStars(0)}
                  className={coloredStars[0] ? 'text-yellow-300' : ''}
                >
                  <AiFillStar />
                </li>
                <li
                  onClick={() => colorStars(1)}
                  className={coloredStars[1] ? 'text-yellow-300' : ''}
                >
                  <AiFillStar />
                </li>
                <li
                  onClick={() => colorStars(2)}
                  className={coloredStars[2] ? 'text-yellow-300' : ''}
                >
                  <AiFillStar />
                </li>
                <li
                  onClick={() => colorStars(3)}
                  className={coloredStars[3] ? 'text-yellow-300' : ''}
                >
                  <AiFillStar />
                </li>
                <li
                  onClick={() => colorStars(4)}
                  className={coloredStars[4] ? 'text-yellow-300' : ''}
                >
                  <AiFillStar />
                </li>
              </ul>
              {/* <input 
                            onChange = {props.setPriority} 
                            className = "mx-3" 
                            type = "range" 
                            min = "1" 
                            max = "5" 
                            value = {props.priority}/>
                        {props.priority} */}
            </li>
            <li>Category: {categoryComponent}</li>
            <li>Date Applied: {dateAppliedComponent}</li>
            <li>Intervew Date: {interviewDateComponent}</li>
          </ul>
        </div>
        <div className=" text-center text-3xl">
          Application Step:{' '}
          {props.applicationStepNumToStr[applicationStep]}
          <div className="mt-28 mx-3">
            <div
              className={
                props.bgColorWithApplicationStep[applicationStep] +
                'w-full bg-opacity-30'
              }>
              <div
                className={props.bgColorWithApplicationStep[applicationStep]}
              ></div>
            </div>
          </div>
          <div>
             <AiFillLeftCircle onClick = {() => {
               if (applicationStep > 0 && applicationStep <=3) {
                 setApplicationStep(applicationStep - 1);
               }
             }} className = "inline cursor-pointer mx-1"/> 

             <AiFillRightCircle onClick = {() => {
               if (applicationStep < 3 && applicationStep >= 0) {
                 setApplicationStep(1 + applicationStep);
               }
             }} className = "inline cursor-pointer mx-1"/> 
            <br />
             <AiFillStop 
              onClick = {() => applicationStep === 4 ? setApplicationStep(0): setApplicationStep(4)} 
              className = "inline cursor-pointer mx-1 text-red-500" />
          </div>
        </div>
        <textarea
          style={{ width: '80%', color: 'black' }}
          className={
            edittingActivated
              ? 'ml-24 mt-16 h-80 bg-white'
              : 'ml-24 mt-16 h-80 bg-gray-400'
          }
          onChange={props.onChange}
          disabled={!edittingActivated}
        >
          {props.application.notes}
        </textarea>
      </div>
    </div>
  );
};

export default Detail;
