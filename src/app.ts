import "dotenv/config";
import enLang from "../assets/locales/en.json";
import arLang from "../assets/locales/ar.json";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import corsConfig from "./configs/cors";
import routesConfig from "./configs/router";
import i18next from "i18next";
import i18nextMiddleware from "i18next-http-middleware";

i18next.use(i18nextMiddleware.LanguageDetector).init({
  preload: ["en", "ar"],
  fallbackLng: "en",
  detection: { lookupHeader: "lang" },
  resources: {
    en: {
      translation: enLang,
    },
    ar: {
      translation: arLang,
    },
  },
});

const app: Application = express();
const { PORT } = process.env;

// config middlewares
app.use(express.json());
app.use(cors(corsConfig));
app.use(i18nextMiddleware.handle(i18next));

// load routes
routesConfig(app);

app.get("/login", (req, res) => {
  const message = req.t("commons.test");
  console.log("index", { message });
  res.json({ message });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(500).send("Something broke!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
