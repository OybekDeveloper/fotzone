import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Service } from '../sevices/data';
import Leagues from '../leagues/leagues';

const CountryTemplate = () => {
    const [team,setTeam]=useState([]);
    const {id} = useParams()
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await Service.getCompetitions(id);
                setTeam(response);
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, [id]);
    return (
        <div>
            {team.map((item) => (
               <Leagues key={crypto.randomUUID()} props={{...item}} />
            ))}
        </div>
    )
}

export default CountryTemplate