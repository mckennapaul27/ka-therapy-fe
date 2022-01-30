import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import { getGlobalData, getTestimonials } from '../lib/server-api';
import MarkdownContent from '../components/MarkdownContent';

export default function Testimonials({ globalData, testimonials }) {
    return (
        <React.Fragment>
            <Navbar links={globalData.data.attributes.navbarLink} />
            <PageBanner pageTitle='Testimonials' />
            {/* <BlogGridThree /> */}
            <div className='text-container ptb-100'>
                <div className='container'>
                    {testimonials.map((item) => (
                        <div key={item.id}>
                            <h6>
                                {item.attributes.type}. {item.attributes.date}.{' '}
                                {item.attributes.name}
                            </h6>
                            <MarkdownContent body={item.attributes.content} />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();

    const { data, error } = await getTestimonials();
    const testimonials = data.pages.data;
    return {
        props: {
            globalData: globalData.data.global,

            testimonials,
        },
    };
}
