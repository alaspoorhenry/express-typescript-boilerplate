import Express, { RequestHandler, Router } from "express";

export type ServerOptions = {
  port: number;
  middlewares: RequestHandler[];
  routers: Router[];
};

export class Server {
  private readonly app = Express();

  constructor(private readonly serverOptions: ServerOptions) {
    this.initializeApp();
  }

  private initializeMiddleware(): void {
    this.serverOptions.middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private initializeRoutes(): void {
    this.serverOptions.routers.forEach(route => {
      this.app.use("/", route);
    });
  }

  private initializeApp(): void {
    this.initializeMiddleware();
    this.initializeRoutes();
  }

  public getApp() {
    return this.app;
  }

  public listen(customMessageOnStart?: string): void {
    const { port } = this.serverOptions;

    this.app.listen(port, () => {
      console.log(
        customMessageOnStart || `Server is up and running on port: ${port}`
      );
    });
  }
}
