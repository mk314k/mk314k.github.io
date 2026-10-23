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
              <p className="location-label">{profile.location}</p>
            </div>
            <div className="sidebar-groups">
              {profile.sidebar.map((descrip_group, ix)=>{
                  return (
                      <div className="sidebar-group flex-vertical" key={`${ix}div`}>
                          {descrip_group.map((descrip, iy)=>{
                              return (
                                  <p key={`${ix}${iy}`} className={`subtitle ${iy === 0 ? 'subtitle-primary' : 'subtitle-secondary'}`}>{descrip}</p>
                              );
                          })}
                      </div>
                  );
              })}
            </div>
            <SocialIcon />
            <Link to="/resume" className="resume-link">
              <button className="resume-button">Curriculum Vitae</button>
            </Link>
        </div>
      </>
    );
  }