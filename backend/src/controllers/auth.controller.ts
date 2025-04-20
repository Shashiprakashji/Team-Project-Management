import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../middlewares/asynchandler.middleware";
import { config } from "../config/app.config";
// import { registerSchema } from "../validation/auth.validation";
// import { HTTPSTATUS } from "../config/http.config";
// import { registerUserService } from "../services/auth.service";
import passport from "passport";

export const googleLoginCallback = asyncHandler(
  async (req: Request, res: Response) => {
    const currentWorkspace = req.user?.currentWorkspace;

    if (!currentWorkspace) {
      return res.redirect(
        `${config.FRONTEND_GOOGLE_CALLBACK_URL}?status=failure`
      );
    }

    return res.redirect(
      `${config.FRONTEND_ORIGIN}/workspace/${currentWorkspace}`
    );
  }
);
