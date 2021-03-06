import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useTranslate from "../../core/hook/useTranslate";
import { handleAddCart } from "../../redux/action/cartAction";
import { handleGetView } from "../../redux/action/productAction";
import { currency } from "../../utils/cur";

export function ProductShop(props) {
  let { t } = useTranslate();
  let { loading } = useSelector((store) => store.product);
  let { name, thumbnail_url, rating_average, slug, price } = props;
  let dispatch = useDispatch();
  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        {/* <div className="badge badge-white card-badge card-badge-left text-uppercase">
          {t("Net")}
        </div> */}
        {/* Image */}
        {loading ? (
          <Skeleton width={254} height={454} />
        ) : (
          <div className="card-img" style={{ minHeight: "380px" }}>
            {/* Image */}
            <Link className="card-img-hover" to={`/product/${slug}`}>
              <img
                className="card-img-top card-img-back"
                src={thumbnail_url}
                alt="..."
              />
              <img
                className="card-img-top card-img-front"
                src={thumbnail_url}
                alt="..."
              />
            </Link>
            {/* Actions */}
            <div className="card-actions">
              <span
                onClick={() => dispatch(handleGetView({ ...props }))}
                className="card-action"
              >
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="modal"
                  data-target="#modalProduct"
                >
                  <i className="fe fe-eye" />
                </button>
              </span>
              <span className="card-action">
                <button
                  onClick={() => dispatch(handleAddCart({ ...props }))}
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <i className="fe fe-shopping-cart" />
                </button>
              </span>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <i className="fe fe-heart" />
                </button>
              </span>
            </div>
          </div>
        )}
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              {/* {categories} */}
            </a>
          </div>
          {/* Title */}
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <div className="font-weight-bold product_shop two-lines">
              <a className="text-body " href="product.html">
                {name}
              </a>
            </div>
          )}
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <>
              <div
                class="rating font-size-sm text-dark"
                data-value={rating_average}
              >
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
                <div class="rating-item">
                  <i class="fas fa-star"></i>
                </div>
              </div>
              {/* // Price */}
              <div className="font-weight-bold text-muted">
                {currency(price)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
