import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { favourites, news, scores } from "../icons/index.js";
import { useAnimation } from "framer-motion";
import { Service } from "../components/sevices/data.js";
import { filterCountry, getCountry } from "../reducer/redux/countrySlice.js";
import { useDispatch, useSelector } from "react-redux";
import "./app.scss";
import { CountryTemplate, Favourites, GetApp, LiveCenter, Navbar, Navbar2, News, Scores } from "../components/index.js";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchValue, defaultCountry } = useSelector(state => state.country)
  const controls = useAnimation();
  const dispatch = useDispatch();


  useEffect(() => {
    const getData = async () => {
      try {
        const respose = await Service.getCountries();
        dispatch(getCountry(respose));
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(filterCountry())
    //eslint-disable-next-line
  }, [searchValue])
  const handleItemClick = () => {
    controls.start({
      x: isOpen ? "100%" : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setIsOpen(true);
  };
  return (
    <div className="app  mx-auto px-4 relative">
      <Navbar2 isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar handleItemClick={handleItemClick} isOpen={isOpen} />

      <div
        className={`mb-[60px] main flex gap-[17px] pt-[60px] ${isOpen && "dimmed-background"
          }`}
      >
        <LiveCenter defaultCountry={defaultCountry} />
        <Routes className="w-3/4 ">
          <Route path="/" element={<Scores />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/news" element={<News />} />
          <Route path="/country/:id" element={<CountryTemplate />} />
          <Route path="/get_app" element={<GetApp />} />
        </Routes>
      </div>
      <div
        className={` max-lg:flex hidden justify-around fixed ${isOpen && "dimmed-background"
          } z-[999] bottom-0 bg-background w-full left-0 px-2 h-[60px]`}
      >
        <div className="flex items-center gap-x-2">
          <img src={scores} alt="scores" />
          <p className="text-base">Scores </p>
        </div>
        <div className="flex items-center gap-x-2">
          <img src={favourites} alt="favourites" />
          <p className="text-base">Favourites </p>
        </div>
        <div className="flex items-center gap-x-2">
          <img src={news} alt="news" />
          <p className="text-base">News </p>
        </div>
      </div>
    </div>
  );
};

export default App;
