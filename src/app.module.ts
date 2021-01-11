import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product/schemas/product.schema'

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI), ProductModule, MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
