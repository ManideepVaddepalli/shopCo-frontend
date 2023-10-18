import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ShopComponent from "@/components/shopcomponents/ShopComponent";

export default async function Search({ searchParams, params }) {
  const { dressType, maxPrice, gender, color, dressStyle, sort } = searchParams;
  // const URI = "http://localhost:4000/api/product/filterProducts";
  const URI =
    "https://shop-co-backend-server.vercel.app/api/product/filterProducts";
  const res = await fetch(URI, {
    next: { revalidate: 1 },
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      dressType,
      maxPrice,
      gender,
      color,
      dressStyle,
      sort,
    }),
  });
  const URI1 =
    "https://shop-co-backend-server.vercel.app/api/product/getDistinct";
  const res1 = await fetch(URI1, { method: "GET", next: { revalidate: 1 } });
  const constraints = await res1.json();
  const { product } = await res.json();
  return (
    <>
      <Header />
      <ShopComponent
        props={product}
        searchParams={searchParams}
        constraints={constraints}
      />
      <Footer />
    </>
  );
}
