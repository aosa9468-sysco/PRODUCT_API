import { getFilteredProductData, getProductQuantityGroupByYear } from "../product-service.js";
import { getDateFilteredProductData, getfilteredProductData, getIdCountGroupByYear } from "../product-util.js";
import {
  mockDateFilteredData,
  mockFilteredData,
  mockGroupedData,
  productData,
} from "../__mocks__/product.mock.js";

describe("product-service - unit tests", () => {
  describe("getFilteredProductData method unit tests", () => {
    it("should return the filtered product data", () => {
      const from = "2022-01-01";
      const to = "2022-01-30";
      expect(getFilteredProductData(from, to)).toEqual(
        mockFilteredData
      );
    });
  });

  describe("getProductQuantityGroupByYear method unit tests", () => {
    it("should return the product data quantity group by year", () => {
      expect(getProductQuantityGroupByYear(productData)).toEqual(
        mockGroupedData
      );
    });
  });
});
