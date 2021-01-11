import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service'
import { Product } from './schemas/product.schema'
import { ValidationPipe } from './validation/validation.pipe'

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    // GET ALL PRODUCTS
    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    // GET PRODUCT BY ID
    @Get(':id')
    findOne(@Param('id') id): Promise<Product> {
        return this.productService.findOne(id);
    }

    // ADD PRODUCT  
    @Post()
    create(@Body(new ValidationPipe()) productDto: ProductDto): Promise<Product> {
        return this.productService.create(productDto);
    }

    // UPDATE PRODUCT
    @Put(':id')
    update(@Body(new ValidationPipe()) productDto: ProductDto, @Param('id') id): Promise<Product> {
        return this.productService.update(id, productDto)
    }
    
    // DELETE PRODUCT BY ID
    @Delete(':id')
    delete(@Param('id') id): Promise<Product> {
        return this.productService.delete(id);
    }
    
}
