import { EntityType } from "./entity-type.model"

export interface EntityBase {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
}

export type Entity<T> = EntityBase & {
    [key in EntityType]: T
}