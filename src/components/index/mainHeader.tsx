
//import styles from '../../styles/globals.css'

// <Link rel="stylesheet" href="/dist/css/adminlte.min.css" />

import Head  from "next/head"
import Image from "next/image"

export default function MainHeader(){
    return <>
        <Head>
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
            
        </Head>
        <header className="main-header">
        
            {/*{/*<!-- Logo >*/}
            <a href="index2" className="logo">
                {/*{/*<!-- mini logo for sidebar mini 50x50 pixels >*/}
                <span className="logo-mini"><b>A</b>LT</span>
                {/*{/*<!-- logo for regular state and mobile devices >*/}
                <span className="logo-lg"><b>Admin</b>LTE</span>
            </a>

            {/*{/*<!-- Header Navbar: style can be found in header.less >*/}
            <nav className="navbar navbar-static-top">
                {/*{/*<!-- Sidebar toggle button*}*/}
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
            </nav>

            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    {/*{/*<!-- Messages: style can be found in dropdown.less*}*/}
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-envelope-o"></i>
                        <span className="label label-success">4</span>
                    </a>

                    <ul className="dropdown-menu">
                        <li className="header">You have 4 messages</li>
                        {/*{/*<!-- inner menu: contains the actual data >*/}
                        <ul className="menu">
                            <li>
                                {/*{/*<!-- start message >*/}
                                <a href="#">
                                    <div className="pull-left">
                                    <Image src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" width={160} height={160}  />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </ul>
            </div>

        </header>

        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/*{/*<!-- Left navbar links >*/}
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <a href="#" className="nav-link">Contact</a>
            </li>
            </ul>

            {/*{/*<!-- Right navbar links >*/}
            <ul className="navbar-nav ml-auto">
            {/*{/*<!-- Navbar Search >*/}
            <li className="nav-item">
                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search"></i>
                </a>
                <div className="navbar-search-block">
                <form className="form-inline">
                    <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search"></i>
                        </button>
                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times"></i>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </li>

            {/*{/*<!-- Messages Dropdown Menu >*/}
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                    {/*{/*<!-- Message Start >*/}
                    <div className="media">
                    <Image src="/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" width={128} height={128}  />
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    {/*{/*<!-- Message End >*/}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    {/*{/*<!-- Message Start >*/}
                    <div className="media">
                    <Image src="/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" width={128} height={128}  />
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    {/*{/*<!-- Message End >*/}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    {/*{/*<!-- Message Start >*/}
                    <div className="media">
                    <Image src="/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" width={128} height={128}  />
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning" >
                            <i className="fas fa-star"></i>
                        </span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    {/*{/*<!-- Message End >*/}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                </div>
            </li>
            {/*{/*<!-- Notifications Dropdown Menu >*/}
            <li className="nav-item dropdown">
                <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                <i className="fas fa-th-large"></i>
                </a>
            </li>
            </ul>
        </nav>
    </>
}