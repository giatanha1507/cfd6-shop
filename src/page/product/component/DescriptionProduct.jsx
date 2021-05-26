import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function DescriptionProduct() {
  let{t}=useTranslate();
  return (
    <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Nav */}
            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#descriptionTab"
              >
                {t(" Description")}
              </a>
              <a className="nav-link" data-toggle="tab" href="#sizeTab">
                {t("     Size &amp; Fit")}
              </a>
              <a className="nav-link" data-toggle="tab" href="#shippingTab">
                {t("  Shipping &amp; Return")}
              </a>
            </div>
            {/* Content */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="descriptionTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12">
                        {/* Text */}
                        <p className="text-gray-500">
                          {t(
                            " Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years herb after form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering brought bearing. Abundantly creeping whose. Beginning form have void two. A whose."
                          )}
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* List */}
                        <ul className="list list-unstyled mb-md-0 text-gray-500">
                          <li>
                            <strong className="text-body">SKU</strong>:
                            #61590437
                          </li>
                          <li>
                            <strong className="text-body">
                              {t("Occasion")}
                            </strong>
                            {t(": Lifestyle, Sport")}
                          </li>
                          <li>
                            <strong className="text-body">
                              {t("Country")}
                            </strong>
                            {t(": Italy")}
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* List */}
                        <ul className="list list-unstyled mb-0">
                          <li>
                            <strong>{t("Outer")}</strong>:{" "}
                            {t("Leather 100%, Polyamide 100%")}
                          </li>
                          <li>
                            <strong>{t("Lining")}</strong>:{" "}
                            {t("Polyester 100%")}
                          </li>
                          <li>
                            <strong>{t("CounSoletry")}</strong>:{" "}
                            {t("Rubber 100%")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sizeTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* Text */}
                        <p className="mb-4">
                          <strong>{t("Fitting information:")}</strong>
                        </p>
                        {/* List */}
                        <ul className="mb-md-0 text-gray-500">
                          <li>
                            {t(
                              "Upon seas hath every years have whose subdue creeping they're it were."
                            )}
                          </li>
                          <li>{t("Make great day bearing.")}</li>
                          <li>
                            {t("For the moveth is days don't said days.")}
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Text */}
                        <p className="mb-4">
                          <strong>{t("Model measurements:")}</strong>
                        </p>
                        {/* List */}
                        <ul className="list-unstyled text-gray-500">
                          <li>{t("Height: 1.80 m")}</li>
                          <li>{t("Bust/Chest: 89 cm")}</li>
                          <li>{t("Hips: 91 cm")}</li>
                          <li>{t("Waist: 65 cm")}</li>
                          <li>{t("Model size: M")}</li>
                        </ul>
                        {/* Size */}
                        <p className="mb-0">
                          <img
                            src="/img/icons/icon-ruler.svg"
                            alt="..."
                            className="img-fluid"
                          />
                          <a
                            className="text-reset text-decoration-underline ml-3"
                            data-toggle="modal"
                            href="#modalSizeChart"
                          >
                            {t(" Size chart")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="shippingTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    {/* Table */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm table-hover">
                        <thead>
                          <tr>
                            <th>{t("Shipping Options")}</th>
                            <th>{t("Delivery Time")}</th>
                            <th>{t("Price")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{t("Standard Shipping")}</td>
                            <td>{t("Delivery in 5 - 7 working days")}</td>
                            <td>$8.00</td>
                          </tr>
                          <tr>
                            <td>{t("Express Shipping")}</td>
                            <td>{t("Delivery in 3 - 5 working days")}</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>{t("1 - 2 day Shipping")}</td>
                            <td>{t("Delivery in 1 - 2 working days")}</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>{t("Free Shipping")}</td>
                            <td>
                              {t(
                                "Living won't the He one every subdue meat replenish face was you morning firmament darkness."
                              )}
                            </td>
                            <td>$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Caption */}
                    <p className="mb-0 text-gray-500">
                      {t(
                        " May, life blessed night so creature likeness their, for."
                      )}{" "}
                      <a
                        className="text-body text-decoration-underline"
                        href="#!"
                      >
                        {t("Find out more")}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
