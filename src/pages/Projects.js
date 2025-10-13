import React, { useState } from "react";
import scubeHomePage from "../icons/scubeHomePage.png";
import gymmangament from "../icons/LMNT.png";
import zaincareadmin from "../icons/JainCareAdmin.png";
import zaincare from "../icons/JainCare.png";
import Lmnt from "./modals/Lmnt";
import ZainCareAdmin from "./modals/ZainCareAdmin";
import ZainCare from "./modals/ZainCare";
import Scube from "./modals/Scube";

const Projects = () => {
  const [mStates, setMstates] = useState({
    lmnt: { isOpen: false },
    admin: { isOpen: false },
    zain: { isOpen: false },
    scube: { isOpen: false },
  });

  const handleMStates = (type) => {
    const temp = { ...mStates };
    temp[type].isOpen = !mStates[type].isOpen;
    setMstates(temp);
  };
  return (
    <>
      <div className="w-full lg:px-36 md:px-12 px-6 flex flex-col gap-6 my-6">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-orange-400 flex justify-center">
          Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
          <div className="border bg-gray-50 rounded-lg h-52 flex items-center ease-linear transition-all relative group overflow-hidden cursor-pointer">
            <div
              className="group-hover:opacity-100 opacity-0 bg-purple-300 flex items-center justify-center absolute w-full h-full ease-linear transition-all duration-300"
              onClick={() => handleMStates("lmnt")}
            >
              <p class="text-white lg:text-lg text-sm uppercase group-hover:translate-y-0 -translate-y-10 ease-linear transition-all duration-300">
                Gym Management Application
              </p>
            </div>
            <img src={gymmangament} alt="gym" className="w-full h-44" />
          </div>
          <div className="border bg-gray-50 rounded-lg h-52 flex items-center ease-linear transition-all relative group overflow-hidden cursor-pointer">
            <div
              className="group-hover:opacity-100 opacity-0 bg-purple-300 flex items-center justify-center absolute w-full h-full ease-linear transition-all duration-300"
              onClick={() => {
                handleMStates("admin");
              }}
            >
              <p class="text-white lg:text-lg text-sm uppercase group-hover:translate-y-0 -translate-y-10 ease-linear transition-all duration-300">
                Zaincare Admin Panel
              </p>
            </div>
            <img src={zaincareadmin} alt="zain-admin" className="w-full h-44" />
          </div>
          <div className="border bg-gray-50 rounded-lg h-52 flex items-center ease-linear transition-all relative group overflow-hidden cursor-pointer">
            <div
              className="group-hover:opacity-100 opacity-0 bg-purple-300 flex items-center justify-center absolute w-full h-full ease-linear transition-all duration-300"
              onClick={() => {
                handleMStates("zain");
              }}
            >
              <p class="text-white lg:text-lg text-sm uppercase group-hover:translate-y-0 -translate-y-10 ease-linear transition-all duration-300">
                Zaincare
              </p>
            </div>
            <img src={zaincare} alt="zain-admin" className="w-full h-44" />
          </div>
          <div className="border bg-gray-50 rounded-lg h-52 flex items-center ease-linear transition-all relative group overflow-hidden cursor-pointer">
            <div
              className="group-hover:opacity-100 opacity-0 bg-purple-300 flex items-center justify-center absolute w-full h-full ease-linear transition-all duration-300"
              onClick={() => {
                handleMStates("scube");
              }}
            >
              <p class="text-white lg:text-lg text-sm uppercase group-hover:translate-y-0 -translate-y-10 ease-linear transition-all duration-300">
                Scube
              </p>
            </div>
            <img src={scubeHomePage} alt="zaincare" className="w-full h-44" />
          </div>
        </div>
      </div>

      {mStates?.lmnt?.isOpen && (
        <Lmnt
          open={mStates?.lmnt?.isOpen}
          handleClose={() => {
            handleMStates("lmnt");
          }}
        />
      )}
      {mStates?.admin?.isOpen && (
        <ZainCareAdmin
          open={mStates?.admin?.isOpen}
          handleClose={() => {
            handleMStates("admin");
          }}
        />
      )}
      {mStates?.zain?.isOpen && (
        <ZainCare
          open={mStates?.zain?.isOpen}
          handleClose={() => {
            handleMStates("zain");
          }}
        />
      )}
      {mStates?.scube?.isOpen && (
        <Scube
          open={mStates?.scube?.isOpen}
          handleClose={() => {
            handleMStates("scube");
          }}
        />
      )}
    </>
  );
};

export default Projects;
