import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createApplication,
  fetchApplications,
} from '../Applications/ApplicationsSlice';

export const CreateApplicationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState(5);
  const [reqStatus, setReqStatus] = useState('idle');

  const dispatch = useDispatch();

  const onCompanyChanged = (e) => setCompanyName(e.target.value);
  const onJobChanged = (e) => setJobTitle(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);
  const onPriorityChanged = (e) => setPriority(e.target.value);

  const canSave =
    Boolean(companyName) &&
    Boolean(jobTitle) &&
    Boolean(category) &&
    Boolean(priority) &&
    reqStatus === 'idle';

  const onSaveApplicationClicked = async () => {
    if (canSave) {
      setReqStatus('pending');
      await dispatch(
        createApplication({ companyName, jobTitle, category, priority }),
      ).then();
      setCompanyName('');
      setJobTitle('');
      setCategory('');
      setPriority('');
      setReqStatus('idle');
      dispatch(fetchApplications());
    }
  };

  return (
    <div>
      <section>
        <h2 className="border-b-2 border-white py-1 px-1 text-center bg-gray-600 font-sans text-xl subpixel-antialiased font-bold text-gray-200">
          Add a New Application
        </h2>
        <form className="flex flex-col justify-evenly">
          <label
            className="py-1 px-1 text-left bg-gray-600 font-sans text-xl subpixel-antialiased font-bold text-gray-200"
            htmlFor="companyName"
          >
            Company Name:
          </label>
          <input
            className="border-8 border-gray-600 py-3 px-4 text-sm text-white bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900"
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Aperture Science"
            value={companyName}
            onChange={onCompanyChanged}
          />
          <label
            className=" py-1 px-1 text-left bg-gray-600 font-sans text-xl subpixel-antialiased font-bold text-gray-200"
            htmlFor="jobTitle"
          >
            Job Title:
          </label>
          <input
            className="border-8 border-gray-600 py-3 px-4 text-sm text-white bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900"
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder="Front-End Developer"
            value={jobTitle}
            onChange={onJobChanged}
          />
          <label
            className="py-1 px-1 text-left bg-gray-600 font-sans text-xl subpixel-antialiased font-bold text-gray-200"
            htmlFor="category"
          >
            Category:
          </label>
          <input
            className="border-8 border-gray-600 py-3 px-4 text-sm text-white bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900"
            type="text"
            id="category"
            name="category"
            placeholder="Software Engineering"
            value={category}
            onChange={onCategoryChanged}
          />
          <label
            className=" py-1 px-1 text-left bg-gray-600 font-sans text-xl subpixel-antialiased font-bold text-gray-200"
            htmlFor="priority"
          >
            Priority:
          </label>
          <input
            className="border-8 border-gray-600 py-3 px-4 text-sm text-white bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900"
            type="number"
            id="priority"
            name="priority"
            value={priority}
            onChange={onPriorityChanged}
          />
          <button
            className=" py-1 px-1 text-center bg-green-600 hover:bg-red-400 font-sans text-xl subpixel-antialiased font-bold text-white"
            type="button"
            onClick={onSaveApplicationClicked}
            disabled={!canSave}
          >
            Save Application
          </button>
        </form>
      </section>
    </div>
  );
};
