import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
        submitted: false,
        buttonText: <a>Send Message</a>,
    };

    handleInputChange = (e) => {
        const target = e.target;
        const name = e.target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { name, email, phone, subject, message } = this.state;
        axios
            .post(`/api/contact`, { name, email, phone, subject, message })
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        buttonText: (
                            <a>
                                <span>
                                    Message sent <i className='fa fa-check'></i>
                                </span>
                            </a>
                        ),
                        submitted: true,
                    });
                }
            })
            .catch((error) => {});
    };

    render() {
        const { buttonText, submitted } = this.state;
        return (
            <div className='contact-form'>
                <form id='contactForm'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        className='form-control'
                                        placeholder='Your Name'
                                        required
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className='form-control'
                                        placeholder='Your Email'
                                        required
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='phone'
                                        id='phone_number'
                                        className='form-control'
                                        placeholder='Phone'
                                        required
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        name='subject'
                                        id='msg_subject'
                                        className='form-control'
                                        placeholder='Subject'
                                        required
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className='col-lg-12 col-md-12'>
                                <div className='form-group'>
                                    <textarea
                                        name='message'
                                        className='form-control'
                                        id='message'
                                        rows='8'
                                        placeholder='Your Message'
                                        required
                                        onChange={
                                            this.handleInputChange
                                        }></textarea>
                                </div>
                            </div>

                            <div className='col-lg-12 col-md-12'>
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                    onClick={this.handleSubmit}>
                                    {buttonText}
                                </button>
                                {submitted && (
                                    <p style={{ color: 'green' }}>
                                        Message sent!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
