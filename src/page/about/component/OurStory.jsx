import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function OurStory() {
  let { t } = useTranslate();

  return (
    <section className="py-12">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            {/* Image */}
            <img
              src="/img/products/product-62.jpg"
              alt="..."
              className="img-fluid w-50"
            />
            {/* Image */}
            <div className="text-right mt-n13 mt-lg-n15 mb-10 mb-md-0">
              <img
                src="/img/products/product-63.jpg"
                alt="..."
                className="img-fluid w-75"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">Our story</h6>
            {/* Heading */}
            <h2 className="mb-7">About our Store</h2>
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
