import React, { useEffect, useState } from 'react'
import { Service } from '../sevices/data';
import { favourite, katta } from '../../icons';
import { BounceLoader } from 'react-spinners';

const ScoreEvent = ({ id, nowDate, setIsLoading }) => {
    const [fetchData, setFatchData] = useState([])
    useEffect(() => {
        const getData = async (ids) => {
            try {
                const events = await Service.getEvents(nowDate, nowDate, ids);
                if (events.length > 0) {
                    setFatchData(events);
                }
            } catch (err) {
                console.error(err);
            }
        };
        getData(id);
        //eslint-disable-next-line
    }, []);
    return (
        <div>
            {fetchData?.map(item => (
                <div key={crypto.randomUUID()} className='p-2'>
                    <div className='flex items-center  justify-between pb-1 px-2'>
                        <div className='flex items-center gap-x-2'>
                            <img width={30} height={30} src={item?.league_logo} alt={item?.league_name} />
                            <div className=''>
                                <p className='font-bold text-base'>{item?.league_name}</p>
                                <p className='text-sm'>{item?.country_name}</p>
                            </div>
                        </div>
                        <div>
                            <img src={katta} alt="" className='cursor-pointer' />
                        </div>
                    </div>
                    <div className='relative flex items-center justify-between pb-1 bg-club_color rounded-lg px-2 my-2 hover:bg-hover_club_color'>
                        <div className={`${(item?.match_live !== 1) && "hidden"} absolute w-[5px] h-[50px] bg-[#8f00ff] rounded-tr-3xl rounded-br-3xl pr-2`}></div>
                        <div className='flex items-center gap-2 pl-5'>
                            <p>{item?.match_time}</p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <img width={30} src={item?.team_away_badge} alt="" />
                                    <p>{item?.match_awayteam_name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img width={30} src={item?.team_home_badge} alt="" />
                                    <p>{item?.match_hometeam_name}</p>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <div className={` flex flex-col justify-center gap-3 `}>
                                <p className='text-xl '>{item?.match_awayteam_score}</p>
                                <p className='text-xl '>{item?.match_hometeam_score}</p>
                            </div>
                            <img src={favourite} alt="" className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScoreEvent