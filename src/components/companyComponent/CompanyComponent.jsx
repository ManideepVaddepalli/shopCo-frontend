import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
  src: "../../fonts/Satoshi-Medium.otf",
  src: "../../fonts/Satoshi-Regular.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});

export default function CompanyComponent({ filteredData }) {
  const pageElems = filteredData.content.map((elem) => {
    return (
      <div
        key={elem.title}
        className={`${satoshi.className} inner-elements-company-page`}
        id={elem.title.replaceAll(" ", "_")}
      >
        <h3>{elem.title}</h3>
        <p>{elem.desc}</p>
      </div>
    );
  });
  return (
    <div className="total-company-page-component">
      <div className="total-company-heading-container">
        <h1 className={integralCFBold.className}>{filteredData.title}</h1>
      </div>
      <div className="total-company-details-container">{pageElems}</div>
    </div>
  );
}
