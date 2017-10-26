import { geoLocation } from './geolocation';
import { timeSlot } from './timeslot';
export interface SignUpOptions{
    username:string,
    email?:string,
    mobile?:string,
    password:string,
    repassword?:string,
    role?:string,
    avatar?:string,
    location?:geoLocation,
    timeSlot?:timeSlot

}
