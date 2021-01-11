import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  link: string;

  @Prop()
  price: string;

  @Prop()
  currency: string;

  @Prop()
  quantity: number;

  @Prop()
  brand: string;

  @Prop()
  color: string;

  @Prop()
  gender: string;

  @Prop()
  gtin?: string;

  @Prop()
  mpn?: string;

  @Prop()
  condition: string;
  
}

export const ProductSchema = SchemaFactory.createForClass(Product);
