import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminModule } from "./admin/admin.module";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { CartModule } from "./cart/cart.module";
import { ProductsController } from "./controllers/products.controller";
import { Order } from "./models/order.entity";
import { Product } from "./models/product.entity";
import { User } from "./models/user.entity";
import { OrdersService } from "./services/orders.service";
import { ProductsService } from "./services/products.service";
import { UsersService } from "./services/users.service";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product, User, Order]),
    AdminModule,
    AuthModule,
    CartModule,
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, UsersService, OrdersService],
  exports: [ProductsService, UsersService, OrdersService],
})
export class AppModule {}
