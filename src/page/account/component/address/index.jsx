import React from "react";
import useTranslate from "../../../../core/hook/useTranslate";

export function AddressAC() {
  let { t } = useTranslate();
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Heading */}
      <h6 className="mb-7">{t("Add Address")}</h6>
      {/* Form */}
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">{t("First Name")} *</label>
              <input
                className="form-control"
                id="firstName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">{t("Last Name")} *</label>
              <input
                className="form-control"
                id="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="emailAddress">{t("Email Address")} *</label>
              <input
                className="form-control"
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="companyName"> {t("Company Name")}</label>
              <input
                className="form-control"
                id="companyName"
                type="text"
                placeholder="Company Name"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="country">{t("Country")} *</label>
              <input
                className="form-control"
                id="country"
                type="text"
                placeholder="Country"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="addressLineOne">{t("Address Line")} 1 *</label>
              <input
                className="form-control"
                id="addressLineOne"
                type="text"
                placeholder="Address Line 1"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="addressLineTwo">{t("Address Line")} 2</label>
              <input
                className="form-control"
                id="addressLineTwo"
                type="text"
                placeholder="Address Line 2"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="townCity">{t("Town / City")} *</label>
              <input
                className="form-control"
                id="townCity"
                type="text"
                placeholder="Town / City"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="zipPostcode">{t("ZIP / Postcode")} *</label>
              <input
                className="form-control"
                id="zipPostcode"
                type="text"
                placeholder="ZIP / Postcode"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="mobilePhone">{t("Mobile Phone")} *</label>
              <input
                className="form-control"
                id="mobilePhone"
                type="tel"
                placeholder="Mobile Phone"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultDeliveryAddress"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultDeliveryAddress"
                >
                  {t(" Default delivery address")}
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-0">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultShippingAddress"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultShippingAddress"
                >
                  {t("Default shipping address")}
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <button className="btn btn-dark" type="submit">
          {t(" Add Address")}
        </button>
      </form>
    </div>
  );
}
