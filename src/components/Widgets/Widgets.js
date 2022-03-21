import { Search, Container, User } from "./styles";

export const Widgets = () => {
  return (
    <Container>
      <Search type="text" placeholder="Search" />
      <User>
        <h1>Users</h1>
        <div className="content-user">
          <div className="avatar-user">
            <img
              src="https://randomuser.me/api/portraits/women/13.jpg"
              alt="User"
            />
          </div>
          <div className="user-profile">
            <h2>User Name</h2>
            <p>@username</p>
          </div>
        </div>
        <div className="content-user">
          <div className="avatar-user">
            <img
              src="https://randomuser.me/api/portraits/women/13.jpg"
              alt="User"
            />
          </div>
          <div className="user-profile">
            <h2>User Name</h2>
            <p>@username</p>
          </div>
        </div>
        <div className="content-user">
          <div className="avatar-user">
            <img
              src="https://randomuser.me/api/portraits/women/13.jpg"
              alt="User"
            />
          </div>
          <div className="user-profile">
            <h2>User Name</h2>
            <p>@username</p>
          </div>
        </div>
      </User>
    </Container>
  );
};
