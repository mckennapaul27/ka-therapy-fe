import React, { Component } from 'react';

class PageBanner extends Component {
    render() {
        let { pageTitle } = this.props;

        return (
            <div
                className='page-title-area bg-one'
                // style={{
                //     background: `transparent url(${pageImg}) right top no-repeat`,
                // }}
            >
                <div className='d-table'>
                    <div className='d-table-cell'>
                        <div className='container'>
                            <h2>{pageTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;
