import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
// import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import Tooltip from "@mui/material/Tooltip";

const LogoutButton = () => {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto ">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer hover:text-red-600"
          onClick={logout}
          title={`Logout ${authUser.username}`}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

// <div className="mt-auto ">
// {!loading ? (
//   <BiLogOut
//     className="w-6 h-6 text-white cursor-pointer hover:text-red-600"
//     onClick={logout}
//     // title = {`Logout ${authUser.username}`}
//   />
// ) : (
//   <span className="loading loading-spinner"></span>
// )}
// </div>
