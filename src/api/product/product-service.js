import fs from "fs";
import {
  getDateFilteredProductData,
  getfilteredProductData,
  getIdCountGroupByYear,
} from "./product-util.js";

export const getFilteredProductData = (from, to) => {
  const fromDate = Date.parse(from);
  const toDate = Date.parse(to);
  if (isNaN(fromDate) || isNaN(toDate)) {
    throw new Error(
      `[PRODUCT] Invalid input(s) provided. from : ${from} ,to: ${to}`
    );
  }
  const productData = JSON.parse(
    fs.readFileSync("src/db/products.json", "utf8")
  );
  const dateFilteredProductData = getDateFilteredProductData(
    productData,
    fromDate,
    toDate
  );
  const filterdProductData = getfilteredProductData(dateFilteredProductData);
  return filterdProductData;
};

export const getProductQuantityGroupByYear = (filteredProductData) => {
  return getIdCountGroupByYear(filteredProductData);
}
