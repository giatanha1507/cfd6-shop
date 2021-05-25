import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function AboutUs() {
  let { t } = useTranslate();

  return (
    <section className="py-12 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h2 className="mb-10">Fashion Democracy</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-9 font-size-lg text-gray-500">
          <div className="col-12 col-md-5">
            <p>
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
            <p className="mb-md-0">
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-5 font-size-lg text-gray-500">
            <p>
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
            <p className="mb-0">
              {t(
                " Given wherein. Doesn't called also and air sea to make firstsubdue beginning. Appear seasons the it after whose beginning.Hath can't good life. They're multiply made give divided open,be likeness Cattle be have. Life tree darkness. She'd very."
              )}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {/* Button */}
            <a className="btn btn-dark" href="shop.html">
              Shop Now <i className="fe fe-arrow-right ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
