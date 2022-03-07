import { Module } from "@nestjs/common";
import { CartController } from "./controllers/cart.controller";

@Module({
  controllers: [CartController],
})

export class CartModule {}