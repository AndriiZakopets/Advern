export const getPage = (req, products) => {
  const offset = +(req.query.offset ?? 0);
  const limit = +(req.query.limit ?? 20);

  const sendData = [];

  for (
    let i = offset;
    i < limit + offset && i < products.length;
    i++
  ) {
    sendData.push(products[i].productView());
  }

  return sendData;
};
