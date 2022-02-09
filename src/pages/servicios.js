import React from 'react';
import NavBar from '../components/NavBar';
import ListServiceItems from '../containers/ListServiceItems';
import ServiceItem from '../components/ServiceItem';

const servicios = () => {
  return (
    <>
      <NavBar />
      <ListServiceItems />

    </>
  );
};

export default servicios;
