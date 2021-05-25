import React from "react";
import useTranslate from "../../../core/hook/useTranslate";

export function Slogan() {
  let { t } = useTranslate();

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center py-12 bg-primary bg-pattern">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Text */}
            <p className="font-size-h5 line-height-base text-center text-white">
              {t(
                "Together won't divided fourth let grass above forth. Creaturemidst let cattle place tree. Gathered whose land form fruitfulunder bring creeping in upon void man unto divided itselfgathered."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
