import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    state = {
        isOpen: false,
    };
    openModal = () => {
        this.setState({ isOpen: true });
    };

    render() {
        return (
            <React.Fragment>
                <div className='hero-banner video-studio overly-6'>
                    <div className='video-background'>
                        <video
                            autoPlay
                            loop
                            src={'/promo-video.mp4'}
                            type='video/mp4'
                        />
                    </div>

                    <div className='d-table'>
                        <div className='d-table-cell'>
                            <div className='container'>
                                <div className='row align-items-center'>
                                    <div className='col-lg-8'>
                                        <div className='main-banner-content'>
                                            <h1>{this.props.heading}</h1>
                                            <p>{this.props.subheading} </p>

                                            <Link href='/contact'>
                                                <a className='btn btn-primary'>
                                                    {this.props.buttonText}
                                                </a>
                                            </Link>
                                            <div
                                                style={{
                                                    marginTop: '24px',
                                                }}>
                                                <a
                                                    href='https://uk.trustpilot.com/review/ka-therapy.co.uk'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    style={{
                                                        backgroundColor:
                                                            '#ffffff',
                                                        padding:
                                                            '4px 10px 8px 10px',
                                                        borderRadius: '8px',
                                                        marginRight: '16px',
                                                    }}>
                                                    <img
                                                        src='/trust-pilot-logo.png'
                                                        alt=''
                                                        height={18}
                                                    />
                                                </a>
                                                <a
                                                    href='https://www.facebook.com/katherapy20'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    style={{
                                                        backgroundColor:
                                                            '#83c5be',
                                                        color: '#ffffff',
                                                        borderRadius: '50%',
                                                        width: '30px',
                                                        height: '30px',
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        position: 'relative',
                                                        marginRight: '8px',
                                                    }}>
                                                    <i className='icofont-facebook'></i>
                                                </a>
                                                <a
                                                    href='https://www.instagram.com/ka_therapy20'
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    style={{
                                                        backgroundColor:
                                                            '#83c5be',
                                                        color: '#ffffff',
                                                        borderRadius: '50%',
                                                        width: '30px',
                                                        height: '30px',
                                                        lineHeight: '30px',
                                                        textAlign: 'center',
                                                        position: 'relative',
                                                    }}>
                                                    <i className='icofont-instagram'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='col-lg-4'>
                                        <div className='video-box'>
                                            <Link href='#play-video'>
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className='video-btn'
                                                > 
                                                    <i className='pe-7s-play'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                {/* <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='_ysd-zHamjk'
                    onClose={() => this.setState({ isOpen: false })}
                /> */}
            </React.Fragment>
        );
    }
}

export default MainBanner;
