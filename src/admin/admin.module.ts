import { Module }                  from "@nestjs/common";
import { AdminController }         from "./controllers/admin.controller";
import { AdminProductsController } from "./controllers/admin.products.controller";

@Module({
  controllers: [AdminController, AdminProductsController],
})

export class AdminModule {
}