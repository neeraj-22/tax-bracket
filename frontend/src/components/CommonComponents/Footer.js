import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

import './Footer.css';
const Footer = () => {
  return (
    <Fragment>
        <footer className='footerContainer bg-primary'>
            <a href='https://github.com/neeraj-22/tax-bracket' target='_blank' rel="noreferrer noopener" style={{fontWeight:"bold"}}>View in GitHub</a>
        </footer>
        </Fragment>
  )
}

export default Footer