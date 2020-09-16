import React from "react";
import OptionItem from "../OptionItem/OptionItem";
import Total from "../Total/Total";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Cart(props) {
  return (
    <>
      <section className="main__summary">
        <h2>Your cart</h2>
        {Object.keys(props.selected).map((feature, idx) => {
          const featureHash = feature + "-" + idx;
          const selectedOption = props.selected[feature];

          return (
            <OptionItem
              key={idx}
              feature={feature}
              featureHash={featureHash}
              selectedOption={selectedOption}
              USCurrencyFormat={USCurrencyFormat}
            />
          );
        })}
        <Total selected={props.selected} />
      </section>
    </>
  );
}
