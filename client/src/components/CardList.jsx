import React from 'react'
import { useSelector } from 'react-redux'
import HallList from './HallList';
import CateringList from './CateringList';
import BalloonDecoratorList from './BalloonDecoratorList';
import PhotoGrapherList from './PhotoGrapherList';
import "./styles.css";

const CardList = () => {

  const {currServiceProviderListType,currentServiceProviderList} = useSelector(store => store.user);

  return (
    <>
      {currServiceProviderListType == "hall" && <HallList />}
      {currServiceProviderListType == "catering" && <CateringList />}
      {currServiceProviderListType == "balloon_decorator" && <BalloonDecoratorList />}
      {currServiceProviderListType == "photographer" && <PhotoGrapherList />}
    </>
  )
}

export default CardList