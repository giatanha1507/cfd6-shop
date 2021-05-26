import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function HeaderAccount() {
  let { t } = useTranslate();

  return (
    <div className="row">
      <div className="col-12 text-center">
        {/* Heading */}
        <h3 className="mb-10">{t("My Account")}</h3>
      </div>
    </div>
  );
}
