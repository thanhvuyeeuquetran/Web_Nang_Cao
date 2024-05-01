import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";
class Footer extends Component {
  static contextType = MyContext; // using this . context to access global state
  render() {
    return (
      <footer class="container-fluid footer">
        <div class="row">
          <div class="foot-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>Apple Store</h4>
            <ul>
              <li>
                <a href="#">Iphone</a>
              </li>
              <li>
                <a href="#">Macbook</a>
              </li>
              <li>
                <a href="#">Apple Watch</a>
              </li>
              <li>
                <a href="#">Headphone</a>
              </li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
