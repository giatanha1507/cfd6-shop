import React from "react";
import useTranslate from "../../core/hook/useTranslate";

export function FAQ() {
  let { t } = useTranslate();

  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Heading */}
            <h3 className="mb-10 text-center">
              {t("Frequently Asked Questions")}
            </h3>
            {/* Heading */}
            <h5 className="mb-7">{t("Orders:")}</h5>
            {/* List group */}
            <ul
              className="list-group list-group-flush-x mb-9"
              id="faqCollapseParentOne"
            >
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseOne"
                >
                  1. {t("Bring of had which their whose you're it own?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseOne"
                  data-parent="#faqCollapseParentOne"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseTwo"
                >
                  2. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseTwo"
                  data-parent="#faqCollapseParentOne"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseThree"
                >
                  3. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseThree"
                  data-parent="#faqCollapseParentOne"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseFour"
                >
                  4. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseFour"
                  data-parent="#faqCollapseParentOne"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            {/* Heading */}
            <h5 className="mb-7">{t("Shipping &amp; Returns:")}</h5>
            {/* List group */}
            <ul
              className="list-group list-group-flush-x mb-9"
              id="faqCollapseParentTwo"
            >
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseFive"
                >
                  1. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseFive"
                  data-parent="#faqCollapseParentTwo"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseSix"
                >
                  2. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseSix"
                  data-parent="#faqCollapseParentTwo"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseSeven"
                >
                  3. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseSeven"
                  data-parent="#faqCollapseParentTwo"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseEight"
                >
                  4. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseEight"
                  data-parent="#faqCollapseParentTwo"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseNine"
                >
                  5. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseNine"
                  data-parent="#faqCollapseParentTwo"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            {/* Heading */}
            <h5 className="mb-7">{t("Payment:")}</h5>
            {/* List group */}
            <ul
              className="list-group list-group-flush-x"
              id="faqCollapseParentThree"
            >
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseTen"
                >
                  1.{t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseTen"
                  data-parent="#faqCollapseParentThree"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseEleven"
                >
                  2. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseEleven"
                  data-parent="#faqCollapseParentThree"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseTwelve"
                >
                  3. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseTwelve"
                  data-parent="#faqCollapseParentThree"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                {/* Toggle */}
                <a
                  className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                  data-toggle="collapse"
                  href="#faqCollapseThirteen"
                >
                  4. {t("Over shall air can't subdue fly divide him?")}
                </a>
                {/* Collapse */}
                <div
                  className="collapse"
                  id="faqCollapseThirteen"
                  data-parent="#faqCollapseParentThree"
                >
                  <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">
                      {t(
                        "Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule creepeth own lesser years itself so seed fifth for grass."
                      )}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
