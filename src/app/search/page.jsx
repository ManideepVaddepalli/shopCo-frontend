import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import EntireProduct from "@/components/entireproductsComponent/EntireProduct";

export default async function Search({ searchParams, params }) {
  const URI =
    "https://shop-co-backend-server.vercel.app/api/product/nameSearch";
  // const URI = "http://localhost:4000/api/product/nameSearch";
  const res = await fetch(URI, {
    next: { revalidate: 1 },
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: searchParams.name }),
  });
  const { product } = await res.json();
  return (
    <>
      <Header />
      <EntireProduct props={product} name={searchParams.name} />
      <Footer />
    </>
  );
}
