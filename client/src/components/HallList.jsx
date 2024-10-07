import React from 'react'
import { HallCard } from './HallCard';
import { useSelector } from 'react-redux';
import styles from "./HallList.module.css";

const HallList = () => {
  const {currentServiceProviderList,currServiceProvider} = useSelector(store => store.user);
  return (
    <div className={styles.hallCardContainer}>
      {currentServiceProviderList.map((serviceProvider)=>{return <HallCard key={serviceProvider._id} serviceProvider = {serviceProvider}/>})}
    </div>
  )
}

export default HallList;