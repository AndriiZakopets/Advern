import React, { useState, useEffect } from 'react';
import { getProduct } from '../../Api/Products';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';

const Product = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(props.match.params.id).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, []);

  if (product)
    return (
      <div>
        <div>
          <ImageSlider photos={product.photos} />
        </div>
        <div></div>
      </div>
    );
  else if (!isLoading) return 'product not found';
  return '';
};

export default Product;
