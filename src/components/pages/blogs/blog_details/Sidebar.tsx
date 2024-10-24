

import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="basis-[33%]">
      <h5 className="text-xl font-bold">Search</h5>
      <div className="h-[2px] bg-slate-400">
        <div className="h-full w-[100px] bg-primary"></div>
      </div>
      <Search />
    </div>
  );
};

export default Sidebar;
