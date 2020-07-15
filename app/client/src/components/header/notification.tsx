import React from "react";

export default function Notification() {
  return (
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
          <span className="material-icons icon-bg-circle red small">stars</span>
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
  );
}
