import React from "react";
import { useNavigate } from "react-router";
import Button from "../Button";
const UserItem = (props) => {
  const navigate = useNavigate();

  const {
    user: { login, avatar_url },
  } = props;

  const onRedirectToUserDetail = () => {
    navigate(`/user/${login}`);
  };

  return (
    <div className="user-container">
      <img src={avatar_url} alt={login} />
      <h5>{login}</h5>
      <Button label="More" onClick={onRedirectToUserDetail} />
    </div>
  );
};

export default UserItem;
