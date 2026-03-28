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
import { SpaceRemotionRoot } from "./SpaceRoot";
import React from "react";

// 450 VIDEOS COMPLETE - 15 Categories × 30 Videos Each
// Phase 1: Animals (30) + Birds (20) = 50
// Phase 2: Birds (10) + Fruits (30) + Vegetables (10) = 50
// Phase 3: Vegetables (20) + Flowers (30) = 50
// Phase 4: Sea Creatures (30) + Insects (20) = 50
// Phase 5: Insects (10) + Dinosaurs (30) + Instruments (10) = 50
// Phase 6: Instruments (20) + Vehicles (30) = 50
// Phase 7: Countries (30) + Sports (20) = 50
// Phase 8: Sports (10) + Food (30) + Colors (10) = 50
// Phase 9: Colors (20) + Space (30) = 50
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
    React.createElement(ColorshapeRemotionRoot),
    React.createElement(SpaceRemotionRoot)
  );
};

registerRoot(CombinedRoot);
