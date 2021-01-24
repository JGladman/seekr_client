import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchApplications,
  selectAllApplications,
} from '../Applications/ApplicationsSlice';

export const SortContainer = () => {
  const dispatch = useDispatch();

  const applications = useSelector(selectAllApplications);
  const applicationsStatus = useSelector((state) => state.applications.status);
  const error = useSelector((state) => state.applications.error);

  const sortedJobClick = () => {
    dispatch(fetchApplications('job'));
  };

  const sortedCategoryClick = () => {
    dispatch(fetchApplications('category'));
  };

  const sortedCompanyClick = () => {
    dispatch(fetchApplications('company'));
  };

  const sortedPriorityClick = () => {
    dispatch(fetchApplications('priority'));
  };

  const sortedStepClick = () => {
    dispatch(fetchApplications('step'));
  };

  const fetchUnsorted = () => {
    dispatch(fetchApplications());
  };

  let content;

  if (applicationsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (applicationsStatus === 'succeeded') {
    content = applications.map((app) => <p key={app._id}>{app.companyName}</p>);
  } else if (applicationsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className='flex flex-col  justify-evenly '>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={sortedJobClick}>Job</button>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={sortedCategoryClick}>Category</button>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={sortedCompanyClick}>Company</button>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={sortedPriorityClick}>Priority</button>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={sortedStepClick}>Step</button>
      <button className='border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white' onClick={fetchUnsorted}>Date</button>
    </div>
  );
};
