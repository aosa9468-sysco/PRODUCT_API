import express from "express";
import isNil from "lodash/isNil.js";
import { StatusCodes, BAD_PARAM_MSG } from "../../constants.js";
import {
  getFilteredProductData,
  getProductQuantityGroupByYear,
} from "./product-service.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { from, to } = req.query;

  if (isNil(from) || isNil(to)) {
    res.status(StatusCodes.BAD_REQUEST).json({
      errorCode: StatusCodes.BAD_REQUEST,
      error: BAD_PARAM_MSG,
    });
  }
  try {
    const filteredProductData = getFilteredProductData(from, to);
    if (filteredProductData) {
      const prodctQuantityData =
        getProductQuantityGroupByYear(filteredProductData);
      res
        .status(StatusCodes.OK)
        .json({ success: true, data: prodctQuantityData });
    } else {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ success: true, data: [] });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errorCode: StatusCodes.BAD_REQUEST,
      error: error.message,
    });
  }
});

export default router;
