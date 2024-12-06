import SideIcons from "./components/icon/SideIcon";
import SocialLinks from "./components/icon/SocialLinks";
import MainBody from "./components/mainBody/MainBody";
import Navbar from "./components/navbar/Navbar";
import Menubar from "./components/sidemenu/Menubar";
import RightSidebar from "./components/sidemenu/RigntSidebar";

function App() {
  return (
    <div className="max-w-[1440px] container mx-auto">
      <Navbar />
      <div className="md:flex bg-gray-200 gap-6 p-4 md:p-6">
        <div className=" md:w-1/6">
          <Menubar className="hidden md:block" />
        </div>
        <div className=" flex-1">
          <MainBody />
        </div>
        <div className="bg-gray-200 md:w-1/6">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
