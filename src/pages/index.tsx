
import MainHeader from "@/components/index/mainHeader";
import MainSidebar from "@/components/index/mainSiderbar";
import ContentWrapper from "@/components/index/contentWrapper";
import MainFooter from "@/components/index/mainFooter";
import adminLTEReact from "@/components/adminLTE/adminLTEReact";
import Preloader from "@/components/index/preloader";
import ControlSidebar from "@/components/index/controlSidebar";

export default function Index() {
  console.log(adminLTEReact());

  return (
    <div>
      
      {/*<!-- wrapper -->*/}
      <div className="wrapper">
        
        {/*<!-- Preloader 
        <Preloader /> -->*/}
        {/*<!-- Preloader -->*/}
        
        {/*<!-- Navbar -->*/}
        <MainHeader /> 
        {/*<!-- Navbar -->*/}

        {/*<!--  Main Sidebar Container 
        <MainSidebar />-->*/}
        {/*<!--  Main Sidebar Container -->*/}

        {/*<!-- Content Wrapper. Contains page content
        <ContentWrapper /> -->*/}
        {/*<!-- /.content-wrapper -->*/}


        {/*<!-- Content Footer 
        <MainFooter />-->*/}
        {/*<!-- / .Content Footer -->*/}

        {/*<!-- Control Sidebar 
        <ControlSidebar />-->*/}
        {/*<!-- / .Control Sidebar -->*/}
        
      </div>
      {/*<!-- ./wrapper -->*/}

    </div>
  );
}
