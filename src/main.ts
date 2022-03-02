import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as session from "express-session";
import * as hbs from "hbs";
import * as hbsUtils from "hbs-utils";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("hbs");
  hbs.registerPartials(join(__dirname, "..", "views/layouts"));
  hbsUtils(hbs)
    .registerWatchedPartials(join(__dirname, "..", "views/layouts"));

  app.use(session({
    secret: "nest-book",
    resave: false,
    saveUninitialized: false,
  }));
  app.use(function (req, res, next) {
    res.locals.session = req.session;

    const flashErrors: string[] = req.session.flashErrors;
    if (flashErrors) {
      res.locals.flashErrors = flashErrors;
      req.session.flashErrors = null;
    }

    next();
  });

  await app.listen(3000);
}

bootstrap();
