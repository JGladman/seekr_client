import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createApplication } from '../ApplicationsSlice';

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
      );
      setCompanyName('');
      setJobTitle('');
      setCategory('');
      setPriority('');
      setReqStatus('');
    }
  };

  return (
    <section>
      <h2>Add a New Application</h2>
      <form>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Aperture Science"
          value={companyName}
          onChange={onCompanyChanged}
        />
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          placeholder="Front-End Developer"
          value={jobTitle}
          onChange={onJobChanged}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Software Engineering"
          value={category}
          onChange={onCategoryChanged}
        />
        <label htmlFor="priority">Priority:</label>
        <input
          type="number"
          id="priority"
          name="priority"
          value={priority}
          onChange={onPriorityChanged}
        />
        <button
          type="button"
          onClick={onSaveApplicationClicked}
          disabled={!canSave}
        >
          Save Application
        </button>
      </form>
    </section>
  );
};
