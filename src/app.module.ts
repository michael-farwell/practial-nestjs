import { Global, Module }     from "@nestjs/common";
import { TypeOrmModule }      from "@nestjs/typeorm";
import { AdminModule }        from "./admin/admin.module";
import { AppController }      from "./app.controller";
import { ProductsController } from "./controllers/products.controller";
import { Product }            from "./models/product.entity";
import { ProductsService }    from "./services/products.service";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product]),
    AdminModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class AppModule {}
