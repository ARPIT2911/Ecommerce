import { Button, Space, message } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { getToken, removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    message.success(`Loggged Out Successfully`);
    navigate("/signin", { replace: true });
    window.location.reload(true);
  };

  return (
    <Space className="header_space">
      {/* <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button> */}
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="btn-primary" href="/profile" type="link">
              {getToken() ? user.username : 'Login'}
            </Button>
            <Button
              className="btn-primary"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="btn-primary" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;