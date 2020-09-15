import React from "react";
import FeatureOptions from "../FeatureOptions/FeatureOptions";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Object.keys(props.features) returns [Processors,OS,GPU] (the keys for features object in array form)

export default function FeaturesForm(props) {
  const featureItems = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;
    const options = props.features[feature];
    return (
      <FeatureOptions
        key={featureHash}
        feature={feature}
        options={options}
        updateFeature={props.updateFeature}
        selected={props.selected}
        USCurrencyFormat={USCurrencyFormat}
      />
    );
  });
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {featureItems}
    </form>
  );
}
