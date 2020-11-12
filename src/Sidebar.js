import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ChatIcon from "@material-ui/icons/Chat";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-1/p160x160/115803624_3119785601450509_4958406722022361535_o.jpg?_nc_cat=108&ccb=2&_nc_sid=dbb9e7&_nc_ohc=WFoEkxHNErcAX8ZLtaa&_nc_ht=scontent.fdac17-1.fna&tp=6&oh=146a7a06140e0fc76598d950974610f2&oe=5FD2D089"
        title="faiz ahmed"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
