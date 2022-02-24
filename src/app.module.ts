import { Module }             from "@nestjs/common";
import { TypeOrmModule }      from "@nestjs/typeorm";
import { AppController }      from "./app.controller";
import { ProductsController } from "./controllers/products.controller";
import { Product }            from "./models/product.entity";
import { ProductsService }    from "./services/products.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
