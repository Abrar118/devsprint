import React from "react";
import "./MainDash.css";

import { FaSearch } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { RiProjectorFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { GiElectricalResistance } from "react-icons/gi";
import { BsBuildingFillGear } from "react-icons/bs";
import { LuArrowDownUp } from "react-icons/lu";

const categoryStats = [
  {
    Icon: FaComputer,
    title: "CSE",
    count: 56,
  },
  {
    Icon: HiMiniWrenchScrewdriver,
    title: "ME",
    count: 25,
  },
  {
    Icon: GiElectricalResistance,
    title: "EEE",
    count: 7,
  },
  {
    Icon: BsBuildingFillGear,
    title: "CE",
    count: 26,
  },
];

const MainDash = () => {
  const user = JSON.parse(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  return (
    <section className="main-dashboard">
      <div className="left-portion">
        <div className="welcome-bar">
          <h1 className="welcome-text">Welcome {user.name},</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className="upper-stats">
          <div className="project-count">
            <h2>
              <RiProjectorFill /> My projects: <span>11</span>
            </h2>
            <h2>
              <FaCodePullRequest /> Total Contributions: <span>77</span>
            </h2>
          </div>

          <div className="category-stats">
            {categoryStats.map((category) => (
              <CategoryStatCard
                key={category.title}
                Icon={category.Icon}
                title={category.title}
                count={category.count}
              />
            ))}
          </div>
        </div>

        <div className="lower-stats">
          <ConnectionList />
          <MyContributions />
        </div>
      </div>
    </section>
  );
};

export const CategoryStatCard = ({ Icon, title, count }) => {
  return (
    <div className="category-stat-card">
      <div className="cat-stat-icon">
        <LuArrowDownUp />
      </div>
      <h2>
        <Icon />
      </h2>
      <h2>{count}</h2>
    </div>
  );
};

export const ConnectionList = () => {
  return (
    <div className="connection-list">
      <h1>Connections</h1>
    </div>
  );
};

export const MyContributions = () => {
  return (
    <div className="my-contributions">
      <h1>My Contributions</h1>
    </div>
  );
};

export default MainDash;
