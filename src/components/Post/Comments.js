import {
  Post,
  PostBody,
  Avatar,
  PostDescription,
  Images,
} from "../Feed/styles";

export const Comments = ({
  comment,
  username,
  email,
  date,
  avatar,
  images,
}) => {
  const parseDate = (date) => {
    const dateGMT = date.replace(/T/, " ");
    const dateFormat = new Date(dateGMT);
    return dateFormat.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <Post>
      <div className="post-avatar">
        <Avatar
          src={
            avatar
              ? avatar
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user"
        />
      </div>
      <PostBody>
        <div>
          <div>
            <h3>
              {username} <span>{email}</span>
            </h3>
            <PostDescription>
              <p>{comment}</p>
            </PostDescription>
          </div>
          {images ? (
            <Images src="https://picsum.photos/720/480" alt="post" />
          ) : (
            ""
          )}
          <div className="date">{parseDate(date)}</div>
        </div>
      </PostBody>
    </Post>
  );
};
