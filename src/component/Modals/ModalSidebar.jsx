import React from "react";
import ReactDOM from "react-dom";
import useTranslate from "../../core/hook/useTranslate";

export function ModalSidebar() {
  let { t } = useTranslate();
  return ReactDOM.createPortal(
    <div
      className="modal fixed-right fade"
      id="modalSidebar"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Body */}
          <div className="modal-body px-10 my-auto">
            {/* Nav */}
            <ul
              className="nav nav-vertical nav-unstyled font-size-h2"
              id="sidebarNav"
            >
              <li className="nav-item">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="collapse"
                  href="#sidebarHome"
                >
                  {t("Home")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="sidebarHome"
                  data-parent="#sidebarNav"
                >
                  <ul className="list-styled font-size-lg py-3 mb-0">
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./index.html">
                        {t("Default")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-classic.html"
                      >
                        {t("Classic")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-fashion.html"
                      >
                        {t(" Fashion")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./index-boxed.html">
                        {t("Boxed")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-simple.html"
                      >
                        {t("Simple")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-asymmetric.html"
                      >
                        {t("Asymmetric")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-sidenav.html"
                      >
                        {t("Sidenav")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a
                        className="list-styled-link"
                        href="./index-landing.html"
                      >
                        {t("Landing")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="collapse"
                  href="#sidebarCatalog"
                >
                  {t("Catalog")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="sidebarCatalog"
                  data-parent="#sidebarNav"
                >
                  <div className="row">
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5 font-weight-bold">{t("Clothing")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg py-3">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("All Clothing")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Blouses &amp; Shirts")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Coats &amp; Jackets")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Dresses")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Hoodies &amp; Sweats")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Denim")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Jeans")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Jumpers &amp; Cardigans")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Leggings")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5 font-weight-bold">
                        {t("  Shoes &amp; Boots")}
                      </h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("  All Shoes &amp; Boots")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Branded Shoes")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" Boots")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Heels")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("   Trainers")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" Sandals")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Shoes")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" Wide Fit Shoes")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5 font-weight-bold">
                        {t("Bags &amp; Accessories")}
                      </h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" All Bags &amp; Accessories")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" Accessories")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Bags &amp; Purses")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Luggage")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Belts")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Hats")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Hair Accessories")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t(" Jewellery")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Travel Accessories")}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="collapse"
                  href="#sidebarShop"
                >
                  Shop
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="sidebarShop"
                  data-parent="#sidebarNav"
                >
                  <div className="row">
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5">{t("Shop")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./shop.html">
                            {t("Default")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./shop-topbar.html"
                          >
                            {t("Topbar")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./shop-collapse.html"
                          >
                            {t("Collapse")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./shop-simple.html"
                          >
                            {t("Simple")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./shop-masonry.html"
                          >
                            {t("Masonry")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5">{t("Product")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="./product.html">
                            {t("Default")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./product-images-left.html"
                          >
                            {t("Images Left")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./product-image-grid.html"
                          >
                            {t("Image Grid")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            href="./product-image-slider.html"
                          >
                            {t("Image Slider")}
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
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5">{t("Support")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
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
                            {t("Order Completed")}
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
                    </div>
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5">{t("Account")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
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
                            {t("Payment: New")}
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
                          <a className="list-styled-link" href="./auth.html">
                            {t("Auth")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 py-3">
                      {/* Heading */}
                      <h6 className="mb-5">{t("Modals")}</h6>
                      {/* Links */}
                      <ul className="list-styled font-size-lg">
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            data-toggle="modal"
                            href="#modalNewsletterHorizontal"
                          >
                            {t("Newsletter: Horizontal")}
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
                            {t("Search")}
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a
                            className="list-styled-link"
                            data-toggle="modal"
                            href="#modalShoppingCart"
                          >
                            {t("Shopping Cart")}
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
              </li>
              <li className="nav-item">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="collapse"
                  href="#sidebarPages"
                >
                  {t("Pages")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="sidebarPages"
                  data-parent="#sidebarNav"
                >
                  <ul className="list-styled font-size-lg py-3 mb-0">
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./about.html">
                        {t(" About")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./contact-us.html">
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
                        FAQ
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./coming-soon.html">
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
              </li>
              <li className="nav-item">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="collapse"
                  href="#sidebarBlog"
                >
                  {t(" Blog")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="sidebarBlog"
                  data-parent="#sidebarNav"
                >
                  <ul className="list-styled font-size-lg py-3 mb-0">
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./blog.html">
                        {t(" Blog")}
                      </a>
                    </li>
                    <li className="list-styled-item">
                      <a className="list-styled-link" href="./blog-post.html">
                        {t("Blog Post")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./docs/getting-started.html">
                  {t(" Docs")}
                </a>
              </li>
            </ul>
          </div>
          {/* Body */}
          <div className="moda-body px-10 py-9">
            {/* Social links */}
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-gray-350" href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-gray-350" href="#!">
                  <i className="fab fa-medium-m" />
                </a>
              </li>
            </ul>
            {/* Footer */}
            <div className="font-size-xxs text-gray-350">
              {t(" © 2019 All rights reserved. Designed by Tantan.")}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
}
