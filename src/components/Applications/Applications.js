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

export function Applications() {
  const [detail, setDetail] = useState('');
  const [detailDisplayed, setDetailDisplayed] = useState(false);
  const [criteria, setCriteria] = useState('');

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
    const detail = (
      <Detail
        data-is_detail={true}
        application={app}
        applicationStepNumToStr={applicationStepNumToStr}
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

  if (detailDisplayed) {
    return (
      <div>
        <div className="h-24 border-b-2">Header</div>
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
        <div className="h-24 border-b-2">Header</div>
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
      </div>
    );
  }
}
