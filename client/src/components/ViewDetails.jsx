import React from 'react'
import { useSelector } from 'react-redux'
import ViewDetailsHall from './ViewDetailsHall';
import ViewDetailsBalloonDecorators from './ViewDetailsBalloonDecorators';
import ViewDetailsCatering from './ViewDetailsCatering';
<<<<<<< HEAD
import ViewDetailsPhotoGrapher from './ViewDetailsPhotoGrapher';
=======
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403

const ViewDetails = () => {
  const {currServiceProvider} = useSelector(store => store.user);

  return (
  <>
    {currServiceProvider.serviceName == "hall" && <ViewDetailsHall />}
    {currServiceProvider.serviceName == "balloon_decorator" && <ViewDetailsBalloonDecorators />}
    {currServiceProvider.serviceName == "catering" && <ViewDetailsCatering />}
<<<<<<< HEAD
    {currServiceProvider.serviceName == "photographer" && <ViewDetailsPhotoGrapher />}
=======
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
  </>
  )
}

export default ViewDetails