import { useDispatch } from "react-redux";
import Service from "./Service";
import { userActions } from "../store/user";
import { useNavigate } from "react-router-dom";

const ServiceProvider = ({serviceProvider}) => {
    const servicesOffered = serviceProvider.services;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickServiceProvider = (event)=>{
      event.preventDefault();
      console.log(serviceProvider);
      dispatch(userActions.selectServiceProvider({serviceProviderSelected : serviceProvider}));
      navigate("/user/serviceProviderProfile");
    }
  return (
    <>
      <div className="card" style={{"width" : "18rem"}} onClick={handleClickServiceProvider}>
        <div className="card-body">
          <h5 className="card-title">{serviceProvider.username}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{serviceProvider.email}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {servicesOffered.map((service)=>{ return <Service key={service.serviceName} service={service} />})}
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;