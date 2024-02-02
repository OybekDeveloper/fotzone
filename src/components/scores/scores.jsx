import { calendar, katta, live } from "../../icons";
import "./scores.scss";
import ScoreEvent from "./score-event";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";
import Loader from "../../loader/loader";
const live_data = [
  // {day:'MON',date:"14 DEC"},
  { id: 1, day: "TUE", date: "15 DEC" },
  { id: 2, day: "WED", date: "16 DEC" },
  { id: 3, day: "Today", date: "19 DEC" },
  { id: 4, day: "THU", date: "17 DEC" },
  { id: 5, day: "FRI", date: "18 DEC" },
  // {day:'SUN',date:"20 DEC"},
],
  new_data = [
    {
      id: 1,
      popular: true,
      img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100",
      title: "Ritchie desperate to make most of return to Toon fold",
    },
    {
      id: 2,
      popular: false,

      img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100",
      title: "Ritchie desperate to make most of return to Toon fold",
    },
    {
      id: 3,
      popular: false,
      img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100",
      title: "Ritchie desperate to make most of return to Toon fold",
    },
    {
      id: 4,
      popular: false,
      img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100",
      title: "Ritchie desperate to make most of return to Toon fold",
    },
    {
      id: 5,
      popular: false,
      img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100",
      title: "Ritchie desperate to make most of return to Toon fold",
    },
  ];

const leagues = [
  { id: 335 },
  { id: 278 },
  { id: 332 },
  { id: 344 },
  { id: 153 },
  { id: 147 },
  { id: 152 },
  { id: 300 },
  { id: 302 },
  { id: 207 },
  { id: 206 },
  { id: 205 },
  { id: 175 },
  { id: 168 },
  { id: 322 },
  { id: 266 },
  { id: 3 },
  { id: 4 },
];

const Scores = () => {
  const { isLoading } = useSelector(state => state.country)
  const date = new Date();
  const nowDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const nextDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    (date.getDate() + 1);
  return (
    <div className="scores flex w-full  ">
      <div className="w-2/3 max-lg:w-full shadow-border py-[5px] ">
        <div className="calendar flex justify-between items-center p-2 font-bold">
          <img src={live} alt="live" width={50} />
          {/* calendar section */}
          {live_data.map((item) => (
            <div
              key={item.id}
              className={`flex items-center flex-col cursor-pointer ${item.id === 3 && "text-main_color "
                }`}
            >
              <p className="text-[15px]">{item.day}</p>
              <p className="text-[11px]">{item.date}</p>
            </div>
          ))}
          <img width={30} src={calendar} alt="calendar" />
        </div>
        <div>
          {/* ligalar section */}
          {isLoading ? (
            <Loader />
          ) : (
            leagues?.map((item) => (
              <ScoreEvent
                nowDate={nowDate}
                nextDate={nextDate}
                id={item.id}
                key={item.id}
              />
            ))
          )}
        </div>
      </div>
      {/* news section */}
      <div className="w-1/3 ml-[15px] shadow-border max-lg:hidden">
        <div className="flex flex-row items-center justify-start px-2 pt-2 gap-x-2 cursor-pointer">
          <p className="text-base font-bold">Featured News</p>
          <img src={katta} alt="" />
        </div>
        {new_data?.map((item) => (
          <div key={item.id} className="p-2 relative">
            {item.popular && (
              <div key={item.id}>
                <p className="text-sm text-black cursor-pointer top-5  left-5 font-bold bg-main_color z-20 absolute rounded-sm px-2 w-[100px]">
                  EXCLUSIVE
                </p>
              </div>
            )}

            <div className="relative">
              <img src={item.img} alt="logo" />
            </div>
            <p className="font-bold absolute z-10 bottom-4 text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;
