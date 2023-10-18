import "./header.css";
import localFont from "next/font/local";
import Link from "next/link";
import Searchinput from "./Searchinput";
import Loggedornot from "./Loggedornot";

const satoshiRegular = localFont({
  src: "../../fonts/Satoshi-Regular.otf",
});
const satoshiBold = localFont({
  src: "../../fonts/Satoshi-Bold.otf",
});
const integralCFBold = localFont({
  src: "../../fonts/Fontspring-DEMO-integralcf-bold.otf",
});
export default function Header() {
  return (
    <header className="total-header-content">
      <div className="nav-button-container">
        <input type="checkbox"></input>
        <div className="lines-container">
          <div className="nav-button-firstline"></div>
          <div className="nav-button-secondline"></div>
          <div className="nav-button-thirdline"></div>
        </div>
        <div className={`${satoshiBold.className} slide-box-container`}>
          <ul>
            <li className="shop-li">
              <input className="shop-checkbox" type="checkbox"></input>
              <div className="shop-heading-container">
                <p>Shop</p>
                <span className="shop-firstspan"></span>
                <span className="shop-secoundspan"></span>
              </div>
              <div className="dropdown-container">
                <ul>
                  <li>
                    Mens
                    <ul className={satoshiRegular.className}>
                      <li>
                        <Link href="/shop?gender=male&dressType=shirt">
                          Shirts
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=male&dressType=t-shirt">
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=male&dressType=shorts">
                          Shorts
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=male&dressType=jeans">
                          Jeans
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=male&dressType=sweatshirt">
                          Sweatshirts
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Women
                    <ul className={satoshiRegular.className}>
                      <li>
                        <Link href="/shop?gender=female&dressType=kurthas-tops">
                          Kurthas & Tops
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=female&dressType=t-shirt">
                          T-Shirts
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=female&dressType=shorts-skirts">
                          Shorts & Skirts
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop?gender=female&dressType=jeans">
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/shop">On Sale</Link>
            </li>
            <li>
              <Link href="/shop?sort=new">New Arraivals</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-container">
        <Link href="/">
          <h1 className={integralCFBold.className}>SHOP.CO</h1>
        </Link>
      </div>
      <div className="nav-items-desk">
        <ul className={satoshiRegular.className}>
          <li className="shop-li-desk">
            <input className="shop-checkbox-desk" type="checkbox"></input>
            <div className="shop-heading-container-desk">
              <p>Shop</p>
              <span className="shop-firstspan-desk"></span>
              <span className="shop-secoundspan-desk"></span>
            </div>
            <div className="dropdown-container-desk">
              <ul>
                <li>
                  Mens
                  <ul className={satoshiRegular.className}>
                    <li>
                      <Link href="/shop?gender=male&dressType=shirt">
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=male&dressType=t-shirt">
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=male&dressType=shorts">
                        Shorts
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=male&dressType=jeans">
                        Jeans
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=male&dressType=sweatshirt">
                        Sweatshirts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Women
                  <ul className={satoshiRegular.className}>
                    <li>
                      <Link href="/shop?gender=female&dressType=kurthas-tops">
                        Kurthas & Tops
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=female&dressType=t-shirt">
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=female&dressType=shorts-skirts">
                        Shorts & Skirts
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop?gender=female&dressType=jeans">
                        Jeans
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/shop"> On Sale</Link>
          </li>
          <li>
            <Link href="/shop?sort=new">New Arraivals</Link>
          </li>
        </ul>
      </div>
      <div className="header-right-container">
        <div className="search-container">
          <div className="search-btn-container">
            <input type="checkbox" className="checkbox-search"></input>
            <button type="button"></button>
            <div className="input-container">
              <Searchinput />
            </div>
          </div>
        </div>
        <Loggedornot />
      </div>
    </header>
  );
}
