import axios from "axios";
// import { GetServerSidePropsResult } from "next";
import Image from "next/image";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home({ products }: { products: IProduct[] }) {

  // console.log(products)
  return (
    <div
      className={'flex flex-wrap max-w-screen-xl mx-auto p-4 gap-x-4 gap-y-8'}
    >
      {products.map((product) => (<div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <Image
          className="w-full h-64 object-contain mb-4"
          src={product.image}
          alt={product.title}
          width={300}
          height={350}
        />
        <div className="font-bold text-xl mb-2 truncate">{product.title}</div>
        <p className="text-gray-700 text-base mb-2 truncate">{product.description}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-green-700">${product.price}</span>
          <span className="text-sm text-gray-600">{product.category}</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">★ {product.rating.rate}</span>
          <span className="text-gray-500 text-sm">({product.rating.count} reviews)</span>
        </div>
      </div>))}
    </div>
  );
}


export async function getServerSideProps(
  // context: GetServerSidePropsContext
) {
  const response = await axios.get('https://fakestoreapi.com/products');

  return { props: { products: response.data } };
}