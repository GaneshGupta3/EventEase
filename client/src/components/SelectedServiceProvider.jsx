import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/user";

const SelectedServiceProvider = () => {
    const { serviceProviderSelected } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!serviceProviderSelected) {
        return <></>;
    } else {
        const handleBack = async () => {
            dispatch(userActions.unSelectServiceProvider());
            navigate("/user/homePage");
        };
        return (
            <>
                <h1>{serviceProviderSelected.username}</h1>
                <h2>{serviceProviderSelected.email}</h2>
                <button onClick={handleBack}>Back</button>
            </>
        );
    }
};

export default SelectedServiceProvider;
