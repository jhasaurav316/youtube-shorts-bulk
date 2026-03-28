import { registerRoot } from "remotion";
import { AnimalRemotionRoot } from "./AnimalRoot";
import { BirdRemotionRoot } from "./BirdRoot";
import { FruitRemotionRoot } from "./FruitRoot";
import { VegetableRemotionRoot } from "./VegetableRoot";
import React from "react";

// Phase 1: Animals (30) + Birds (20) = 50
// Phase 2: Birds (10) + Fruits (30) + Vegetables (10) = 50
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(AnimalRemotionRoot),
    React.createElement(BirdRemotionRoot),
    React.createElement(FruitRemotionRoot),
    React.createElement(VegetableRemotionRoot)
  );
};

registerRoot(CombinedRoot);
