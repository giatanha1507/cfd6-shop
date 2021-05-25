import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function OurStory_nd() {
  let { t } = useTranslate();

  return (
    <section className="py-12">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6 order-md-2 text-right">
            {/* Image */}
            <img
              src="/img/products/product-36.jpg"
              alt="..."
              className="img-fluid w-50"
            />
            {/* Image */}
            <div className="text-left mt-n13 mt-lg-n15 mb-10 mb-md-0">
              <img
                src="/img/products/product-37.jpg"
                alt="..."
                className="img-fluid w-75"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 order-md-1">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">
              {t("Who we are")}
            </h6>
            {/* Heading */}
            <h2 className="mb-7">{t("Our Story")}</h2>
            {/* Text */}
            <p className="font-size-lg text-muted">
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
            <p className="mb-0 font-size-lg text-muted">
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
