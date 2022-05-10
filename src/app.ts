import express from "express";
import morgan from "morgan";
import path from "path";
import { create } from "express-handlebars";
import { PORT } from "./config";

// Routes
import usersRoutes from "./routes/users.routes";

export class Applicaction {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.settings();
    this.routes();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this
  }
  //Applying basic configurations
  settings(){
    this.app.set("views", path.join(__dirname, "views"));
    this.app.engine(
      ".hbs",
      create({
        layoutsDir: path.join(this.app.get("views"), "users"),
        defaultLayout: "list",
        extname: ".hbs",
      }).engine
    );
    this.app.set("view engine", ".hbs");
  }

  routes() {
    this.app.use("/users", usersRoutes);
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  start(): void {
    this.app.listen(PORT, () => {
      console.log("Server is running at", PORT);
    });
  }
}