import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactInfo extends Component {
    render() {
        return (
            <div className='contact-info-area pt-100 pb-70'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>Contact</h2>
                        <p>
                            KA-Therapy offers services in Wilmslow and accross
                            the UK via online platforms.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6'>
                            <div className='contact-info-box'>
                                <div className='icon'>
                                    <i className='pe-7s-mail'></i>
                                </div>
                                <h3>Mail</h3>
                                <p>
                                    <a href='mailto:info@ka-therapy.co.uk'>
                                        info@ka-therapy.co.uk
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6'>
                            <div className='contact-info-box'>
                                <div className='icon'>
                                    <i className='pe-7s-map-2'></i>
                                </div>
                                <h3>My Clinic</h3>
                                <p>
                                    KA-Therapy offers services in Wilmslow and
                                    accross the UK via online platforms.
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
                            <div className='contact-info-box'>
                                <div className='icon'>
                                    <i className='pe-7s-call'></i>
                                </div>
                                <h3>Call Here</h3>
                                <p>
                                    <a href='tel:07432 233978'>07432 233978</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        );
    }
}

export default ContactInfo;
