import { registerRoot } from "remotion";
import { AnimalRemotionRoot } from "./AnimalRoot";
import { BirdRemotionRoot } from "./BirdRoot";
import { FruitRemotionRoot } from "./FruitRoot";
import { VegetableRemotionRoot } from "./VegetableRoot";
import { FlowerRemotionRoot } from "./FlowerRoot";
import { SeaCreatureRemotionRoot } from "./SeaCreatureRoot";
import { InsectRemotionRoot } from "./InsectRoot";
import { DinosaurRemotionRoot } from "./DinosaurRoot";
import { InstrumentRemotionRoot } from "./InstrumentRoot";
import { VehicleRemotionRoot } from "./VehicleRoot";
import { CountryRemotionRoot } from "./CountryRoot";
import { SportRemotionRoot } from "./SportRoot";
import { FoodRemotionRoot } from "./FoodRoot";
import { ColorshapeRemotionRoot } from "./ColorshapeRoot";
import React from "react";

// Phase 1-7: 350 videos
// Phase 8: Sports (10) + Food (30) + Colors (10) = 50
const CombinedRoot: React.FC = () => {
  return React.createElement(React.Fragment, null,
    React.createElement(AnimalRemotionRoot),
    React.createElement(BirdRemotionRoot),
    React.createElement(FruitRemotionRoot),
    React.createElement(VegetableRemotionRoot),
    React.createElement(FlowerRemotionRoot),
    React.createElement(SeaCreatureRemotionRoot),
    React.createElement(InsectRemotionRoot),
    React.createElement(DinosaurRemotionRoot),
    React.createElement(InstrumentRemotionRoot),
    React.createElement(VehicleRemotionRoot),
    React.createElement(CountryRemotionRoot),
    React.createElement(SportRemotionRoot),
    React.createElement(FoodRemotionRoot),
    React.createElement(ColorshapeRemotionRoot)
  );
};

registerRoot(CombinedRoot);
