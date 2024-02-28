import React from "react";

function Header() {
  return (
    <div className="flex flex-row items-cente mt-6 bg-white border-black border-b ">
      <div className="flex justify-center items-center w-full mb-4 gap-4">
        <h1 className="text-[#00d089] text-2xl font-bold">TestValley</h1>
        <h1 className="text-[#00d089] mt-2">카테고리</h1>
      </div>
      <div className="relative flex justify-center w-full mb-4">
        <input
          className="w-full max-w-md px-4 py-2 border rounded-md pl-10"
          placeholder="Search..."
        />
      </div>
      <div className="flex justify-center w-full">
        <h1>로그인 / 회원가입</h1>
      </div>
    </div>
  );
}

export default Header;
