import SideIcons from "./components/icon/SideIcon";
import SocialLinks from "./components/icon/SocialLinks";
import MainBody from "./components/mainBody/MainBody";
import Navbar from "./components/navbar/Navbar";
import Menubar from "./components/sidemenu/Menubar";
import RightSidebar from "./components/sidemenu/RigntSidebar";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex bg-gray-200 p-5">
        {/* Left Section */}
        <div className=" w-1/5">
          <SideIcons />
          <Menubar />
        </div>

        {/* Main Section */}
        <div className="flex-1 ">
          <MainBody />
        </div>

        {/* Right Section */}
        <div className="bg-gray-200 w-1/4">
          <RightSidebar />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default App;
