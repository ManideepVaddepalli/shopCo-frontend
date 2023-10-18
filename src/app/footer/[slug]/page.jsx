//@ts-nocheck
import "./company.css";
import CompanyComponent from "@/components/companyComponent/companyComponent";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const pagedata = [
  {
    title: "company",
    content: [
      {
        title: "about",
        desc: `
        SHOP.CO is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, SHOP.CO aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country.`,
      },
      {
        title: "features",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "work",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "career",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
    ],
  },
  {
    title: "help",
    content: [
      {
        title: "customer support",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum mauris a maximus. In in tellus vel metus egestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "delivery details",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "terms & conditions",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "privacy policy",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
    ],
  },
  {
    title: "faq",
    content: [
      {
        title: "account",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum mauris a maximus. In in tellus vel metus egestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "manager details",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "orders",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "payment",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
    ],
  },
  {
    title: "resources",
    content: [
      {
        title: "free ebook",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum mauris a maximus. In in tellus vel metus egestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "development tutorial",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "how to - blog",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
      {
        title: "youtube playlist",
        desc: "Lorem ipsum doltuximuegestas eleifend eu nec erat. Nulla finibus, lacus quis malesuada eleifend, nibh elit semper lacus, vitae feugiat lorem odio eu libero. Proin nec molestie risus. Nulla est mi, porttitor eu rutrum vitae, facilisis sed enim. Vivamus semper urna sed justo porttitor vehicula. In a laoreet mauris. Praesent quis dolor varius, ornare odio ut, interdum eros. /n Mauris vel malesuada elit. Quisque eget pretium erat. Morbi ultrices at nunc quis pellentesque. Fusce vulputate magna non finibus sagittis. Sed pellentesque lobortis leo. Nam vestibulum, purus ut hendrerit viverra, dui lectus vestibulum nibh, in viverra odio metus ac elit. Phasellus quis sapien arcu. Vestibulum ultricies mauris est, id vulputate augue molestie vel. In euismod dignissim varius. Nullam eu lorem diam. Ut mattis ante in erat placerat, ut hendrerit nibh euismod. Mauris ullamcorper ultricies justo id vestibulum. Ut malesuada metus et efficitur sodales. Integer quam nulla, feugiat quis lectus ac, pretium pulvinar lacus. Curabitur commodo, eros quis efficitur viverra, turpis diam sodales nunc, quis tincidunt elit sapien ac eros. ",
      },
    ],
  },
];
export default function Product({ params }) {
  // uri to get single Product from backend
  const fillerData = pagedata.filter((elem) => elem.title == params.slug);
  const filteredData = fillerData[0];
  return (
    <>
      <Header />
      <CompanyComponent filteredData={filteredData} />
      <Footer />
    </>
  );
}
export function getStaticPaths() {
  const paths = pagedata.map((Elem) => {
    return {
      params: {
        slug: Elem.title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
