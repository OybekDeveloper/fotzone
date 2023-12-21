import React, { useEffect } from 'react'
import { calendar, live } from '../../icons'
import { favourite, katta } from '../../icons'
import './scores.scss'
import { Service } from '../sevices/data'
const live_data = [
  // {day:'MON',date:"14 DEC"}, 
  { id:1, day: 'TUE', date: "15 DEC" },
  { id:2, day: 'WED', date: "16 DEC" },
  { id:3, day: 'Today', date: "19 DEC" },
  { id:4, day: 'THU', date: "17 DEC" },
  { id:5, day: 'FRI', date: "18 DEC" },
  // {day:'SUN',date:"20 DEC"},
],
  leauge_data = [
    {
      id: 1,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 2,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 3,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 4,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 5,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 6,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 7,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 8,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
    {
      id: 9,
      liga_name: 'Premier League',
      liga_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1200px-Flag_of_England.svg.png',
      country: "England",
      matches: [
        {
          live: false,
          favourite: false,
          match_id: 1,
          hour: "20:00",
          club1_name: "Nottingham Forest",
          club1_logo: 'https://lsm-static-prod.livescore.com/high/enet/10203.png',
          club1_score: 1,
          club2_name: "Tottenham Hotspur",
          club2_logo: 'https://lsm-static-prod.livescore.com/high/enet/8586.png',
          club2_score: 3,

        },
      ]
    },
  ],
  new_data = [
    {
      id: 1,
      popular: true,
      img: 'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100',
      title: 'Ritchie desperate to make most of return to Toon fold'
    },
    {
      id: 2,
      popular: false,

      img: 'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100',
      title: 'Ritchie desperate to make most of return to Toon fold'
    },
    {
      id: 3,
      popular: false,
      img: 'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100',
      title: 'Ritchie desperate to make most of return to Toon fold'
    },
    {
      id: 4,
      popular: false,
      img: 'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100',
      title: 'Ritchie desperate to make most of return to Toon fold'
    },
    {
      id: 5,
      popular: false,
      img: 'https://uk1.sportal365images.com/process/smp-image-api/livescore.com/15122023/38380493-f8ab-46ee-a85f-9015c75ce6cc.jpg?operations=fit(707:)&w=707&quality=100',
      title: 'Ritchie desperate to make most of return to Toon fold'
    },
  ]

const Scores = () => {
  useEffect(()=>{
    const getData=async()=>{
      try{
        const response = await Service.getEvents('2023-04-05','2023-04-05',152);
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    getData()
  },[])
  return (
    <div className='scores flex w-full  '>
      <div className="w-2/3 max-lg:w-full shadow-border py-[5px] ">
        <div className="calendar flex justify-between items-center p-2 font-bold">
          <img src={live} alt="live" width={50} />
          {/* calendar section */}
          {live_data.map((item) => (
            <div key={item.id} className={`flex items-center flex-col cursor-pointer ${item.id===3 && 'text-main_color '}`}>
              <p className='text-[15px]'>{item.day}</p>
              <p className='text-[11px]'>{item.date}</p>
            </div>
          ))}
          <img width={30} src={calendar} alt="calendar" />
        </div>
        <div>
          {/* ligalar section */}
          {leauge_data.map((item) => (
            <div key={item.id} className='p-2'>
              <div className='flex items-center  justify-between pb-1 px-2'>
                <div className='flex items-center gap-x-2'>
                  <img width={30} height={30} src={item.liga_logo} alt={item.liga_name} />
                  <div className=''>
                    <p className='font-bold text-base'>{item.liga_name}</p>
                    <p className='text-sm'>{item.country}</p>
                  </div>
                </div>
                <div>
                  <img src={katta} alt="" className='cursor-pointer' />
                </div>
              </div>
              <div className='flex items-center justify-between pb-1 bg-club_color rounded-lg px-2 my-2 hover:bg-hover_club_color'>
                <div className='flex items-center'>
                  <p>{item.matches[0].hour}</p>
                  <div className='flex  flex-col'>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club1_logo} alt="" />
                      <p>{item.matches[0].club1_name}</p>
                    </div>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club2_logo} alt="" />
                      <p>{item.matches[0].club2_name}</p>
                    </div>
                  </div>
                </div>
                <img src={favourite} alt="" className='cursor-pointer' />
              </div>
              <div className='flex items-center justify-between pb-1 bg-club_color rounded-lg px-2 my-2 hover:bg-hover_club_color'>
                <div className='flex items-center'>
                  <p>{item.matches[0].hour}</p>
                  <div className='flex  flex-col'>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club1_logo} alt="" />
                      <p>{item.matches[0].club1_name}</p>
                    </div>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club2_logo} alt="" />
                      <p>{item.matches[0].club2_name}</p>
                    </div>
                  </div>
                </div>
                <img src={favourite} alt="" className='cursor-pointer' />
              </div>
              <div className='flex items-center justify-between pb-1 bg-club_color rounded-lg px-2 my-2 hover:bg-hover_club_color'>
                <div className='flex items-center'>
                  <p>{item.matches[0].hour}</p>
                  <div className='flex  flex-col'>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club1_logo} alt="" />
                      <p>{item.matches[0].club1_name}</p>
                    </div>
                    <div className='flex items-center'>
                      <img width={30} src={item.matches[0].club2_logo} alt="" />
                      <p>{item.matches[0].club2_name}</p>
                    </div>
                  </div>
                </div>
                <img src={favourite} alt="" className='cursor-pointer' />
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* news section */}
      <div className="w-1/3 ml-[15px] shadow-border max-lg:hidden">
        <div className='flex flex-row items-center justify-start px-2 pt-2 gap-x-2 cursor-pointer' >
          <p className='text-base font-bold'>Featured News</p>
          <img src={katta} alt="" />
        </div>
        {new_data.map(item => (
          <div key={item.id} className='p-2 relative'>
            {item.popular && 
              <div key={item.id}>
                <p className='text-sm text-black cursor-pointer top-5  left-5 font-bold bg-main_color z-20 absolute rounded-sm px-2 w-[100px]'>EXCLUSIVE</p>
              </div>    
            }
            
            <div className='relative'><img src={item.img} alt='logo' /></div>
            <p className='font-bold absolute z-10 bottom-4 text-white'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scores