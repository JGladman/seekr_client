import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContainersSlice from '../CotainersSlice';

//const dispatch = useDispatch();
  // export const sortMenuClick = () => {
  //   dispatch(ContainersSlice('Sort'));
  // }
export const applicationMenuClick = () => {
    console.log("hey");
    useDispatch(ContainersSlice('Application'));
  }
  // export const closeMenuClick = () => {
  //   dispatch(ContainersSlice(null));
  // } 


  //e