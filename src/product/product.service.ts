import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    
    // GET ALL PRODUCTS
    async findAll(): Promise<Product[]> {
        return await this.productModel.find();
    }

    // GET PRODUCT BY ID
    async findOne(id:string): Promise<Product> {
        return await this.productModel.findOne({_id: id});
    }

    // ADD PRODUCT  
    async create(product: Product): Promise<Product> {
        const newProduct = new this.productModel(product);
        return await newProduct.save();
    }

    // UPDATE PRODUCT
    async update(id: string, product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, product);
    }

    // DELETE PRODUCT BY ID
    async delete (id: string): Promise<Product> {
        return await this.productModel.findByIdAndRemove(id);
    }

}
