import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>

        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://p4.wallpaperbetter.com/wallpaper/911/774/372/black-cubes-wallpaper-preview.jpg" alt=""/>
                <Avatar className="sidebar__avaitar"/>
                <h2>md.nasmus shahadat</h2>
                <h4>nasmus.shahadat@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,569</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statNumber">2,359</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("Programming")}
                {recentItem("Softwareengineering")}
                {recentItem("Designer")}
                {recentItem("Developar")}
                {recentItem("Ui/Ex")}
            </div>

        </div>
    );
}

export default Sidebar
