import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTranslate from "../../../core/hook/useTranslate";

export function Header() {
  let { t } = useTranslate();
  let { login } = useSelector((store) => store.auth);
  return (
    <>
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" />{" "}
            <span className="heading-xxxs">{t("Free shipping worldwide")}</span>
          </div>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topbarCollapse"
            aria-controls="topbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown hovered">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  aria-expanded="true"
                >
                  <img
                    className="mb-1 mr-1"
                    src="/img/flags/usa.svg"
                    alt="..."
                  />{" "}
                  {t(" United States")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/usa.svg"
                      alt="USA"
                    />
                    {t(" United States")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/canada.svg"
                      alt="Canada"
                    />
                    {t(" Canada")}
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/germany.svg"
                      alt="Germany"
                    />
                    {t("Germany")}
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  USD
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    USD
                  </a>
                  <a className="dropdown-item" href="#!">
                    EUR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {t("English")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#">
                    {t("     English")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("  French")}
                  </a>
                  <a className="dropdown-item" href="#">
                    {t("   German")}
                  </a>
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">
                  {t("Shipping")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./faq.html">
                  {t(" FAQ")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contact-us.html">
                  {t("Contact")}
                </a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            Shopper.
          </Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  {t(" Home")}
                </a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown position-static">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  {t("  Catalog")}
                </a>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown hovered">
                {/* Toggle */}
                <a
                  className="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  aria-expanded="true"
                >
                  {t("Shop")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu" style={{ minWidth: "650px" }}>
                  <div className="card card-lg">
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">
                            {t("Shop")}
                          </div>
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <Link className="list-styled-link" to="/shop">
                                {t("  Default")}
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-topbar.html"
                              >
                                {t("  Topbar")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-collapse.html"
                              >
                                {t("  Collapse")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-simple.html"
                              >
                                {t("  Simple")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shop-masonry.html"
                              >
                                {t("  Masonry")}
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">
                            {t("Product")}
                          </div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product.html"
                              >
                                {t(" Default")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-images-left.html"
                              >
                                {t("  Images Left")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-image-grid.html"
                              >
                                {t(" Image Grid")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-image-slider.html"
                              >
                                {t("   Image Slider")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./product-images-stacked.html"
                              >
                                {t("Images Stacked")}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">
                            {t("Support")}
                          </div>
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shopping-cart.html"
                              >
                                {t("Shopping Cart")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./checkout.html"
                              >
                                {t("Checkout")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./order-completed.html"
                              >
                                {t("  Order Completed")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./shipping-and-returns.html"
                              >
                                {t("Shipping &amp; Returns")}
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">
                            {t("Account")}
                          </div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-order.html"
                              >
                                {t("Order")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-orders.html"
                              >
                                {t("Orders")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-wishlist.html"
                              >
                                {t("Wishlist")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-personal-info.html"
                              >
                                {t("Personal Info")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-address.html"
                              >
                                {t("Addresses")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-address-edit.html"
                              >
                                {t("Addresses: New")}
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          {/* Links */}
                          <ul className="list-styled mb-7 font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment.html"
                              >
                                {t("Payment")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment-edit.html"
                              >
                                {t(" Payment: New")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./account-payment-choose.html"
                              >
                                {t("Payment: Choose")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                href="./auth.html"
                              >
                                {t("Auth")}
                              </a>
                            </li>
                          </ul>
                          {/* Heading */}
                          <div className="mb-5 font-weight-bold">
                            {t("Modals")}
                          </div>
                          {/* Links */}
                          <ul className="list-styled font-size-sm">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterHorizontal"
                              >
                                {t(" Newsletter: Horizontal")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterVertical"
                              >
                                {t("Newsletter: Vertical")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalProduct"
                              >
                                {t("Product")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSearch"
                              >
                                {t(" Search")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalShoppingCart"
                              >
                                {t(" Shopping Cart")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSizeChart"
                              >
                                {t("Size Chart")}
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalWaitList"
                              >
                                {t("Wait List")}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  {t("Pages")}
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./about.html">
                            {t("About")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./contact-us.html"
                          >
                            {t("Contact Us")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./store-locator.html"
                          >
                            {t("Store Locator")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./faq.html">
                            {t("FAQ")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./coming-soon.html"
                          >
                            {t("Coming Soon")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./404.html">
                            404
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Blog
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./blog-post.html"
                          >
                            Blog Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="docs/getting-started.html">
                  Docs
                </a>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <Link to="/auth" className="nav-link">
                  {login ? (
                    <i class="fas fa-info"></i>
                  ) : (
                    <i className="fe fe-user" />
                  )}
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items={2}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
