import React from "react";
import UserItem from "../userItem";

const UserList = (props) => {
  const { users, loading } = props;
  const empty = <h3 className="text-center mt-5 mf-5">No Data</h3>;
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row mt-5">
      {users.length !== 0
        ? users.map((user) => (
            <div className="col-12 col-md-4 user-item " key={user.login}>
              <UserItem user={user} />
            </div>
          ))
        : empty}
    </div>
  );
};

export default UserList;
