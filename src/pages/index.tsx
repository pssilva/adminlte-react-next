import HeaderIndex from "@/components/index/header";
import MainSidebar from "@/components/index/mainSiderbar";
import ContentWrapper from "@/components/index/contentWrapper";
import MainFooter from "@/components/index/mainFooter";

export default function Index() {
  return (
    <>
      {/*<!-- wrapper -->*/}
      <div className="wrapper">
        <HeaderIndex />
        <MainSidebar />
        <ContentWrapper />
        <MainFooter />
      </div>
      {/*<!-- ./wrapper -->*/}
    </>
  );
}
