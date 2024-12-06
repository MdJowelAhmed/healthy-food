import { FaHome, FaStar } from "react-icons/fa";
import SocialLinks from "../icon/SocialLinks";
import SideIcons from "../icon/SideIcon";
import { CgMenuGridR } from "react-icons/cg";
import { TbLocationShare } from "react-icons/tb";
import { LuMessageSquareDiff } from "react-icons/lu";
import { PiCirclesFourBold } from "react-icons/pi";

const MainBody = () => {
  return (
    <div>
      <div className="bg-white md:ml-8 p-2 md:p-6 lg:p-10 flex flex-col lg:flex-row-reverse gap-6 rounded-xl">
        <div className="  ">
          {/* First Section */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl font-bold mb-6">
                Health Benefits Of An Avocado
              </h1>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Supports eye health:
                  </h2>
                  <p className="text-gray-700 text-sm">
                    Spinach contains high levels of Vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold mb-4">
                    Supports eye health:
                  </h2>
                  <p className="text-gray-700 text-sm">
                    Spinach contains high levels of Vitamin A and other
                    antioxidants that help maintain healthy vision and protect
                    against age-related macular degeneration.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/bunch-fruit-including-strawberries-strawberries-strawberry_1026950-80491.jpg?w=360"
                alt="Avocado"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="mb-10">
            <p>
              In this blog post, we will explore all about Apple Fruit – its
              various types, intriguing history, rich nutritional value, and
              incredible health benefits. Apples are a popular fruit that has
              been enjoyed by people all around the world for centuries. Known
              scientifically as Malus domestica, apples belong to the Rosaceae
              family and are characterized by their crispy texture and delicious
              taste.
            </p>
          </div>

          {/* third section  */}
          <div className="flex flex-col-reverse  gap-4 lg:flex-row-reverse">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">
                Supports eye health:
              </h2>
              <p className="text-gray-700">
                In this blog post, we will explore all about Apple Fruit – its
                various types, intriguing history, rich nutritional value, and
                incredible health benefits. Apples are a popular fruit that has
                been enjoyed by people all around the world for centuries. Known
                scientifically as Malus domestica, apples belong to the ...
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://fruitnames.net/wp-content/uploads/2023/10/apples-on-a-tree-branch.jpg"
                alt="Avocado"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Was This Helpful?</h3>
            <div className="flex items-center gap-2">
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-orange-500 text-xl" />
              <FaStar className="text-gray-400 text-xl" />
            </div>
          </div>
        </div>

        <div>
          <div className="lg:mt-10">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="block md:hidden ">
        <div className="flex justify-center items-center gap-10 py-4">
          <button className="text-gray-600 hover:text-orange-600 text-2xl">
            <FaHome />
          </button>
          <button className="text-gray-600 hover:text-orange-600 text-2xl">
            <PiCirclesFourBold />
          </button>
          <button className="text-gray-600 hover:text-orange-600 text-2xl">
            <LuMessageSquareDiff />
          </button>
          <button className="text-gray-600 hover:text-orange-600 text-2xl">
            <TbLocationShare />
          </button>
          <button className="text-gray-600 hover:text-orange-600 text-2xl">
            <CgMenuGridR />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
