// import Navbar from "./components/Navbar";
// import SideIcons from "./components/SideIcons";
// import SideMenu from "./components/SideMenu";
// import SocialLinks from "./components/SocialLinks";
// import MainBody from "./components/MainBody";
// import RightSidebar from "./components/RightSidebar";

import SideIcons from "./components/icon/SideIcon";
import SocialLinks from "./components/icon/SocialLinks";
import MainBody from "./components/mainBody/MainBody";
import Navbar from "./components/navbar/Navbar";
import Menubar from "./components/sidemenu/Menubar";

function App() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="bg-gray-200 w-1/5">
        <SideIcons />
        <Menubar />
      </div>

      {/* Main Section */}
      <div className="flex-1 bg-white">
        <Navbar />
        <MainBody />
      </div>

      {/* Right Section */}
      <div className="bg-gray-200 w-1/4">
        {/* <RightSidebar /> */}
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
