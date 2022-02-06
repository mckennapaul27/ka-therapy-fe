import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();

        return (
            <footer className='footer-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6'>
                            <div className='single-footer-widget'>
                                <div className='logo'>
                                    <Link href='/'>
                                        <a>
                                            <img
                                                src={
                                                    '/logo-black-transparent.png'
                                                }
                                                alt='image'
                                                style={{ maxWidth: '200px' }}
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <p>
                                    KA-Therapy offers services in Wilmslow and
                                    accross the UK via online platforms.
                                </p>

                                <ul className='social-links'>
                                    <li>
                                        <Link href='/'>
                                            <a
                                                href='https://www.facebook.com/katherapy20'
                                                target='_blank'
                                                rel='noreferrer'>
                                                <i className='icofont-facebook'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/'>
                                            <a  target='_blank'><i className='icofont-twitter'></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/'>
                                            <a target='_blank'><i className='icofont-linkedin'></i></a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href='/'>
                                            <a
                                                href='https://www.instagram.com/ka_therapy20'
                                                target='_blank'
                                                rel='noreferrer'>
                                                <i className='icofont-instagram'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-footer-widget ml-4 pl-5'>
                                <h3>Explore</h3>

                                <ul className='list'>
                                    <li>
                                        <Link href='/'>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/about'>
                                            <a>About</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href='/cbt'>
                                            <a>CBT</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/disorders'>
                                            <a>Disorders</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/testimonials'>
                                            <a>Testimonials</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/portfolio'>
                                            <a>Portfolio</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/team'>
                                            <a>Team</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6'>
                            <div className='single-footer-widget ml-4'>
                                <h3>Quick Links</h3>

                                <ul className='list'>
                                    <li>
                                        <Link href='/contact'>
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href='/pricing'>
                                            <a>Pricing</a>
                                        </Link>
                                    </li> */}
                                    {/* <li>
                                        <Link href='/faq'>
                                            <a>Faq</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href='/privacy-policy'>
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/complaints'>
                                            <a>Complaints Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/terms-conditions'>
                                            <a>Terms &amp; Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6'>
                            <div className='single-footer-widget'>
                                <h3>Get in Touch</h3>

                                <ul className='get-in-touch'>
                                    <li>
                                        <i className='icofont-home'></i>{' '}
                                        Manchester
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li>
                                        <i className='icofont-live-support'></i>{' '}
                                        <a href='tel:07432 233978'>
                                            07432 233978
                                        </a>
                                    </li>
                                    <li>
                                        <i className='icofont-envelope'></i>{' '}
                                        <a href='mailto:info@ka-therapy.co.uk'>
                                            info@ka-therapy.co.uk
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='copyright-area'>
                    <div className='container'>
                        <p>
                            <a
                                href='https://babcp.com'
                                target='blank'
                                rel='noreferrer'>
                                {/* <img
                                    style={{ maxWidth: '75px' }}
                                    src={require('../images/bapcp.png')}
                                    alt=''
                                /> */}
                            </a>
                        </p>
                        <p>
                            &copy; Copyright {currentYear} KA-Therapy.co.uk. All
                            Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
