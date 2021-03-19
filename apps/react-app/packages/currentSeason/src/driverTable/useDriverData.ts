import { useEffect, useState } from 'react';
import { fetchDriverCurrent } from '../api/fetchCurrentSeason';
import { DriverTableItem } from './types';

export default function useDriverData() {
    const [loading, setLoading] = useState(false);
    const [dataDriver, setDataDriver] = useState<DriverTableItem[]>([]);

    useEffect(() => {
        setLoading(true);
        fetchDriverCurrent()
            .then((response) => {
                setDataDriver(
                    response.map((el) => {
                        return {
                            position: el.position,
                            racer: `${el.Driver.givenName} ${el.Driver.familyName}`,
                            constructor: el.Constructors[0].name,
                            points: el.points,
                            wins: el.wins,
                        };
                    }),
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return { dataDriver, loading };
}
