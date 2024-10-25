import React from 'react'
import { useSelector } from 'react-redux'
import ViewDetailsHall from './ViewDetailsHall';
import ViewDetailsBalloonDecorators from './ViewDetailsBalloonDecorators';
import ViewDetailsCatering from './ViewDetailsCatering';
import ViewDetailsPhotoGrapher from './ViewDetailsPhotoGrapher';

const ViewDetails = () => {
  const {currServiceProvider} = useSelector(store => store.user);

  return (
  <>
    {currServiceProvider.serviceName == "hall" && <ViewDetailsHall />}
    {currServiceProvider.serviceName == "balloon_decorator" && <ViewDetailsBalloonDecorators />}
    {currServiceProvider.serviceName == "catering" && <ViewDetailsCatering />}
    {currServiceProvider.serviceName == "photographer" && <ViewDetailsPhotoGrapher />}
  </>
  )
}

export default ViewDetails