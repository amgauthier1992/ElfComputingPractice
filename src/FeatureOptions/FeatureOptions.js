import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function FeatureOptions(props) {
  const optionItems = props.options.map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    const checked = item.name === props.selected[props.feature].name;

    return (
      <FeatureItem
        itemHash={itemHash}
        feature={props.feature}
        item={item}
        selected={checked}
        updateFeature={props.updateFeature}
        USCurrencyFormat={USCurrencyFormat}
      />
    );
  });

  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {optionItems}
    </fieldset>
  );
}
