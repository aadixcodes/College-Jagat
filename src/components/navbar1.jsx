import React, { useState } from "react";
import "../style/navbar1.scss";

const navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            College Jagat
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-sicon"><i class='bx bx-menu'></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newsfeed">
                  Latest News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/academiccalender">
                      Academic Calender
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/busboard">
                      Bus Board
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/newsfeed">
                      News Feed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/events">
                      Clubs And Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/lostandfound">
                      Lost And Found
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/attendancecalc">
                      Calculate Attendance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/communitychat">
                      Community Chat
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/feedbackform">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button id="dash-btn">Dashboard</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar1;
