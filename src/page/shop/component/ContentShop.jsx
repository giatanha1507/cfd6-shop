import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Paging, ProductShop } from "../../../component";
import useTranslate from "../../../core/hook/useTranslate";
import { reverse, getQuery } from "../../../utils/queryUrl";

let $ = window.$;
export function ContentShop({ product, categories }) {
  let { t } = useTranslate();

  let { paginate } = useSelector((store) => store.product);
  let ref = useRef();
  useEffect(() => {
    $(ref.current).flickity({
      pageDots: true,
    });
  }, []);
  let obj = getQuery();
  delete obj.page;

  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Filters */}
            <form className="mb-10 mb-md-0">
              <ul className="nav nav-vertical" id="filterNav">
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#categoryCollapse"
                  >
                    {t("  Category")}
                  </a>
                  {/* Collapse */}
                  <div className="collapse show" id="categoryCollapse">
                    <div className="form-group">
                      <ul className="list-styled mb-0" id="productsNav">
                        {categories?.map((value) => (
                          <li className="list-styled-item">
                            <Link
                              className="list-styled-link "
                              to={`/shop?${reverse({
                                ...obj,
                                categories: value.id,
                              })}`}
                            >
                              {value.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#seasonCollapse"
                  >
                    {t("Season")}
                  </a>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="seasonCollapse"
                    data-toggle="simplebar"
                    data-target="#seasonGroup"
                  >
                    <div
                      className="form-group form-group-overflow mb-6"
                      id="seasonGroup"
                    >
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="seasonOne"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonOne"
                        >
                          {t("Summer")}
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="seasonTwo"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonTwo"
                        >
                          {t("  Winter")}
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="seasonThree"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="seasonThree"
                        >
                          {t(" Spring &amp; Autumn")}
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#sizeCollapse"
                  >
                    {t(" Size")}
                  </a>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="sizeCollapse"
                    data-toggle="simplebar"
                    data-target="#sizeGroup"
                  >
                    <div
                      className="form-group form-group-overlow mb-6"
                      id="sizeGroup"
                    >
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeOne"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeOne"
                        >
                          3XS
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeTwo"
                          type="checkbox"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeTwo"
                        >
                          2XS
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeThree"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeThree"
                        >
                          XS
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeFour"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeFour"
                        >
                          S
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeFive"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeFive"
                        >
                          M
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeSix"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeSix"
                        >
                          L
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeSeven"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeSeven"
                        >
                          XL
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeEight"
                          type="checkbox"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeEight"
                        >
                          2XL
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeNine"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeNine"
                        >
                          3XL
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeTen"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeTen"
                        >
                          4XL
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          className="custom-control-input"
                          id="sizeEleven"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="sizeEleven"
                        >
                          {t("One Size")}
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#colorCollapse"
                  >
                    {t(" Color")}
                  </a>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="colorCollapse"
                    data-toggle="simplebar"
                    data-target="#colorGroup"
                  >
                    <div
                      className="form-group form-group-overflow mb-6"
                      id="colorGroup"
                    >
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorOne"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-dark"
                          htmlFor="colorOne"
                        >
                          <span className="text-body">{t("Black")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorTwo"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          style={{ color: "#f9f9f9" }}
                          htmlFor="colorTwo"
                        >
                          <span className="text-body">{t("White")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorThree"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-info"
                          htmlFor="colorThree"
                        >
                          <span className="text-body">{t("Blue")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorFour"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-primary"
                          htmlFor="colorFour"
                        >
                          <span className="text-body">{t("Red")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorFive"
                          type="checkbox"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="colorFive"
                          style={{ color: "#795548" }}
                        >
                          <span className="text-body">{t("Brown")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorSix"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label text-gray-300"
                          htmlFor="colorSix"
                        >
                          <span className="text-body">{t("Gray")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color mb-3">
                        <input
                          className="custom-control-input"
                          id="colorSeven"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="colorSeven"
                          style={{ color: "#17a2b8" }}
                        >
                          <span className="text-body">{t("Cyan")}</span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-color">
                        <input
                          className="custom-control-input"
                          id="colorEight"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="colorEight"
                          style={{ color: "#e83e8c" }}
                        >
                          <span className="text-body">{t("Pink")}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#brandCollapse"
                  >
                    {t("Brand")}
                  </a>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="brandCollapse"
                    data-toggle="simplebar"
                    data-target="#brandGroup"
                  >
                    {/* Search */}
                    <div
                      data-toggle="lists"
                      data-options='{"valueNames": ["name"]}'
                    >
                      {/* Input group */}
                      <div className="input-group input-group-merge mb-6">
                        <input
                          className="form-control form-control-xs search"
                          type="search"
                          placeholder="Search Brand"
                        />
                        {/* Button */}
                        <div className="input-group-append">
                          <button className="btn btn-outline-border btn-xs">
                            <i className="fe fe-search" />
                          </button>
                        </div>
                      </div>
                      {/* Form group */}
                      <div
                        className="form-group form-group-overflow mb-6"
                        id="brandGroup"
                      >
                        <div className="list">
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandOne"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandOne"
                            >
                              {t("Dsquared2")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandTwo"
                              type="checkbox"
                              disabled
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandTwo"
                            >
                              {t("Alexander McQueen")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandThree"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandThree"
                            >
                              {t("Balenciaga")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandFour"
                              type="checkbox"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandFour"
                            >
                              {t(" Adidas")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandFive"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandFive"
                            >
                              {t("Balmain")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandSix"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandSix"
                            >
                              {t("Burberry")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandSeven"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandSeven"
                            >
                              {t(" Chloé")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="brandEight"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandEight"
                            >
                              {t("Kenzo")}
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="brandNine"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label name"
                              htmlFor="brandNine"
                            >
                              {t("Givenchy")}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
                    data-toggle="collapse"
                    href="#priceCollapse"
                  >
                    {t("Price")}
                  </a>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="priceCollapse"
                    data-toggle="simplebar"
                    data-target="#priceGroup"
                  >
                    {/* Form group*/}
                    <div
                      className="form-group form-group-overflow mb-6"
                      id="priceGroup"
                    >
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="priceOne"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="priceOne"
                        >
                          $10.00 - $49.00
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="priceTwo"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="priceTwo"
                        >
                          $50.00 - $99.00
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          className="custom-control-input"
                          id="priceThree"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="priceThree"
                        >
                          $100.00 - $199.00
                        </label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="priceFour"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="priceFour"
                        >
                          $200.00 and Up
                        </label>
                      </div>
                    </div>
                    {/* Range */}
                    <div className="d-flex align-items-center">
                      {/* Input */}
                      <input
                        type="number"
                        className="form-control form-control-xs"
                        placeholder="$10.00"
                        min={10}
                      />
                      {/* Divider */}
                      <div className="text-gray-350 mx-2">‒</div>
                      {/* Input */}
                      <input
                        type="number"
                        className="form-control form-control-xs"
                        placeholder="$350.00"
                        max={350}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            {/* Slider */}
            <div ref={ref} className="flickity-page-dots-inner mb-9">
              {/* Item */}
              <div className="w-100">
                <div
                  className="card bg-h-100 bg-left"
                  style={{ backgroundImage: "url(/img/covers/cover-24.jpg)" }}
                >
                  <div className="row" style={{ minHeight: "400px" }}>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
                      <div className="card-body px-md-10 py-11">
                        {/* Heading */}
                        <h4>{t("2019 Summer Collection")}</h4>
                        {/* Button */}
                        <a
                          className="btn btn-link px-0 text-body"
                          href="shop.html"
                        >
                          {t("View Collection")}{" "}
                          <i className="fe fe-arrow-right ml-2" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover"
                      style={{
                        backgroundImage: "url(/img/covers/cover-16.jpg)",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Item */}
              <div className="w-100">
                <div
                  className="card bg-cover"
                  style={{ backgroundImage: "url(/img/covers/cover-29.jpg)" }}
                >
                  <div
                    className="row align-items-center"
                    style={{ minHeight: "400px" }}
                  >
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                      <div className="card-body px-md-10 py-11">
                        {/* Heading */}
                        <h4 className="mb-5">
                          {t("Get -50% from Summer Collection")}
                        </h4>
                        {/* Text */}
                        <p className="mb-7">
                          {t("Appear, dry there darkness they're seas.")} <br />
                          <strong className="text-primary">
                            {t("Use code 4GF5SD")}
                          </strong>
                        </p>
                        {/* Button */}
                        <a className="btn btn-outline-dark" href="shop.html">
                          {t("Shop Now")}{" "}
                          <i className="fe fe-arrow-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item */}
              <div className="w-100">
                <div
                  className="card bg-cover"
                  style={{ backgroundImage: "url(/img/covers/cover-30.jpg)" }}
                >
                  <div
                    className="row align-items-center"
                    style={{ minHeight: "400px" }}
                  >
                    <div className="col-12">
                      <div className="card-body px-md-10 py-11 text-center text-white">
                        {/* Preheading */}
                        <p className="text-uppercase">{t("Enjoy an extra")}</p>
                        {/* Heading */}
                        <h1 className="display-4 text-uppercase">
                          {t("50% off")}
                        </h1>
                        {/* Link */}
                        <a
                          className="link-underline text-reset"
                          href="shop.html"
                        >
                          {t("Shop Collection")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Header */}
            <div className="row align-items-center mb-7">
              <div className="col-12 col-md">
                {/* Heading */}
                <h3 className="mb-1">{t("Womens' Clothing")}</h3>
                {/* Breadcrumb */}
                <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <a className="text-gray-400" href="index.html">
                      {t("Home")}
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    {t("Women's Clothing")}
                  </li>
                </ol>
              </div>
              <div className="col-12 col-md-auto">
                {/* Select */}
                <select className="custom-select custom-select-xs">
                  <option selected>{t("Most popular")}</option>
                </select>
              </div>
            </div>
            {/* Tags */}
            <div className="row mb-7">
              <div className="col-12">
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  {t("Shift dresses")}{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  {t("Summer")}{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  M{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  {t("White")}{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  {t("Red")}{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  {t("Adidas")}{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $10.00 - $49.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $50.00 - $99.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
              </div>
            </div>
            {/* Products */}
            <div className="row">
              {product.map((value) => (
                <ProductShop {...value} key={value._id} />
              ))}
            </div>
            {/* Pagination */}
            <Paging {...paginate} />
          </div>
        </div>
      </div>
    </section>
  );
}
