import { RootObject } from './types';

export async function fetchCircuits() {
    const response = await fetch('https://ergast.com/api/f1/circuits.json');
    const data = (await response.json()) as RootObject;
    return data.MRData.CircuitTable.Circuits;
}
