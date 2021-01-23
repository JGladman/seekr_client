import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchApplications, selectAllApplications } from '../ApplicationsSlice';

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
    <div>
      <button onClick={sortedJobClick}>Job</button>
      <button onClick={sortedCategoryClick}>Category</button>
      <button onClick={sortedCompanyClick}>Company</button>
      <button onClick={sortedPriorityClick}>Priority</button>
      <button onClick={sortedStepClick}>Step</button>
      <button onClick={fetchUnsorted}>Unsorted</button>
      {content}
    </div>
  );
};
