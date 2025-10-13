import React, { useEffect } from "react";
import closeIcon from "../../icons/Close.svg";

const ZainCare = ({ open, handleClose }) => {
  const onClickClose = () => {
    handleClose();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClickClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg md:w-[555px] w-[330px] h-[300px] overflow-y-auto flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-lg text-purple-600">
            ZainCare - Healthcare
          </h1>
          <img
            src={closeIcon}
            alt="close-icon"
            className="cursor-pointer"
            onClick={onClickClose}
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p>
            <span className="font-semibold text-base">Description: </span> A web
            platform that enables users to book health checkups and diagonostic
            tests from the comfort of their homes <br /> The system connects
            customers with certified lab partners and healthcare providers for
            quick,accessible and affordable testing
          </p>
          <p>
            <span className="font-semibold text-base">Key features: </span>
            Online Test Booking, Online / COD payments, automated reports
          </p>
          <p>
            {" "}
            <span className="font-semibold text-base">Tech stack: </span>React,
            Zustand, TailwindCSS, NodeJs, ExpressJs, MySql
          </p>
          <p>
            <span className="font-semibold text-base">Preview: </span>
            <a
              href="https://www.zaincare.com/"
              className="text-blue-500 underline"
              target="_blank"
              ref="noreferrer"

            >
              https://www.zaincare.com/
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZainCare;
