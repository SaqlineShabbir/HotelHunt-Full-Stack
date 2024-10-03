const ProfileInfo = ({ session }) => {
  return (
    <div className="flex flex-col items-center py-[200px] text-center">
      <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-green-500 grid place-items-center text-4xl text-white">
        {session?.user?.name.slice(0, 1)}
      </div>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">
          {session?.user?.name}
        </h3>
        <p className="leading-[231%] lg:text-lg"> {session?.user?.email}</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
