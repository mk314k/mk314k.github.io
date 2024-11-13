import { profile } from "../content/about";
import { SocialIcon } from "./social_icons";
import { Link } from "react-router-dom";

export function SideBar(){
    return (
      <>
        <div className="sidebar flex-vertical">
            <div className='fullname flex-vertical'>
              <h2 className="name">{profile.first_name}</h2>
              <h2 className="name">{profile.last_name}</h2>
            </div>
            <br />
            {profile.sidebar.map((descrip_group, ix)=>{
                return (
                    <>
                        {descrip_group.map((descrip, iy)=>{
                            return (
                                <p key={`${ix}${iy}`} className="subtitle">{descrip}</p>
                            );
                        })}
                        <br />
                    </>
                );
            })}
            <SocialIcon />
            <p></p>
            <Link to="/resume">
              <button className="resume-button">View my Resume</button>
            </Link>
        </div>
      </>
    );
  }