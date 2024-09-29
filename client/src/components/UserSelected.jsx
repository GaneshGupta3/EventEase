import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { serviceProviderActions } from "../store/serviceProvider";

const UserSelected = () => {
    const userSelected = useSelector((store) => store.serviceProvider.userSelected);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!userSelected) {
        return <div>No user selected</div>;
    }
    const handleBack = async()=>{
        dispatch(serviceProviderActions.unSelectUser());
        navigate("/serviceProvider/homePage");
    }

    return (
        <div>
            <h1>{userSelected.username}</h1>
            <p>{userSelected.email}</p>
            <p>{userSelected.otherDetails}</p> {/* Replace with actual user details */}
            <Link onClick={handleBack}>Back</Link>
        </div>
    );
};

export default UserSelected;
