import React from "react";
import { HallCard } from "./HallCard";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HallList.module.css";
import { userActions } from "../store/user";

const HallList = () => {
    const { currentServiceProviderList, currServiceProvider, seeList } =
        useSelector((store) => store.user);

    const dispatch = useDispatch();

    const handleSeeList = ()=>{
      dispatch(userActions.toggleSeeList())
    }
    return (
        <>
            <div className="active-2" onClick={handleSeeList}>See Hall list</div>
            <div className={styles.hallCardContainer}>
                {currentServiceProviderList.map((serviceProvider, index) => {
                    if (index < 3 || seeList) {
                        return (
                            <HallCard
                                key={serviceProvider._id}
                                serviceProvider={serviceProvider}
                            />
                        );
                    }
                })}
            </div>
        </>
    );
};

export default HallList;
