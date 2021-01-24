import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import Detail from './detail';
import {
  deleteApplication,
  fetchApplications,
  selectAllApplications,
} from './ApplicationsSlice';
import ClickAwayListener from 'react-click-away-listener';
import {IoMdAddCircle} from "react-icons/io";
import {AiOutlineSortAscending} from "react-icons/ai";
import { AiFillStar } from 'react-icons/ai';
import '../../stylesheets/detail.css';



export function Applications() {
  const [detail, setDetail] = useState('');
  const [detailDisplayed, setDetailDisplayed] = useState(false);
  const [criteria, setCriteria] = useState('');
  const [sortSideBarDisplayed, setSortSideBarDisplayed] = useState(false);
  const [applicationSideBarDisplayed, setApplicationSideBarDisplayed] = useState(false);
  const [coloredStars, setColoredStars] = useState([false, false,false, false, false]);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

  const applications = useSelector(selectAllApplications);

  const rectangleClass = 'w-96 h-96 m-10 ';
  const center = ' mx-auto w-10/12 mt-14 ';
  const bgColorWithApplicationStep = {
    0: 'h-5 w-1/4 bg-yellow-500 ',
    1: 'h-5 w-1/2 bg-yellow-200 ',
    2: 'h-5 w-3/4 bg-green-200 ',
    3: 'h-5 w-full bg-green-500 ',
    4: 'h-5 w-full bg-red-500 ',
  };
  const applicationStepNumToStr = [
    'Applied',
    'Interview Scheduled',
    'Interview Finished',
    'Accepted',
    'Rejected',
  ];

  const applicationsObjToJSX = applications.map((app) => {
    const colorStars = (ratings) => {
      //sth weird happens here. It seems counter intuitive but works correctly. Prob because of the timing of the update
      const newColoredStars = [false, false, false, false, false];
      for (let j = 0; j <= ratings; j++) {
        newColoredStars[j] = true;
      }
      //
      //props.application.priority = selectedIndex + 1;
      setColoredStars(newColoredStars);
    };

    const appColoredStars = [false,false,false,false,false];
    for (let i = 0; i <= app.priority-1; i++){
      appColoredStars[i] = true;
    }

    // colorStars(3)
    const starJSX = (  
      <ul
      id="priorityRating"
      className="inline flex flex-row list-none ml-2 justify-center"
      style = {{margin: "0 auto"}}
    >
      <li
        onClick={() => colorStars(0)}
        className={appColoredStars[0] ? 'text-yellow-300' : ''}
      >
        <AiFillStar />
      </li>
      <li
        onClick={() => colorStars(1)}
        className={appColoredStars[1] ? 'text-yellow-300' : ''}
      >
        <AiFillStar />
      </li>
      <li
        onClick={() => colorStars(2)}
        className={appColoredStars[2] ? 'text-yellow-300' : ''}
      >
        <AiFillStar />
      </li>
      <li
        onClick={() => colorStars(3)}
        className={appColoredStars[3] ? 'text-yellow-300' : ''}
      >
        <AiFillStar />
      </li>
      <li
        onClick={() => colorStars(4)}
        className={appColoredStars[4] ? 'text-yellow-300' : ''}
      >
        <AiFillStar />
      </li>
    </ul>
    );
   
    const detail = (
      <Detail
        data-is_detail={true}
        application={app}
        applicationStepNumToStr={applicationStepNumToStr}
        bgColorWithApplicationStep = {bgColorWithApplicationStep}
      />
    );

    const expandCard = (e) => {
      if (!e.target.dataset?.deletepostcalled) {
        setDetailDisplayed(true);
        setDetail(detail);
      }
    };

    const onClickDelete = async () => {
      await dispatch(deleteApplication(app._id)).then();
      dispatch(fetchApplications(criteria));
    };

    return (
      <div
        onClick={expandCard}
        key={app._id}
        className={rectangleClass + 'bg-gray-800'}
      >
        <div className="float-right">
          <GrClose
            data-deletepostcalled={true}
            onClick={onClickDelete}
            className="m-3 bg-gray-100"
          />
        </div>
        <div className={'h-48 bg-white' + center + 'pt-4'}>
          <div className="text-center p-4 text-3xl">{app.companyName}</div>
          <div className="text-center p-2 text-xl">{app.jobTitle}</div>
          <div className="text-center p-2 text-base">{app.category}</div>
        </div>
        <div className="mt-12 mx-3 text-white">
          {starJSX}
        </div>
        <div className="mt-9 mx-3">
          <div
            className={
              bgColorWithApplicationStep[app.applicationStep] +
              'w-full bg-opacity-30'
            }>
            <div
              className={bgColorWithApplicationStep[app.applicationStep]}
            ></div>
          </div>
        </div>
      </div>
    );
  });

  const sortBar = (
    <div style = {{width: "300px", height: "500px"}} className = "border-4 border-gray-400 bg-green-300">
      <h2 className = "p-3 text-3xl">Sort By</h2>
      <ul className = "list-none cursor-pointer">
        <li>Alphabetical</li>
        <li>Category</li>
        <li>Progress</li>
      </ul>
    </div>
  )

  const applicationSidebar = (
    <div style = {{width: "300px", height: "700"}} className = "border-4 border-gray-400 bg-green-300">
      <h2 className = "p-3 text-3xl">Application</h2>
      <ul className = "list-none cursor-pointer">
        <li>Company Name <br/><input type = "text"/> </li>
        <li>Job Title<br/><input type = "text"/> </li>
        <li>Category <br/><input type = "text"/> </li>
        <li>Application Step<br/>
          <select name = "Application Steps">
            <option value = "val1">val1</option>
            <option value = "val2">val2</option>
            <option value = "val3">val3</option>
          </select> 
        </li>
        <li>Status <br/><input type = "text"/> </li>
        <li>Date Applied <br/><input type = "text"/> </li>
        <li>Notes <br/><input type = "text"/> </li>        
      </ul>
    </div>
  )
  

  if (detailDisplayed) {
    return (
      <div>
        {/* <div className="h-24 border-b-2">Header</div> */}
        <div className="mx-16 my-12 ">
          <ClickAwayListener
            onClickAway={() => {
              if (detailDisplayed) {
                setDetailDisplayed(false);
              }
            }}
          >
            {/* <div className="flex flex-wrap justify-evenly">
              {applicationsObjToJSX}
            </div> */}
            {detail}
          </ClickAwayListener>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {/* <div className="h-24 border-b-2">Header</div> */}
        <div className="mx-16 my-12 ">
          <ClickAwayListener
            onClickAway={() => {
              if (detailDisplayed) {
                setDetailDisplayed(false);
              }
            }}
          >
            <div className="flex flex-wrap justify-evenly">
              {applicationsObjToJSX}
            </div>
            {/* {detail} */}
          </ClickAwayListener>
        </div>
        {/* <div> */}
          <AiOutlineSortAscending onClick = {() => setSortSideBarDisplayed(!sortSideBarDisplayed)} className = "sticky h-10 w-10 right-0.5 cursor-pointer"/>
          <IoMdAddCircle onClick = {() => setApplicationSideBarDisplayed(!applicationSideBarDisplayed)} className = "h-10 w-10 cursor-pointer"/>
        {/* </div> */}
        <div>
            {sortSideBarDisplayed? sortBar: ""}
            {applicationSideBarDisplayed? applicationSidebar: ""}
        </div>
      </div>
    );
  }
}
