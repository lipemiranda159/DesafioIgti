import React from "react";

export default function Header() {
  return (
    <header id="header" className="page-topbar">
      <div className="navbar-fixed">
        <nav className="navbar-color gradient-45deg-light-blue-cyan">
          <div className="nav-wrapper">
            <ul className="left">
              <li>
                <h1 className="logo-wrapper">
                  <a href="index.html" className="brand-logo darken-1">
                    <span className="material-icons">attach_money</span>
                    <span className="logo-text hide-on-med-and-down">
                      Control Cash
                    </span>
                  </a>
                </h1>
              </li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  href="javascript:void(0);"
                  className="waves-effect waves-block waves-light notification-button"
                  data-activates="notifications-dropdown"
                >
                  <i className="material-icons">
                    notifications_none
                    <small className="notification-badge pink accent-2">
                      5
                    </small>
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  className="waves-effect waves-block waves-light profile-button"
                  data-activates="profile-dropdown"
                >
                  <span className="avatar-status avatar-online">
                    <span className="material-icons">perm_identity</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-activates="chat-out"
                  className="waves-effect waves-block waves-light chat-collapse"
                >
                  <i className="material-icons">format_indent_increase</i>
                </a>
              </li>
            </ul>
            <ul id="translation-dropdown" className="dropdown-content">
              <li>
                <a href="#!" className="grey-text text-darken-1">
                  <i className="flag-icon flag-icon-gb"></i> English
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-1">
                  <i className="flag-icon flag-icon-fr"></i> French
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-1">
                  <i className="flag-icon flag-icon-cn"></i> Chinese
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-1">
                  <i className="flag-icon flag-icon-de"></i> German
                </a>
              </li>
            </ul>
            <ul id="notifications-dropdown" className="dropdown-content">
              <li>
                <h6>
                  NOTIFICATIONS
                  <span className="new badge">5</span>
                </h6>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#!" className="grey-text text-darken-2">
                  <span className="material-icons icon-bg-circle cyan small">
                    add_shopping_cart
                  </span>
                  A new order has been placed!
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-2">
                  <span className="material-icons icon-bg-circle red small">
                    stars
                  </span>
                  Completed the task
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-2">
                  <span className="material-icons icon-bg-circle teal small">
                    settings
                  </span>
                  Settings updated
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-2">
                  <span className="material-icons icon-bg-circle deep-orange small">
                    today
                  </span>
                  Director meeting started
                </a>
              </li>
              <li>
                <a href="#!" className="grey-text text-darken-2">
                  <span className="material-icons icon-bg-circle amber small">
                    trending_up
                  </span>
                  Generate monthly report
                </a>
              </li>
            </ul>
            <ul id="profile-dropdown" className="dropdown-content">
              <li>
                <a href="#" className="grey-text text-darken-1">
                  <i className="material-icons">face</i> Profile
                </a>
              </li>
              <li>
                <a href="#" className="grey-text text-darken-1">
                  <i className="material-icons">settings</i> Settings
                </a>
              </li>
              <li>
                <a href="#" className="grey-text text-darken-1">
                  <i className="material-icons">live_help</i> Help
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#" className="grey-text text-darken-1">
                  <i className="material-icons">lock_outline</i> Lock
                </a>
              </li>
              <li>
                <a href="#" className="grey-text text-darken-1">
                  <i className="material-icons">keyboard_tab</i> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
