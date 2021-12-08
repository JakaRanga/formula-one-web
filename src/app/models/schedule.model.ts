import { EntityType } from "./entity-type.model";

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
    location: Location;
}

export interface Schedule {
    season: string;
    round: string;
    url: string;
    raceName: string;
    circuit: Circuit;
    date: string;
    time: string;
}

export type SeasonSchedule = {
    [key in EntityType]: Schedule[]
} & { season: string }