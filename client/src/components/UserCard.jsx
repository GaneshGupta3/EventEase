import styles from "./UserCard.module.css";

const UserCard = ({ user, handleSeeDetailsClick }) => {
    return (
        <div className="card mb-3" style={{ width: "30%" }}>
            <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">{user.email}</p>
                <div>
                    <a
                        // to={"/serviceProvider/userProfile"}
                        className={`btn btn-primary ${styles.marginButton}`}
                        onClick={(e) => handleSeeDetailsClick(e, user)}
                    >
                        See details
                    </a>
                    <a href="#" className={`btn btn-primary ${styles.marginButton}`} >Confirm</a>
                </div>
            </div>
            {/* Conditionally render UserSelected based on whether the current user is selected */}
        </div>
    );
};

export default UserCard;
