import React, { Component } from 'react';
import Link from './ActiveLink';

class Navbar extends Component {
    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true,
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    componentDidMount() {
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed
            ? 'collapse navbar-collapse'
            : 'collapse navbar-collapse show';
        const classTwo = collapsed
            ? 'navbar-toggler navbar-toggler-right collapsed'
            : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <div id='navbar' className='navbar-area navbar-style-2'>
                    <nav className='navbar navbar-expand-md navbar-light'>
                        <div className='container'>
                            <Link href='/'>
                                <a className='navbar-brand'>
                                    <img
                                        src={'/logo-black-transparent.png'}
                                        className='black-logo'
                                        alt='logo'
                                        style={{ maxWidth: '175px' }}
                                    />
                                    <img
                                        src={'/logo-white-transparent.png'}
                                        className='white-logo'
                                        alt='logo'
                                        style={{ maxWidth: '175px' }}
                                    />
                                </a>
                            </Link>

                            {/* Toggle navigation */}
                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type='button'
                                data-toggle='collapse'
                                data-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                                <span className='icon-bar top-bar'></span>
                                <span className='icon-bar middle-bar'></span>
                                <span className='icon-bar bottom-bar'></span>
                            </button>

                            <div
                                className={classOne}
                                id='navbarSupportedContent'>
                                <ul className='navbar-nav'>
                                    {this.props.links.map((item) => {
                                        if (item.isDropDown) {
                                            return (
                                                <li
                                                    className='nav-item'
                                                    key={item.id}>
                                                    <a className='nav-link'>
                                                        {item.text}{' '}
                                                        <i className='icofont-thin-down'></i>
                                                    </a>
                                                    <ul className='dropdown-menu'>
                                                        {item.dropDown.map(
                                                            (a) => (
                                                                <li
                                                                    className='nav-item'
                                                                    key={a.id}>
                                                                    <Link
                                                                        href={
                                                                            a.url
                                                                        }
                                                                        activeClassName='active'>
                                                                        <a className='nav-link'>
                                                                            {
                                                                                a.text
                                                                            }
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </li>
                                            );
                                        } else
                                            return (
                                                <li
                                                    className='nav-item'
                                                    key={item.id}>
                                                    <Link
                                                        href={item.url}
                                                        activeClassName='active'>
                                                        <a className='nav-link'>
                                                            {item.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                    })}
                                </ul>
                                <div className='others-options'>
                                    <Link href='/contact'>
                                        <a className='btn btn-primary'>
                                            Contact Me
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
