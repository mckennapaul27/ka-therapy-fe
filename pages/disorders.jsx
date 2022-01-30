import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PageBanner from '../components/PageBanner';
import ServicesStyleOne from '../components/Services';
import CtaAreaTwo from '../components/CtaArea';
import Footer from '../components/Footer';
import CalmingTreeLarge from '../images/calming-tree-large.jpg';
import { getDisorders, getGlobalData } from '../lib/server-api';

export default function Disorders({ globalData, disorders }) {
    return (
        <React.Fragment>
            <Navbar links={globalData.data.attributes.navbarLink} />
            <PageBanner
                pageTitle='What We Can Treat'
                pageImg={CalmingTreeLarge}
            />
            <ServicesStyleOne disorders={disorders} />
            <CtaAreaTwo />
            <Footer />
        </React.Fragment>
    );
}
export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();

    const { data, error } = await getDisorders();
    const disorders = data.pages.data;
    return {
        props: {
            globalData: globalData.data.global,

            disorders,
        },
    };
}
