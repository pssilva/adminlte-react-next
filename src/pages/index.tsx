import Image from "next/image";
import Head  from "next/head"


export default function Index() {
  return (
    <div className="wrapper">

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

      {/*<!-- Left side column. contains the logo and sidebar -->*/}
      <aside className="main-sidebar"></aside>
      
      {/*<!-- Content Wrapper. Contains page content -->*/}
      <div className="content-wrapper"></div>

      {/*<!-- /.content-wrapper -->*/}
      <footer className="main-footer"></footer>

      {/*<!-- Control Sidebar -->*/}
      <aside className="control-sidebar control-sidebar-dark"></aside>

      {/*<!-- /.control-sidebar -->*/}
      {/*<!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->*/}
      <div className="control-sidebar-bg"></div>
  
    {/*<!-- ./wrapper -->*/}
    </div>
  );
}
