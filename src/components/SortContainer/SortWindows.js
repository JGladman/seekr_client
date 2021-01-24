import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContainersSlice } from '../ContainersSlice';

export const SortWindows = () => {
  const sortMenuClick = () => {
    dispatch(ContainersSlice('Sort'));
  }
  const applicationMenuClick = () => {
    dispatch(ContainersSlice('Application'));
  }
  const closeMenuClick = () => {
    dispatch(ContainersSlice(null));
  } 
}

