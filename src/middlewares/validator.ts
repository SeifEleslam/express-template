import vine, { SimpleMessagesProvider } from "@vinejs/vine";
import { NextFunction, Request, Response } from "express";

export default function (schema: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    await vine.validate({
      schema: schema,
      data: req.body,
      // messagesProvider: new SimpleMessagesProvider(args.messages, args.fields),
    });

    next();
  };
}
