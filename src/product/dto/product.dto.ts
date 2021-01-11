import { IsString, IsInt } from 'class-validator';

export class ProductDto {

    @IsString()
    readonly title: string;
    
    @IsString()
    readonly description: string;
    
    @IsString()
    readonly link: string; // web page
    
    @IsString()
    readonly price: string; // decimal(10, 2)
    
    @IsString()
    readonly currency: string; // ISO 4217 currency code
    
    @IsInt()
    readonly quantity: number;
    
    @IsString()
    readonly brand: string; // Brand name
    
    @IsString()
    readonly color: string; // ex: black, white, pink, etc...
    
    @IsString()
    readonly gender: string; // enum: male, female, unisex
    
    @IsString()
    readonly gtin?: string; // global item trade number
    
    @IsString()
    readonly mpn?: string; // manufacturer part number
    
    @IsString()
    readonly condition: string; // enum: "new", "used"

}
