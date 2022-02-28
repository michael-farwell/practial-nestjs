import { Body, Controller, Get, Post, Redirect, Render } from "@nestjs/common";
import { Product }                                       from "../../models/product.entity";
import { ProductsService }                               from "../../services/products.service";

@Controller("/admin/products")
export class AdminProductsController {
  constructor (private readonly productsService: ProductsService) {}

  @Get("/")
  @Render("admin/products/index")
  async index () {
    const viewData = [];
    viewData["title"] = "Admin Page - Admin - Online Store";
    viewData["products"] = await this.productsService.findAll();
    return {
      viewData,
    };
  }

  @Post("/store")
  @Redirect("/admin/products")
  async store (@Body() body) {
    const newProduct = new Product();
    newProduct.setName(body.name);
    newProduct.setDescription(body.description);
    newProduct.setPrice(body.price);
    newProduct.setImage("game.png");
    await this.productsService.createOrUpdate(newProduct);
  }
}