import { format } from 'date-fns'; 

export function grabJSDate(date){
    return format(date, 'MM-dd-yyyy')
}

export function grabJSDateTime(date){
    return format(date, 'hh:mm a')
}