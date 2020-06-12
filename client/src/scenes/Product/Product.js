import React, { useState, useEffect } from 'react';
import { getProduct, deleteProduct } from '../../Api/Products';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import s from './Product.module.scss';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userSelectors } from '../../modules/user';
import { useSelector } from 'react-redux';
import Avatar from '../../Components/Avatar/Avatar';
import addNotification from '../../Notification';

const Product = (props) => {
  const user = useSelector(userSelectors.getUser);
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const onDelete = () => {
    deleteProduct(props.match.params.id)
      .then(() => {
        addNotification(
          'success',
          'The product has been successfully removed',
        );
      })
      .catch(() => {
        addNotification('danger', 'The product has not been removed');
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id).then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, []);

  if (product)
    return (
      <div className={s.productContainer}>
        <div className={s.productContainer__prod}>
          {product.ownerId === user?.id && (
            <div
              className={s.productContainer__delete}
              onClick={onDelete}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
          )}
          {product.photos.length > 0 ? (
            <ImageSlider photos={product.photos} />
          ) : (
            'No photos.'
          )}
          <h1 className={s.productContainer__title}>
            {product.title}
          </h1>
          <span className={s.productContainer__date}>
            {new Date(product.createdAt).toDateString()} -{' '}
            {product.location}
          </span>
          <h3>Description</h3>
          {product.description ? (
            <p className={s.productContainer__description}>
              {product.description}
            </p>
          ) : (
            'No description.'
          )}
        </div>
        <div className={s.productContainer__owner}>
          <Avatar fullName={product.owner.fullName} size="80px" />
          <span>{product.owner.fullName}</span>
          <span>{product.owner.phone}</span>
        </div>
      </div>
    );
  else if (!isLoading) return 'product not found';
  return '';
};

export default Product;
