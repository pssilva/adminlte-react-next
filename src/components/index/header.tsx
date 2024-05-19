
import Head  from "next/head"

export default function HeaderIndex(){
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
        <nav className="navbar navbar-static-top"></nav>

        </header>
    </>
}