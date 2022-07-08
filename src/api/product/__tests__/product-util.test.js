import { getDateFilteredProductData, getfilteredProductData, getIdCountGroupByYear } from "../product-util.js";
import {
  mockDateFilteredData,
  mockGroupedData,
  productData,
} from "../__mocks__/product.mock.js";

describe("product-util - unit tests", () => {
  describe("getDateFilteredProductData method unit tests", () => {
    it("should return the product data between given time range", () => {
      const from = Date.parse("2022-01-01");
      const to = Date.parse("2022-01-30");
      expect(getDateFilteredProductData(productData, from, to)).toEqual(
        mockDateFilteredData
      );
    });

    it("should return the product data according to given filters", () => {
        expect(getfilteredProductData(productData)).toEqual(
          mockDateFilteredData
        );
      });

      it("should return the product data quantity group by year", () => {
        expect(getIdCountGroupByYear(productData)).toEqual(
          mockGroupedData
        );
      });
  });
});
