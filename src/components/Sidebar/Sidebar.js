import { Container } from "./styles";
import { OptionIcon } from "./OptionIcon";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

export const Sidebar = () => {
  
  return (
    <Container>
      <TwitterIcon className="twitter-logo"/>
      <OptionIcon active text="Home" Icon={HomeIcon} />
      <OptionIcon text="Search" Icon={SearchIcon} />
      <OptionIcon text="Notifications" Icon={NotificationsIcon} />
      <OptionIcon text="Messages" Icon={MailOutlineIcon} />
      <OptionIcon text="Profile" Icon={PermIdentityIcon} />
      <OptionIcon text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" fullWidth>
        Tweet
      </Button>
    </Container>
  );
};
