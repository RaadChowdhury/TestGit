interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
  brand: string;
  timeLeft: number;
}

export function Products(props: ProductProps) {
  return (
    <div className='grid grid-cols-4 justify-center gap-x-4'>
      <div key={props.id} className='productCard bg-grey-primary'>
        <img src={props.image} alt='product-img' className='productImage mt-8 w-350 h-350' />
        <div className='productCard__content m-8'>
          <h3 className='productName text-1.5rem text-black'>{props.name}</h3>
          <div className='displayStack__1 mt-8 flex justify-between items-center'>
            <div className='productPrice text-1.5rem font-bold text-black'>${props.price}</div>
            <div className='productBrand text-1.1rem text-black'>{props.brand} Brand</div>
          </div>
          <div className='displayStack__2 mt-8'>
            <div className='productTime text-1.1rem text-black'>{props.timeLeft} min</div>
            <button className='border-black border px-4 py-2 mt-4 bg-white-500 text-black rounded-3xl hover:bg-green-800 hover:text-white'> Add to Cart </button>
          </div>
        </div>
      </div>
    </div>
  );
}
