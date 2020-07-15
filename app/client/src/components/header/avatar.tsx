import React from "react";

export default function Avatar() {
  return (
    <div>
      <ul className="right hide-on-med-and-down">
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
  );
}
