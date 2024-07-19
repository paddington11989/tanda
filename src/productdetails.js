import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_BARCODE } from './queries';


const ProductDetail = ({ barcodeId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_BARCODE, {
    variables: { id: barcodeId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('GraphQL Error:', error);
    return <p>Error: {error.message}</p>;
  }

  const { barcode } = data;

  return (
    <div className='card-container'>
      <div className='card-wrapper'>
      <div className='title-card'>
      <h1 className='card-title'>{barcode.title}</h1>
      <p className='card-desrib'>Описание</p>
      <p className='card-describtion'>{barcode.description}</p>
      </div>
      <div className='sell-card'>
        <div className='sell-som'>
      <p className='sell-price'>{barcode.sellingPrice}сом</p>
      <p className='sell-discounted'>{barcode.discountedPrice}60000сом</p>
      <p>{barcode.cost}</p>
      </div>
      <button className='sell-btn'>Купить сейчас</button>
      <button className='sell-btn-credit'>Оформить в кредит</button>
      </div>
    </div>


      <div>
        <h2>Category</h2>
        <p>{barcode.category.name}</p>
      </div>
      <div>
        <h2>Images</h2>
        {barcode.images.map(image => (
          <img key={image.id} src={image.url} alt={barcode.title} />
        ))}
      </div>
      <div>
        <h2>Sizes</h2>
        {barcode.sizes.edges.map(({ node }) => (
          <p key={node.id}>{node.name}: {node.value}</p>
        ))}
      </div>
      <a href='#' className='card-sell-link'>Смотреть характеристики</a>
    </div>
  );
};

export default ProductDetail;
