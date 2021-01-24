import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import Detail from './detail';
import { selectAllApplications } from './ApplicationsSlice';

export function Applications() {
  const [detail, setDetail] = useState('');
  const [detailDisplayed, setDetailDisplayed] = useState('');


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
    const detail = (
      <Detail
        data-is_detail={true}
        application={app}
        applicationStepNumToStr={applicationStepNumToStr}
      />
    );

    const expandCard = (e) => {
      if (!e.target.dataset?.deletepostcalled) {
        setDetail(detail);
      }
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
            //TODO: Delete applications
            className="m-3 bg-gray-100"
          />
        </div>
        <div className={'h-48 bg-white' + center + 'pt-4'}>
          <div className="text-center p-4 text-3xl">{app.companyName}</div>
          <div className="text-center p-2 text-xl">{app.jobTitle}</div>
          <div className="text-center p-2 text-base">{app.category}</div>
        </div>
        <div className="mt-28 mx-3">
          <div
            className={
              bgColorWithApplicationStep[app.applicationStep] +
              'w-full bg-opacity-30'
            }
          >
            <div
              className={bgColorWithApplicationStep[app.applicationStep]}
            ></div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="h-24 border-b-2">Header</div>
      <div
        onClick={(e) => {
          console.log(e.target);
          if (detail !== '' && !e.target.dataset?.is_detail) {
            setDetail('');
          }
        }}
        className="mx-16 my-12 "
      >
        <div className="flex flex-wrap justify-evenly">
          {applicationsObjToJSX}
        </div>
        {detail}
      </div>
    </div>
  );
}
