import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Account() {
  const {currentUser} = useAuth();
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>

      {currentUser ? (
        <>
        <span>{currentUser.displayName}</span>
        <span className="material-icons-outlined" title="Logout"> logout </span>
        </>
        
      ) : (
        <>
        <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
        </>
      )}  
    </div>
  );
}
