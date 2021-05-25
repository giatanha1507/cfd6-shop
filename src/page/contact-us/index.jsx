import React from 'react'
import useTranslate from '../../core/hook/useTranslate';

export function ContactUs() {
  let { t } = useTranslate();

    return (
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">{t("Contact Us")}</h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 col-xl-3">
              <aside className="mb-9 mb-md-0">
                {/* Heading */}
                <h6 className="mb-6">
                  <i className="fe fe-phone text-primary mr-4" />{" "}
                  {t("Call to Us")}:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                  {t("We're available from 10 am - 10 pm EST, 7 days a week.")}
                </p>
                <p>
                  <strong>{t("Customer Service:")}</strong>
                  <br />
                  <a className="text-gray-500" href="tel:60146-389-574">
                    6-146-389-574
                  </a>
                </p>
                <p className="mb-0">
                  <strong>{t("Careers:")}</strong>
                  <br />
                  <a className="text-gray-500" href="tel:60146-389-574">
                    6-146-389-574
                  </a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                  <i className="fe fe-mail text-primary mr-4" />{" "}
                  {t("Write to Us")}:
                </h6>
                {/* Text */}
                <p className="text-gray-500">
                  {t(
                    "Fill out our form and we will contact you within 24 hours."
                  )}
                </p>
                <p>
                  <strong>{t("Customer Service:")}</strong>
                  <br />
                  <a
                    className="text-gray-500"
                    href="mailto:customer@example.com"
                  >
                    customer@example.com
                  </a>
                </p>
                <p className="mb-0">
                  <strong>{t("Careers:")}</strong>
                  <br />
                  <a
                    className="text-gray-500"
                    href="mailto:careers@example.com"
                  >
                    careers@example.com
                  </a>
                </p>
                {/* Divider */}
                <hr />
                {/* Heading */}
                <h6 className="mb-6">
                  <i className="fe fe-mail text-primary mr-4" /> {t("Find Us:")}
                </h6>
                {/* Text */}
                <p className="mb-0 text-gray-500">
                  {t("Want to visit our Offline Stores?")}
                </p>
                {/* Button */}
                <p className="mb-0">
                  <a
                    className="btn btn-link px-0 text-body"
                    href="store-locator.html"
                  >
                    {t("Go to Store Locator")}{" "}
                    <i className="fe fe-arrow-right ml-2" />
                  </a>
                </p>
              </aside>
            </div>
            <div className="col-12 col-md-8">
              {/* Form */}
              <form>
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="contactName">
                    {t("Your Name *")}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="contactName"
                    type="text"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="contactEmail">
                    {t("Your Email *")}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="contactEmail"
                    type="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="contactTitle">
                    {t(" Title *")}
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="contactTitle"
                    type="text"
                    placeholder="Title *"
                    required
                  />
                </div>
                {/* Email */}
                <div className="form-group mb-7">
                  <label className="sr-only" htmlFor="contactMessage">
                    {t("  Message *")}
                  </label>
                  <textarea
                    className="form-control form-control-sm"
                    id="contactMessage"
                    rows={5}
                    placeholder="Message *"
                    required
                    defaultValue={""}
                  />
                </div>
                {/* Button */}
                <button className="btn btn-dark">{t("Send Message")}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}
