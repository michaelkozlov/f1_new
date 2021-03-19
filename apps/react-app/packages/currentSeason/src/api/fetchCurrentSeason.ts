import { DataSheduleRace } from './typesSheduleRace';
import { DataDrivers } from './typesDrivers';
import { DataConstructors } from './typesConstructor';

export async function fetchRaceSheduleCurrent() {
    const response = await fetch('https://ergast.com/api/f1/circuits.json');
    const data = (await response.json()) as DataSheduleRace;
    return data.MRData.RaceTable.Races;
}

export async function fetchDriverCurrent() {
    const response = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
    const data = (await response.json()) as DataDrivers;
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

export async function fetchConstructorCurrent() {
    const response = await fetch('http://ergast.com/api/f1/current/constructorStandings.json');
    const data = (await response.json()) as DataConstructors;
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}
