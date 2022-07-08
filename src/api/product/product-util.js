import isNil from "lodash/isNil.js";
import { FILTER_CODE_PARAM, FILTER_NAME_PARAM } from "../../constants.js";

export const getDateFilteredProductData = (productData, from, to) => {
  if (productData) {
    return productData.filter((product) => {
      return Date.parse(product.date) >= from && Date.parse(product.date) <= to;
    });
  }
};

export const getfilteredProductData = (productData) => {
  if (productData) {
    return productData.filter((product) => {
      return (
        !isNil(product.id) &&
        product.code === FILTER_CODE_PARAM &&
        product.name.includes(FILTER_NAME_PARAM)
      );
    });
  }
};

export const getIdCountGroupByYear = (productDetails) => {
  const productDataWithYear = productDetails.map((productData) => ({
    ...productData,
    year: new Date(productData.date).getFullYear(),
  }));

  const dataGroupByYear = productDataWithYear.reduce((counts, { year }) => {
    counts[year] = (counts[year] || 0) + 1;
    return counts;
  }, {});

  return Object.keys(dataGroupByYear).map((key) => {
    return {
      year: key,
      quantity: dataGroupByYear[key],
    };
  });
};
