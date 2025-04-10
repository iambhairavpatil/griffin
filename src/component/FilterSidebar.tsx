import React from "react";
const FilterSidebar: React.FC = () => {
  return (
    <div className="col-lg-3">
      <h6>Category</h6>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label">Everyone - All Gender</label>
      </div>

      <h6 className="mt-4">Color</h6>
      <div className="d-flex flex-wrap gap-2">
        {["black", "blue", "green", "pink"].map((color) => (
          <div
            key={color}
            className="border"
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: color,
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <h6 className="mt-4">Size</h6>
      <div className="d-flex flex-wrap gap-2">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <span key={size} className="border px-2 py-1 small">
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
