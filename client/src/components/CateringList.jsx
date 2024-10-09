import React from 'react'
import { CateringCard } from './CateringCard';
import { useSelector } from 'react-redux';
import styles from "./HallList.module.css";

const CateringList = () => {
  const {currentServiceProviderList} = useSelector(store => store.user);
  return (
    <div className={styles.hallCardContainer}>
      {currentServiceProviderList.map((serviceProvider)=>{return <CateringCard key={serviceProvider._id} serviceProvider = {serviceProvider}/>})}
    </div>
  )
}

export default CateringList