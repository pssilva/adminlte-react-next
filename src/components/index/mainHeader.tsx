
import Head  from "next/head"

export default function MainHeader(){
    return <>
        <Head>
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />
        </Head>
        <header className="main-header">
        
        {/*<!-- Logo -->*/}
        <a href="index2" className="logo">
            {/*<!-- mini logo for sidebar mini 50x50 pixels -->*/}
            <span className="logo-mini"><b>A</b>LT</span>
            {/*<!-- logo for regular state and mobile devices -->*/}
            <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>

        {/*<!-- Header Navbar: style can be found in header.less -->*/}
        <nav className="navbar navbar-static-top">
            {/*<!-- Sidebar toggle button-->*/}
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
        </nav>

        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                {/*<!-- Messages: style can be found in dropdown.less-->*/}
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                </a>

                <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    {/*<!-- inner menu: contains the actual data -->*/}
                    <ul className="menu">
                        <li>
                            {/*<!-- start message -->*/}
                            <a href="#">
                                <div className="pull-left">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </ul>
            </ul>
        </div>

        </header>
    </>
}