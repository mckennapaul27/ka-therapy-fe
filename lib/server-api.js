import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
    cache: new InMemoryCache(),
});

export async function getPagePaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages {
                    data {
                        id
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getPageBySlug({ slug }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($slug: String) {
                pages(filters: { slug: { eq: $slug } }) {
                    data {
                        id
                        attributes {
                            title
                            content
                            slug
                        }
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    });

    return result;
}

export async function getGlobalData() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                global {
                    data {
                        id
                        attributes {
                            navbarLink {
                                id
                                text
                                url
                                isDropDown
                                dropDown {
                                    id
                                    url
                                    text
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getTestimonials() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: testimonials(sort: "date:desc") {
                    data {
                        id
                        attributes {
                            name
                            date
                            type
                            content
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getDisorders() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: disorders {
                    data {
                        id
                        attributes {
                            title
                            description
                            image {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getBlogPaths() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: blogPosts {
                    data {
                        id
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getBlogBySlug({ slug }) {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query ($slug: String) {
                pages: blogPosts(filters: { slug: { eq: $slug } }) {
                    data {
                        id
                        attributes {
                            createdAt
                            title
                            content
                            slug
                            image {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            slug,
        },
    });

    return result;
}

export async function getBlogs() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                pages: blogPosts {
                    data {
                        id
                        attributes {
                            title
                            content
                            createdAt
                            slug
                            image {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    });

    return result;
}

export async function getHomePage() {
    const result = await client.query({
        fetchPolicy: 'no-cache',
        query: gql`
            query {
                homePage {
                    data {
                        attributes {
                            heading
                            subheading
                            buttonText
                            aboutHeading
                            aboutContent
                            aboutButtonText
                            aboutImage {
                                data {
                                    attributes {
                                        url
                                        alternativeText
                                    }
                                }
                            }
                            contactHeading
                            contactSubHeading
                        }
                    }
                }
            }
        `,
    });

    return result;
}
