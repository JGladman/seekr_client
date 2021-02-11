import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchApplications } from '../Applications/ApplicationsSlice';

export const SortContainer = () => {
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col  justify-evenly ">
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={sortedJobClick}
      >
        Job
      </button>
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={sortedCategoryClick}
      >
        Category
      </button>
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={sortedCompanyClick}
      >
        Company
      </button>
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={sortedPriorityClick}
      >
        Priority
      </button>
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={sortedStepClick}
      >
        Step
      </button>
      <button
        className="border py-5 px-4 text-left bg-gray-600 hover:bg-gray-400 font-sans text-5xl subpixel-antialiased font-bold text-white"
        onClick={fetchUnsorted}
      >
        Date
      </button>
    </div>
  );
};
