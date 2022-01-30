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
