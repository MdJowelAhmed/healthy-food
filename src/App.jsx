import { ThemeProvider } from "./components/context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import MainBody from "./components/mainBody/MainBody";
import Menubar from "./components/sidemenu/Menubar";
import RightSidebar from "./components/sidemenu/RigntSidebar";

function App() {
  return (
    <ThemeProvider>
      <div className="max-w-[1440px] container mx-auto">
        <Navbar />
        <div className="md:flex bg-gray-200 dark:bg-gray-900 gap-6 p-4 md:p-6">
          <div className="md:w-1/6">
            <Menubar className="hidden md:block" />
          </div>
          <div className="flex-1">
            <MainBody />
          </div>
          <div className="md:w-1/6">
            <RightSidebar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
