import { NumberValueAccessor } from '@angular/forms';

export interface DataWeather
{
    name ?: string;
    cod ?: number;
    temp ?: string;
    main ?: string;
    description ?: string;  
    icon ?: string;
    minMaxTemp ?: MinMaxInterface    
}

interface MinMaxInterface
{
    date ?: number;
    day ?: Number;
    month ?: number;
    min ?: number;
    max ?: number;
}