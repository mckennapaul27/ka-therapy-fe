import React, { Component } from 'react';
import PageBanner from '../components/PageBanner';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getGlobalData } from '../lib/server-api';

export default function Contact({ globalData }) {
    return (
        <React.Fragment>
            <Navbar links={globalData.data.attributes.navbarLink} />
            <PageBanner pageTitle='Contact Us' />
            <ContactInfo />
            <Footer />
        </React.Fragment>
    );
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();

    return {
        props: {
            globalData: globalData.data.global,
        },
    };
}
