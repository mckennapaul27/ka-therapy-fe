import React, { Component } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
// import { services } from '../data/data';

const BlogGrid = ({ blogs }) => {
    return (
        <div className='blog-area ptb-100'>
            <div className='container'>
                <div className='row'>
                    {blogs.map((s, i) => (
                        <div className='col-lg-4 col-md-6' key={s.id}>
                            <div className='single-blog-item'>
                                <div className='blog-image'>
                                    <Link href={`/blog/${s.attributes.slug}`}>
                                        <a>
                                            <img
                                                src={
                                                    s.attributes.image.data
                                                        .attributes.url
                                                }
                                                alt={
                                                    s.attributes.image.data
                                                        .attributes
                                                        .alternativeText
                                                }
                                            />
                                        </a>
                                    </Link>

                                    {/* <div className='post-tag'>
                                    <Link href='/'>
                                        <a>{s.id}</a>
                                    </Link>
                                </div> */}
                                </div>

                                <div className='blog-post-content'>
                                    <span className='date'>
                                        {dayjs(s.attributes.createdAt).format(
                                            'DD MMM YYYY'
                                        )}
                                    </span>
                                    <h3>
                                        <Link
                                            href={`/blog/${s.attributes.slug}`}>
                                            <a>{s.attributes.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{s.desc}</p>
                                    <Link href={`/blog/${s.attributes.slug}`}>
                                        <a className='read-more-btn'>
                                            Read More
                                            <i className='icofont-thin-double-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default BlogGrid;
