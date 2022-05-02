import React, { Fragment, Component } from "react";
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footerContainer bg-primary">
          <a
            href="https://github.com/neeraj-22/tax-bracket"
            target="_blank"
            rel="noreferrer noopener"
            style={{ fontWeight: "bold" }}
          >
            View in GitHub
          </a>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
