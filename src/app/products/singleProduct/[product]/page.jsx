import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ActualProduct from "@/components/productComponents/actualProduct/ActualProduct";
import ReviewsSection from "@/components/productComponents/reviewsSection/ReviewsSection";
export default async function Product({ params }) {
  // uri to get single Product from backend
  let product = null;
  try {
    // const URI = "http://localhost:4000/api/product/singleProduct";
    const URI =
      "https://shop-co-backend-server.vercel.app/api/product/singleProduct";
    const response = await fetch(URI, {
      next: { revalidate: 1 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params.product.toString(),
      }),
    });
    const data = await response.json();
    product = data.product;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Header />
      {product ? <ActualProduct props={product} /> : <h1>Product not found</h1>}
      {product ? (
        <ReviewsSection props={product.reviews} productId={product._id} />
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}
export async function getStaticPaths() {
  let paths;
  try {
    // const URI = "http://localhost:4000/api/product/allProducts";
    const URI =
      "https://shop-co-backend-server.vercel.app/api/product/allProducts";
    const response = await fetch(URI, {
      next: { revalidate: 1 },
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    const allProducts = data.products;
    paths = allProducts.map((Elem) => {
      return {
        params: {
          product: Elem._id.toString(),
        },
      };
    });
  } catch (error) {
    paths = [];
  }

  return {
    paths,
    fallback: false,
  };
}
