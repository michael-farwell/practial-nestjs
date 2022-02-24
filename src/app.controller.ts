import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Render("index")
  index () {
    let viewData = [];
    viewData["title"] = "Home Page - Online Store";
    return {
      viewData,
    };
  }


  @Get("/about")
  @Render("about")
  about () {
    let viewData = [];
    viewData["title"] = "About us - Online Store";
    viewData["subtitle"] = "About us";
    viewData["description"] = "This is an about page...";
    viewData["author"] = "Developed by: Michael Farwell";
    return {
      viewData,
    };
  }
}
