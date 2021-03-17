import { useEffect, useState } from 'react';
import { fetchCircuits } from '../api';
import { CircuitTableItem } from './types';

export default function useCircuitData() {
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<CircuitTableItem[]>([]);

    useEffect(() => {
        setLoading(true);
        fetchCircuits()
            .then((response) => {
                setData(
                    response.map((el) => {
                        return {
                            id: el.circuitId,
                            circuitName: el.circuitName,
                            locality: el.Location.locality,
                            country: el.Location.country,
                        };
                    }),
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, loading };
}
