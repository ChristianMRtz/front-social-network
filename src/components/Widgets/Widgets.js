import { useEffect, useState } from "react";
import { Search, Container, User } from "./styles";
import api from "../../services/fetch";

export const Widgets = () => {
  const [users, setUsers] = useState([]);

  const retrieveUsers = async () => {
    const response = await api.get("/users", { withCredentials: false });
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  return (
    <Container>
      <Search type="text" placeholder="Search" />
      <User>
        <h1>Users</h1>
        {users
          .sort(() => Math.random() - Math.random())
          .slice(0, 3)
          .map((user) => (
            <div className="content-user" key={user.id}>
              <div className="avatar-user">
                <img
                  src={
                    user.avatar.length > 1
                      ? user.avatar
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User"
                />
              </div>
              <div className="user-profile">
                <h2>{user.username}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
      </User>
    </Container>
  );
};
