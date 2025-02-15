const getUserMessage = ({ role, active }) => 
    role === "admin" ? (active ? "Admin Access Granted!" : "Admin Access Revoked") :
    role === "user" ? (active ? "User Access Granted!" : "User Access Revoked") :
    "Access Denied";
  