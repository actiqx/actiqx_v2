import { geoLocation } from './geolocation';

export interface Posttask{
    info:string,
    categories:string,
    address:geoLocation,
    myDate:string
}