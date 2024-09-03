import React from "react";
import { Link } from "react-router-dom";

import { GrUpdate } from "react-icons/gr";
import { RiProgress2Line } from "react-icons/ri";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { GrDocumentExcel } from "react-icons/gr";
const BoardBox = () => {
  return (
    <div className="grid  grid-cols-2 gap-2 ">
      <div className="bg-emerald-200 rounded-xl">
        <Link to="" className=" flex items-center justify-center md:justify-start  md:ml-10 p-2 ">
          <span className="size-10 bg-slate-200 grid justify-center items-center rounded-full mt-1">
            <GrUpdate className="size-6" />
          </span>
          <p className="pl-1 text-[16px] font-bold">On Going</p>
        </Link>
        <h1 className="mt-[-14px] pl-10 pb-3 pt-2 text-[15px] font-medium">
          12 task
        </h1>
      </div>

      <div className="bg-yellow-200 rounded-xl">
        <Link to="" className=" flex items-center justify-center md:justify-start  md:ml-10 p-2 ">
          <span className="size-10 bg-slate-200 grid justify-center items-center rounded-full mt-1">
            <RiProgress2Line className="size-6 " />
          </span>
          <p className="pl-1 text-[16px] font-bold">In Process</p>
        </Link>
        <h1 className="mt-[-14px]  pl-10 pb-3 pt-2 text-[15px] font-medium">
          1 september
        </h1>
      </div>
      <div className="bg-indigo-200 rounded-xl">
        <Link to="" className="flex items-center justify-center md:justify-start  md:ml-10 p-2">
          <span className="size-10 bg-slate-200 grid justify-center items-center rounded-full mt-1">
            <HiOutlineDocumentCheck className="size-6" />
          </span>
          <p className="pl-1 text-[16px] font-bold">Complete</p>
        </Link>
        <h1 className="mt-[-14px] pl-10 pb-3 pt-2 text-[15px] font-medium">
          12 task
        </h1>
      </div>
      <div className="bg-red-200 rounded-xl">
        <Link to="" className=" flex items-center justify-center md:justify-start  md:ml-10 p-2 ">
          <span className="size-10 bg-slate-200 grid justify-center items-center rounded-full mt-1">
            <GrDocumentExcel className="size-6" />
          </span>
          <p className="pl-1 text-[16px] font-bold">Canceled</p>
        </Link>
        <h1 className="mt-[-14px]  pl-10 pb-3 pt-2 text-[15px] font-medium">
          12 task
        </h1>
      </div>
    </div>
  );
};

export default BoardBox;
