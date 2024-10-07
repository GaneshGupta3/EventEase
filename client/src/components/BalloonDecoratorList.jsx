import React from 'react'
import { useSelector } from 'react-redux'
import { BalloonDecoratorCard } from './BalloonDecoratorCard';
import styles from "./BalloonDecoratorList.module.css"

const BalloonDecoratorList = () => {
  const {currentServiceProviderList} = useSelector(store => store.user);
  return (
    <div className={styles.balloonDecoratorCardContainer}>
      {currentServiceProviderList.map((serviceProvider)=>{return <BalloonDecoratorCard key={serviceProvider.serviceProvider} serviceProvider = {serviceProvider}/>})}
    </div>
  )
}

export default BalloonDecoratorList;