export interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

export interface CircuitTable {
    Circuits: Circuit[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    CircuitTable: CircuitTable;
}

export interface RootObject {
    MRData: MRData;
}
