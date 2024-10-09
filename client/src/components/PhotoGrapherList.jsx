import React from 'react'
import { useSelector } from 'react-redux';
import styles from "./HallList.module.css";
import PhotoGrapherCard from './PhotoGrapherCard';

const PhotoGrapherList = () => {
  const {currentServiceProviderList} = useSelector(store => store.user);
  return (
    <div className={styles.hallCardContainer}>
      {currentServiceProviderList.map((serviceProvider)=>{return <PhotoGrapherCard key={serviceProvider._id} serviceProvider = {serviceProvider}/>})}
    </div>
  )
}

export default PhotoGrapherList;