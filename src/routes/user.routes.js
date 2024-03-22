import { Router } from "express";
import { registerUser, loginUser, logoutUser, changeCurrentPassword, getCurrentUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser)

// Secured Routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/user-info").get(verifyJWT, getCurrentUser);

export default router;
