import React, { Component } from 'react';
import Link from 'next/link';
import MarkdownContent from './MarkdownContent';

class About extends Component {
    render() {
        return (
            <section className='about-area ptb-100'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-12'>
                            <div className='about-image'>
                                <img
                                    src={this.props.image.data.attributes.url}
                                    alt={
                                        this.props.image.data.attributes
                                            .alternativeText
                                    }
                                    className='rounded-10'
                                />
                            </div>
                        </div>

                        <div className='col-lg-7 col-md-12'>
                            <div className='about-content about-content-two'>
                                <div className='section-title'>
                                    <h2>{this.props.heading}</h2>
                                </div>

                                <div className='about-text'>
                                    <MarkdownContent
                                        body={this.props.content}
                                    />
                                </div>

                                <Link href='/about'>
                                    <a className='btn btn-primary'>
                                        {this.props.buttonText}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
