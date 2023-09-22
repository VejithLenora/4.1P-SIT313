import React from "react";
import "./App.css";
import "./normalize.css";

function FooterSection() {
  return (
    <div>
      <div>
        <table>
          <tr>
            <td>
              <h3>For Dev</h3>
              <p>How It Works</p>
              <p>How To Create A Profile</p>
              <p>Find Jobs</p>
            </td>
            <td>
              <h3>For Clients</h3>
              <p>How It Works</p>
              <p>How To Post A Job</p>
              <p>Find Dev</p>
            </td>
            <td>
              <h3>Stay Connected</h3>
              <table>
                <tr>
                  <td>
                    <div class="imagecont">
                      <img
                        src="public/Images/FacebookIcon.jpeg"
                        class="Responsive"
                        alt="Facebook"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="imagecont">
                      <img
                        src="public/Images/TwitterLogoIcon.webp"
                        class="Responsive"
                        alt="Twitter"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="imagecont">
                      <img
                        src="public/Images/instagramlogoicon.png"
                        class="Responsive"
                        alt="Instagram"
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <div class="center">
        <div class="center">
          <h3>DevLink</h3>
        </div>
        <div class="parent">
          <div class="child">
            <p>Privacy Policy</p>
          </div>
          <div class="child">
            <p>Terms</p>
          </div>
          <div class="child">
            <p>Code Of Conduct</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
