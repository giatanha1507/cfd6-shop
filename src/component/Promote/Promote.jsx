import React from "react";
import useTranslate from "../../core/hook/useTranslate";

export function Promote() {
  let { t } = useTranslate();

  return (
    <div className="py-3 bg-dark bg-pattern mb-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Text */}
            <div className="text-center text-white">
              <span className="heading-xxs letter-spacing-xl">
                {t(" ⚡️ Happy Holiday Deals on Everything ⚡️")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
