import React from "react";

import Image from "next/image";

const TeacherDetail = () => {
  return (
    <div className="flex-1 p-4 flex flex-col  gap-4 xl:flex-row ">
      {/* left */}
      <div className="basis-2/3">
        {/* top */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* user card */}
          <div className="bg-blue-200 p-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>

            <div className="bg-red-200 flex flex-col w-2/3 justify-between">
              <h1 className="text-xl font-semibold">Ahmat Randy</h1>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate odit voluptate ipsa{" "}
              </p>

              <div className=" text-xs font-medium flex bg-red-400 justify-between items-center flex-wrap gap-2">
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center  ">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="flex md:w-1/3 gap-2 w-full items-center ">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small Card */}
          <div>oke</div>
        </div>

        {/* btom */}
        <div>scheduled</div>
      </div>
      {/* rigth */}
      <div className="basis-1/3">r</div>
    </div>
  );
};

export default TeacherDetail;
