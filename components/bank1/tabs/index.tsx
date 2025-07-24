"use client";
import Image from "next/image";
import { useState } from "react";

// Define sport names as a union type
type Sport = "축구" | "농구" | "야구" | "아이스하키" | "배구" | "LOL";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const initialDropdownState: Record<Sport, boolean> = {
    축구: false,
    농구: false,
    야구: false,
    아이스하키: false,
    배구: false,
    LOL: false,
  };

  const [dropdownOpen, setDropdownOpen] = useState(initialDropdownState);
  const [secondDropdownOpen, setSecondDropdownOpen] =
    useState(initialDropdownState);

  const sports: Sport[] = ["축구", "농구", "야구", "아이스하키", "배구", "LOL"];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setDropdownOpen(initialDropdownState);
    setSecondDropdownOpen(initialDropdownState);
  };

  const handleSportClick = (sport: Sport) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  const handleSingaporeClick = (sport: Sport) => {
    setSecondDropdownOpen((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  const renderSportsList = () => (
    <div className="flex flex-col">
      {sports.map((sport, index) => (
        <div key={sport}>
          <div
            className="flex flex-row gap-2 justify-between p-2 bg-zinc-900 text-white py-2 align-middle items-center hover:[box-shadow:inset_0_0_8px_#f59e0b] cursor-pointer"
            onClick={() => handleSportClick(sport)}
          >
            <div className="flex flex-row gap-2 align-middle items-center">
              <Image
                src={`/icon_sidebar/icon_${index + 1}.png`}
                width={20}
                height={20}
                alt={sport}
              />
              <div>{sport}</div>
            </div>
            <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
              121
            </p>
          </div>

          {dropdownOpen[sport] && (
            <div className="bg-zinc-900/70 p-2 text-white">
              <div
                onClick={() => handleSingaporeClick(sport)}
                className="cursor-pointer"
              >
                싱가포르 (1)
              </div>

              {secondDropdownOpen[sport] && (
                <div className="bg-zinc-900/50 p-2 mt-2 text-white">
                  <div>Additional Info for 싱가포르</div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex">
        {["스포츠", "실시간", "미니게임"].map((title, i) => (
          <button
            key={title}
            className={`flex-1 p-1 text-center ${
              activeTab === i
                ? "bg-[#222222] text-white text-lg"
                : "bg-[#2d2d2d] hover:[box-shadow:inset_0_0_8px_#f59e0b] text-lg"
            }`}
            onClick={() => handleTabChange(i)}
          >
            <div>{title}</div>
            <div className="text-sm text-yellow-500">123</div>
          </button>
        ))}
      </div>

      {activeTab === 0 && renderSportsList()}
      {activeTab === 1 && renderSportsList()}
      {activeTab === 2 && renderSportsList()}
    </div>
  );
}
