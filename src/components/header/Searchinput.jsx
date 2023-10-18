"use client";
import localFont from "next/font/local";
import React from "react";
import { useRouter } from "next/navigation";

const satoshiRegular = localFont({
  src: "../../fonts/Satoshi-Regular.otf",
});
export default function Searchinput() {
  const router = useRouter();
  let [search, setSearch] = React.useState("");
  function searchSubmit() {
    if (!search) {
      return;
    }
    let path = search.replaceAll(" ", "+");
    router.push(`/search?name=${path}`);
  }
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          searchSubmit();
        }
      }}
      className={`${satoshiRegular.className} searchbox`}
      type="search"
      placeholder="Search for products..."
    ></input>
  );
}
