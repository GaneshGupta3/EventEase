import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import styles from "./UserList.module.css";
import { serviceProviderActions } from "../store/serviceProvider";

const UserList = () => {
    const navigate = useNavigate();
    const { currentUserList,userSelected } = useSelector((store) => store.serviceProvider);
    const dispatch = useDispatch();
    const [currentUserSelected , setCurrentUserSelected] = useState(null);

    // useEffect(() => {
    //     if (!currentUserList.length) {
    //         navigate("/serviceProvider/homePage");
    //     }
    // }, [navigate, currentUserList]);

    const handleSeeDetailsClick = (e, user) => {
        e.preventDefault();
        dispatch(serviceProviderActions.selectUser({ user })); // Select the user
        navigate("/serviceProvider/userProfile"); // Navigate to profile
        setCurrentUserSelected(user);
    };

    return (
        <div className={styles.userList}>
            {currentUserList.map((user) => (
                
                <UserCard
                    user={user}
                    key={user.email}
                    handleSeeDetailsClick={handleSeeDetailsClick}
                />
                
                
            ))}
        </div>
    );
};

export default UserList;
