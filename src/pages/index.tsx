
import MainMeader from "@/components/index/mainHeader";
import MainSidebar from "@/components/index/mainSiderbar";
import ContentWrapper from "@/components/index/contentWrapper";
import MainFooter from "@/components/index/mainFooter";
import adminLTEReact from "@/components/adminLTE/adminLTEReact";

export default function Index() {
  console.log(adminLTEReact());

  return (
    <>
      {/*<!-- wrapper -->*/}
      <div className="wrapper">
        <MainMeader />
        <MainSidebar />
        <ContentWrapper />
        <MainFooter />
        <div id="el1"></div>
      </div>
      {/*<!-- ./wrapper -->*/}    
    </>
  );
}
