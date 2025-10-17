import React, { useEffect } from "react";
import closeIcon from "../../icons/Close.svg";

const ZainCareAdmin = ({ open, handleClose }) => {
  const onClickClose = () => {
    handleClose();
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 "
      onClick={onClickClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg md:w-[555px] w-[330px] h-[300px] overflow-y-auto flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-lg text-purple-600">
            ZainCare Admin Panel
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
            {" "}
            <span className="font-semibold text-base">Description:</span> The
            Admin Panel is designed for managing the operations behind the
            ZainCare platform — it helps admins and staff track leads, manage
            bookings, assign lab partners, and monitor overall workflow.
          </p>
          <p>
            <span className="font-semibold text-base">Key Features:</span> Lead
            Management, Trainer / Lab Partner Assignments, Status Tracking,
            Analytics and Dashboards
          </p>
          <p>
            {" "}
            <span className="font-semibold text-base">Tech stack:</span> React,
            Zustand, TailwindCSS, NodeJs, ExpressJs, MySql
          </p>
          <p>
            <span className="font-semibold text-base">Preview:</span>{" "}
            <a
              href="https://admin.zaincare.com/login"
              className="text-blue-500 underline"
              target="_blank"
            >
              https://admin.zaincare.com/login
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZainCareAdmin;
