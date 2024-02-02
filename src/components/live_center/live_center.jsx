import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { katta, search } from '../../icons';
import { getCountry, getSearchValue } from '../../reducer/redux/countrySlice';
import { useEffect } from 'react';
import Loader from '../../loader/loader';

const LiveCenter = ({ defaultCountry }) => {
  const location = useLocation();
  const { filterSearch, searchValue, isLoading } = useSelector(state => state.country);
  const dispatch = useDispatch();
  const handleSearchValue = (e) => {
    dispatch(getSearchValue(e.target.value))
  }
  return (
    <div
      className={`live-center w-1/4 shadow-border px-4 max-lg:hidden ${(location.pathname === '/news' || location.pathname === '/get_app') && "hidden"}`}
    >
      <div className="search flex justify-center p-2">
        <img src={search} alt="" />
        <input
          className="search_input font-bold"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchValue}
        />
      </div>
      {/* Region section */}
      <div className="">
        <div className="flex items-center justify-between py-3">
          <p className="text-[13px] font-bold">REGION</p>
          <img src={katta} alt="" />
        </div>
        {isLoading ? (<Loader />) : (
          (searchValue ? filterSearch : defaultCountry)?.map((item) => (
            <Link key={crypto.randomUUID()} to={`/country/${item?.country_id}`}>
              <div
                key={item?.country_id}
                className="flex items-center gap-x-2 p-2 bg-club_color m-1 rounded-md hover:bg-hover_club_color cursor-pointer "
              >
                <img
                  width={30}
                  src={item?.country_logo}
                  alt={item?.country_name}
                />
                <p className="">{item?.country_name}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default LiveCenter