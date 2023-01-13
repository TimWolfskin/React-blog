import React from 'react'
import "./sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, libero, veniam quis dolores
                    esse minima cumque dolor suscipit delectus facere necessitatibus quisquam a, dolorum vel?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLOW US</span>
                <div className="sidebarSocial">
                    <i className="topIcon fa-brands fa-facebook-f"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
