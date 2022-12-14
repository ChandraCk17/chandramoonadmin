import { LineStyle, 
    Timeline, 
    TrendingUp,
    PermIdentity,
    List,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    PlayCircleOutline, 
} from "@material-ui/icons";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon" />
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li classNameo="sidebarListItem">
                        <TrendingUp className="sidebarIcon" />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                    <li className="sidebarListItem active">
                        <PermIdentity className="sidebarIcon" />
                        Users
                    </li>
                   </Link> 
                    <Link to="/movies" className="link">
                    <li className="sidebarListItem">
                        <PlayCircleOutline className="sidebarIcon" />
                        Movies
                    </li>
                    </Link>
                    <Link to="/lists" className="link">
                    <li className="sidebarListItem">
                    <List className="sidebarIcon" />
                        Lists
                    </li>
                    </Link>
                    <li classNameo="sidebarListItem">
                        <BarChart className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon" />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li classNameo="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li classNameo="sidebarListItem">
                        <Report className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
