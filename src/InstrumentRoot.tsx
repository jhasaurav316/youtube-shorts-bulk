import "./index.css";
import { Composition } from "remotion";
import { AlphabetShortsTemplate } from "./AlphabetShortsTemplate";
import type { AlphabetShortsProps } from "./AlphabetShortsTemplate";
import React from "react";

export const InstrumentRemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="InstrumentsString1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "String Instruments - Part 1",
          videoId: "instruments-string-1",
          bgGradient: ["#AD1457","#F48FB1"] as [string, string],
          accentColor: "#880E4F",
          letters: [
          {
          "letter": "S",
          "word": "Sitar",
          "emoji": "🎸",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Guitar",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "V",
          "word": "Violin",
          "emoji": "🎻",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tabla",
          "emoji": "🥁",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "V",
          "word": "Veena",
          "emoji": "🎸",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "H",
          "word": "Harp",
          "emoji": "🎵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "B",
          "word": "Banjo",
          "emoji": "🪕",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "M",
          "word": "Mandolin",
          "emoji": "🎸",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "U",
          "word": "Ukulele",
          "emoji": "🎸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "C",
          "word": "Cello",
          "emoji": "🎻",
          "bgColor": "#455A64"
          },
          {
          "letter": "D",
          "word": "Dulcimer",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "E",
          "word": "Ektara",
          "emoji": "🎸",
          "bgColor": "#BF360C"
          },
          {
          "letter": "S",
          "word": "Sarangi",
          "emoji": "🎻",
          "bgColor": "#E65100"
          },
          {
          "letter": "R",
          "word": "Rabab",
          "emoji": "🎸",
          "bgColor": "#37474F"
          },
          {
          "letter": "K",
          "word": "Kamancheh",
          "emoji": "🎻",
          "bgColor": "#795548"
          },
          {
          "letter": "L",
          "word": "Lute",
          "emoji": "🎸",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "Z",
          "word": "Zither",
          "emoji": "🎵",
          "bgColor": "#33691E"
          },
          {
          "letter": "P",
          "word": "Pipa",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Acoustic Guitar",
          "emoji": "🎸",
          "bgColor": "#FF5722"
          },
          {
          "letter": "F",
          "word": "Fiddle",
          "emoji": "🎻",
          "bgColor": "#FFA000"
          },
          {
          "letter": "N",
          "word": "Nagara",
          "emoji": "🥁",
          "bgColor": "#263238"
          },
          {
          "letter": "O",
          "word": "Oud",
          "emoji": "🎸",
          "bgColor": "#5D4037"
          },
          {
          "letter": "I",
          "word": "Indian Fiddle",
          "emoji": "🎻",
          "bgColor": "#00897B"
          },
          {
          "letter": "W",
          "word": "Wire Harp",
          "emoji": "🎵",
          "bgColor": "#1976D2"
          },
          {
          "letter": "J",
          "word": "Japanese Koto",
          "emoji": "🎵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "X",
          "word": "Xylophone String",
          "emoji": "🎵",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "Y",
          "word": "Yangqin",
          "emoji": "🎵",
          "bgColor": "#FF9800"
          },
          {
          "letter": "Q",
          "word": "Qanun",
          "emoji": "🎵",
          "bgColor": "#607D8B"
          },
          {
          "letter": "T",
          "word": "Tambura",
          "emoji": "🎸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Santoor",
          "emoji": "🎵",
          "bgColor": "#00897B"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsString2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "String Instruments - Part 2",
          videoId: "instruments-string-2",
          bgGradient: ["#C2185B","#F8BBD0"] as [string, string],
          accentColor: "#AD1457",
          letters: [
          {
          "letter": "E",
          "word": "Electric Guitar",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "B",
          "word": "Bass Guitar",
          "emoji": "🎸",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Classical Guitar",
          "emoji": "🎸",
          "bgColor": "#795548"
          },
          {
          "letter": "S",
          "word": "Steel Guitar",
          "emoji": "🎸",
          "bgColor": "#607D8B"
          },
          {
          "letter": "M",
          "word": "Mohan Veena",
          "emoji": "🎸",
          "bgColor": "#FF9800"
          },
          {
          "letter": "R",
          "word": "Ravanhatha",
          "emoji": "🎻",
          "bgColor": "#BF360C"
          },
          {
          "letter": "D",
          "word": "Dotara",
          "emoji": "🎸",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Gopichand",
          "emoji": "🎸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Taus",
          "emoji": "🎻",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "K",
          "word": "Kinnari",
          "emoji": "🎸",
          "bgColor": "#E65100"
          },
          {
          "letter": "P",
          "word": "Pena",
          "emoji": "🎸",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Hawaiian Guitar",
          "emoji": "🎸",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Viola",
          "emoji": "🎻",
          "bgColor": "#455A64"
          },
          {
          "letter": "L",
          "word": "Lyre",
          "emoji": "🎵",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "A",
          "word": "Autoharp",
          "emoji": "🎵",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "N",
          "word": "Nyckelharpa",
          "emoji": "🎻",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Octobass",
          "emoji": "🎻",
          "bgColor": "#263238"
          },
          {
          "letter": "F",
          "word": "Flamenco Guitar",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Washboard",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "J",
          "word": "Jawbone",
          "emoji": "🎵",
          "bgColor": "#5D4037"
          },
          {
          "letter": "I",
          "word": "Irish Bouzouki",
          "emoji": "🎸",
          "bgColor": "#43A047"
          },
          {
          "letter": "U",
          "word": "Upright Bass",
          "emoji": "🎻",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xalam",
          "emoji": "🎸",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Y",
          "word": "Yazhh",
          "emoji": "🎸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zurna String",
          "emoji": "🎸",
          "bgColor": "#00897B"
          },
          {
          "letter": "Q",
          "word": "Qin",
          "emoji": "🎸",
          "bgColor": "#607D8B"
          },
          {
          "letter": "S",
          "word": "Sarod",
          "emoji": "🎸",
          "bgColor": "#FF9800"
          },
          {
          "letter": "T",
          "word": "Tumbi",
          "emoji": "🎸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bulbul Tarang",
          "emoji": "🎸",
          "bgColor": "#BF360C"
          },
          {
          "letter": "C",
          "word": "Chikari",
          "emoji": "🎸",
          "bgColor": "#2E7D32"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsString3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "String Instruments - Part 3",
          videoId: "instruments-string-3",
          bgGradient: ["#D81B60","#FCE4EC"] as [string, string],
          accentColor: "#C2185B",
          letters: [
          {
          "letter": "S",
          "word": "Surbahar",
          "emoji": "🎸",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "R",
          "word": "Rubab",
          "emoji": "🎸",
          "bgColor": "#795548"
          },
          {
          "letter": "V",
          "word": "Vichitra Veena",
          "emoji": "🎸",
          "bgColor": "#FF9800"
          },
          {
          "letter": "G",
          "word": "Gottuvadhyam",
          "emoji": "🎸",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "D",
          "word": "Dilruba",
          "emoji": "🎻",
          "bgColor": "#E91E63"
          },
          {
          "letter": "E",
          "word": "Esraj",
          "emoji": "🎻",
          "bgColor": "#BF360C"
          },
          {
          "letter": "K",
          "word": "Kamaicha",
          "emoji": "🎻",
          "bgColor": "#827717"
          },
          {
          "letter": "M",
          "word": "Mayuri Veena",
          "emoji": "🎸",
          "bgColor": "#00897B"
          },
          {
          "letter": "T",
          "word": "Tanpura",
          "emoji": "🎸",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "P",
          "word": "Pulluvan Veena",
          "emoji": "🎸",
          "bgColor": "#33691E"
          },
          {
          "letter": "H",
          "word": "Hamza",
          "emoji": "🎸",
          "bgColor": "#455A64"
          },
          {
          "letter": "B",
          "word": "Baglama",
          "emoji": "🎸",
          "bgColor": "#FF5722"
          },
          {
          "letter": "C",
          "word": "Charango",
          "emoji": "🎸",
          "bgColor": "#E65100"
          },
          {
          "letter": "L",
          "word": "Langspil",
          "emoji": "🎵",
          "bgColor": "#37474F"
          },
          {
          "letter": "A",
          "word": "Arpeggione",
          "emoji": "🎻",
          "bgColor": "#607D8B"
          },
          {
          "letter": "N",
          "word": "Ngoni",
          "emoji": "🎸",
          "bgColor": "#5D4037"
          },
          {
          "letter": "O",
          "word": "Orpharion",
          "emoji": "🎸",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "F",
          "word": "Five String",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "W",
          "word": "Welsh Harp",
          "emoji": "🎵",
          "bgColor": "#1565C0"
          },
          {
          "letter": "J",
          "word": "Jal Tarang",
          "emoji": "🎵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "I",
          "word": "Ikembe",
          "emoji": "🎵",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "U",
          "word": "Ud",
          "emoji": "🎸",
          "bgColor": "#795548"
          },
          {
          "letter": "X",
          "word": "Xun String",
          "emoji": "🎵",
          "bgColor": "#263238"
          },
          {
          "letter": "Y",
          "word": "Yaylı Tambur",
          "emoji": "🎸",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zhongruan",
          "emoji": "🎸",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Q",
          "word": "Quinton",
          "emoji": "🎻",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Swarmandal",
          "emoji": "🎵",
          "bgColor": "#FFA000"
          },
          {
          "letter": "T",
          "word": "Triveni",
          "emoji": "🎸",
          "bgColor": "#00897B"
          },
          {
          "letter": "B",
          "word": "Been",
          "emoji": "🎸",
          "bgColor": "#33691E"
          },
          {
          "letter": "M",
          "word": "Morin Khuur",
          "emoji": "🎻",
          "bgColor": "#607D8B"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsWind1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wind Instruments - Part 1",
          videoId: "instruments-wind-1",
          bgGradient: ["#1565C0","#BBDEFB"] as [string, string],
          accentColor: "#0D47A1",
          letters: [
          {
          "letter": "F",
          "word": "Flute",
          "emoji": "🪈",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "S",
          "word": "Shehnai",
          "emoji": "🎺",
          "bgColor": "#FF9800"
          },
          {
          "letter": "C",
          "word": "Clarinet",
          "emoji": "🎵",
          "bgColor": "#263238"
          },
          {
          "letter": "T",
          "word": "Trumpet",
          "emoji": "🎺",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "S",
          "word": "Saxophone",
          "emoji": "🎷",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "O",
          "word": "Oboe",
          "emoji": "🎵",
          "bgColor": "#795548"
          },
          {
          "letter": "B",
          "word": "Bansuri",
          "emoji": "🪈",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Harmonica",
          "emoji": "🎵",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "P",
          "word": "Pan Flute",
          "emoji": "🪈",
          "bgColor": "#43A047"
          },
          {
          "letter": "R",
          "word": "Recorder",
          "emoji": "🪈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "A",
          "word": "Alghoza",
          "emoji": "🪈",
          "bgColor": "#E65100"
          },
          {
          "letter": "N",
          "word": "Nadaswaram",
          "emoji": "🎺",
          "bgColor": "#BF360C"
          },
          {
          "letter": "M",
          "word": "Mashak",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "K",
          "word": "Kombu",
          "emoji": "🎺",
          "bgColor": "#33691E"
          },
          {
          "letter": "D",
          "word": "Dizi",
          "emoji": "🪈",
          "bgColor": "#1565C0"
          },
          {
          "letter": "G",
          "word": "Gogona",
          "emoji": "🎵",
          "bgColor": "#5D4037"
          },
          {
          "letter": "L",
          "word": "Liru",
          "emoji": "🪈",
          "bgColor": "#607D8B"
          },
          {
          "letter": "E",
          "word": "English Horn",
          "emoji": "🎵",
          "bgColor": "#455A64"
          },
          {
          "letter": "W",
          "word": "Whistle",
          "emoji": "🪈",
          "bgColor": "#7CB342"
          },
          {
          "letter": "I",
          "word": "Indian Flute",
          "emoji": "🪈",
          "bgColor": "#00897B"
          },
          {
          "letter": "J",
          "word": "Jew's Harp",
          "emoji": "🎵",
          "bgColor": "#FF5722"
          },
          {
          "letter": "V",
          "word": "Venu",
          "emoji": "🪈",
          "bgColor": "#689F38"
          },
          {
          "letter": "U",
          "word": "Uilleann Pipes",
          "emoji": "🎵",
          "bgColor": "#37474F"
          },
          {
          "letter": "X",
          "word": "Xiao",
          "emoji": "🪈",
          "bgColor": "#263238"
          },
          {
          "letter": "Y",
          "word": "Yahi",
          "emoji": "🪈",
          "bgColor": "#E91E63"
          },
          {
          "letter": "Z",
          "word": "Zurna",
          "emoji": "🎺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Q",
          "word": "Quena",
          "emoji": "🪈",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tuba",
          "emoji": "🎺",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "French Horn",
          "emoji": "🎺",
          "bgColor": "#FFA000"
          },
          {
          "letter": "B",
          "word": "Bassoon",
          "emoji": "🎵",
          "bgColor": "#5D4037"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsWind2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wind Instruments - Part 2",
          videoId: "instruments-wind-2",
          bgGradient: ["#1976D2","#90CAF9"] as [string, string],
          accentColor: "#1565C0",
          letters: [
          {
          "letter": "P",
          "word": "Pungi",
          "emoji": "🎵",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "S",
          "word": "Surpeti",
          "emoji": "🎵",
          "bgColor": "#FF9800"
          },
          {
          "letter": "N",
          "word": "Nagaswaram",
          "emoji": "🎺",
          "bgColor": "#BF360C"
          },
          {
          "letter": "M",
          "word": "Murli",
          "emoji": "🪈",
          "bgColor": "#43A047"
          },
          {
          "letter": "T",
          "word": "Titti",
          "emoji": "🪈",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "A",
          "word": "Alto Sax",
          "emoji": "🎷",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "B",
          "word": "Bugle",
          "emoji": "🎺",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Cornet",
          "emoji": "🎺",
          "bgColor": "#455A64"
          },
          {
          "letter": "D",
          "word": "Didgeridoo",
          "emoji": "🎵",
          "bgColor": "#795548"
          },
          {
          "letter": "E",
          "word": "Euphonium",
          "emoji": "🎺",
          "bgColor": "#607D8B"
          },
          {
          "letter": "F",
          "word": "Fife",
          "emoji": "🪈",
          "bgColor": "#33691E"
          },
          {
          "letter": "G",
          "word": "Gemshorn",
          "emoji": "🪈",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "H",
          "word": "Horn",
          "emoji": "🎺",
          "bgColor": "#FFA000"
          },
          {
          "letter": "I",
          "word": "Indian Shehnai",
          "emoji": "🎺",
          "bgColor": "#E65100"
          },
          {
          "letter": "K",
          "word": "Koumbu",
          "emoji": "🎺",
          "bgColor": "#263238"
          },
          {
          "letter": "L",
          "word": "Low Whistle",
          "emoji": "🪈",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Ocarina",
          "emoji": "🪈",
          "bgColor": "#E91E63"
          },
          {
          "letter": "R",
          "word": "Rauschpfeife",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "W",
          "word": "Woodwind",
          "emoji": "🎵",
          "bgColor": "#689F38"
          },
          {
          "letter": "J",
          "word": "Japanese Flute",
          "emoji": "🪈",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vuvuzela",
          "emoji": "🎺",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "U",
          "word": "Uffizi Flute",
          "emoji": "🪈",
          "bgColor": "#5D4037"
          },
          {
          "letter": "X",
          "word": "Xaphoon",
          "emoji": "🎵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "Y",
          "word": "Yamaha Wind",
          "emoji": "🎵",
          "bgColor": "#FF5722"
          },
          {
          "letter": "Z",
          "word": "Zampogna",
          "emoji": "🎵",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Q",
          "word": "Quill Pipe",
          "emoji": "🪈",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Soprano Sax",
          "emoji": "🎷",
          "bgColor": "#0288D1"
          },
          {
          "letter": "T",
          "word": "Tenor Sax",
          "emoji": "🎷",
          "bgColor": "#FF9800"
          },
          {
          "letter": "B",
          "word": "Baritone Horn",
          "emoji": "🎺",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Contrabassoon",
          "emoji": "🎵",
          "bgColor": "#795548"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsWind3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Wind Instruments - Part 3",
          videoId: "instruments-wind-3",
          bgGradient: ["#1E88E5","#64B5F6"] as [string, string],
          accentColor: "#1976D2",
          letters: [
          {
          "letter": "K",
          "word": "Kahala",
          "emoji": "🪈",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Sido",
          "emoji": "🪈",
          "bgColor": "#FF9800"
          },
          {
          "letter": "M",
          "word": "Mohori",
          "emoji": "🎵",
          "bgColor": "#E91E63"
          },
          {
          "letter": "T",
          "word": "Taropi",
          "emoji": "🪈",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "P",
          "word": "Pepa",
          "emoji": "🎵",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "B",
          "word": "Bagpipe",
          "emoji": "🎵",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "A",
          "word": "Alphorn",
          "emoji": "🎺",
          "bgColor": "#795548"
          },
          {
          "letter": "C",
          "word": "Conch Shell",
          "emoji": "🐚",
          "bgColor": "#FF5722"
          },
          {
          "letter": "D",
          "word": "Drone Pipe",
          "emoji": "🎵",
          "bgColor": "#455A64"
          },
          {
          "letter": "F",
          "word": "Flageolet",
          "emoji": "🪈",
          "bgColor": "#607D8B"
          },
          {
          "letter": "G",
          "word": "Glass Flute",
          "emoji": "🪈",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "H",
          "word": "Hunting Horn",
          "emoji": "🎺",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "I",
          "word": "Irish Flute",
          "emoji": "🪈",
          "bgColor": "#43A047"
          },
          {
          "letter": "L",
          "word": "Lip Reed",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "N",
          "word": "Native Flute",
          "emoji": "🪈",
          "bgColor": "#BF360C"
          },
          {
          "letter": "O",
          "word": "Ophicleide",
          "emoji": "🎺",
          "bgColor": "#263238"
          },
          {
          "letter": "R",
          "word": "Reedpipe",
          "emoji": "🎵",
          "bgColor": "#5D4037"
          },
          {
          "letter": "E",
          "word": "English Concertina",
          "emoji": "🎵",
          "bgColor": "#37474F"
          },
          {
          "letter": "W",
          "word": "Wagner Tuba",
          "emoji": "🎺",
          "bgColor": "#FFA000"
          },
          {
          "letter": "J",
          "word": "Jug",
          "emoji": "🎵",
          "bgColor": "#6D4C41"
          },
          {
          "letter": "V",
          "word": "Viking Horn",
          "emoji": "🎺",
          "bgColor": "#546E7A"
          },
          {
          "letter": "U",
          "word": "Utogarashi",
          "emoji": "🪈",
          "bgColor": "#689F38"
          },
          {
          "letter": "X",
          "word": "Xun",
          "emoji": "🪈",
          "bgColor": "#1A237E"
          },
          {
          "letter": "Y",
          "word": "Yi Flute",
          "emoji": "🪈",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "Z",
          "word": "Zhaleika",
          "emoji": "🎵",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "Q",
          "word": "Quail Pipe",
          "emoji": "🪈",
          "bgColor": "#33691E"
          },
          {
          "letter": "S",
          "word": "Shofar",
          "emoji": "🎺",
          "bgColor": "#795548"
          },
          {
          "letter": "T",
          "word": "Tin Whistle",
          "emoji": "🪈",
          "bgColor": "#7CB342"
          },
          {
          "letter": "B",
          "word": "Bombard",
          "emoji": "🎵",
          "bgColor": "#263238"
          },
          {
          "letter": "M",
          "word": "Melodica",
          "emoji": "🎹",
          "bgColor": "#E91E63"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsPercussion1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Percussion - Part 1",
          videoId: "instruments-percussion-1",
          bgGradient: ["#FF6F00","#FFE0B2"] as [string, string],
          accentColor: "#E65100",
          letters: [
          {
          "letter": "T",
          "word": "Tabla",
          "emoji": "🥁",
          "bgColor": "#FF9800"
          },
          {
          "letter": "D",
          "word": "Dholak",
          "emoji": "🥁",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "M",
          "word": "Mridangam",
          "emoji": "🥁",
          "bgColor": "#795548"
          },
          {
          "letter": "P",
          "word": "Pakhawaj",
          "emoji": "🥁",
          "bgColor": "#BF360C"
          },
          {
          "letter": "G",
          "word": "Ghatam",
          "emoji": "🥁",
          "bgColor": "#33691E"
          },
          {
          "letter": "K",
          "word": "Kanjira",
          "emoji": "🥁",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "N",
          "word": "Naal",
          "emoji": "🥁",
          "bgColor": "#455A64"
          },
          {
          "letter": "S",
          "word": "Snare Drum",
          "emoji": "🥁",
          "bgColor": "#37474F"
          },
          {
          "letter": "B",
          "word": "Bass Drum",
          "emoji": "🥁",
          "bgColor": "#263238"
          },
          {
          "letter": "C",
          "word": "Cymbal",
          "emoji": "🥁",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xylophone",
          "emoji": "🎵",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "T",
          "word": "Tambourine",
          "emoji": "🥁",
          "bgColor": "#E91E63"
          },
          {
          "letter": "M",
          "word": "Maracas",
          "emoji": "🎵",
          "bgColor": "#4CAF50"
          },
          {
          "letter": "C",
          "word": "Castanets",
          "emoji": "🎵",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Bongo",
          "emoji": "🥁",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "C",
          "word": "Conga",
          "emoji": "🥁",
          "bgColor": "#5D4037"
          },
          {
          "letter": "G",
          "word": "Gong",
          "emoji": "🎵",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "T",
          "word": "Triangle",
          "emoji": "🎵",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "W",
          "word": "Wood Block",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "C",
          "word": "Claves",
          "emoji": "🎵",
          "bgColor": "#FF5722"
          },
          {
          "letter": "R",
          "word": "Rain Stick",
          "emoji": "🎵",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "A",
          "word": "Agogo Bell",
          "emoji": "🔔",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "H",
          "word": "Hand Pan",
          "emoji": "🥁",
          "bgColor": "#607D8B"
          },
          {
          "letter": "J",
          "word": "Jingle Bell",
          "emoji": "🔔",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "L",
          "word": "Log Drum",
          "emoji": "🥁",
          "bgColor": "#4E342E"
          },
          {
          "letter": "V",
          "word": "Vibraphone",
          "emoji": "🎵",
          "bgColor": "#00897B"
          },
          {
          "letter": "O",
          "word": "Ocean Drum",
          "emoji": "🥁",
          "bgColor": "#0288D1"
          },
          {
          "letter": "F",
          "word": "Floor Tom",
          "emoji": "🥁",
          "bgColor": "#455A64"
          },
          {
          "letter": "I",
          "word": "Indian Drum",
          "emoji": "🥁",
          "bgColor": "#E65100"
          },
          {
          "letter": "E",
          "word": "Electronic Drum",
          "emoji": "🥁",
          "bgColor": "#1565C0"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsPercussion2"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Percussion - Part 2",
          videoId: "instruments-percussion-2",
          bgGradient: ["#FF8F00","#FFF3E0"] as [string, string],
          accentColor: "#FF6F00",
          letters: [
          {
          "letter": "D",
          "word": "Damaru",
          "emoji": "🥁",
          "bgColor": "#FF5722"
          },
          {
          "letter": "N",
          "word": "Nagada",
          "emoji": "🥁",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "C",
          "word": "Chenda",
          "emoji": "🥁",
          "bgColor": "#BF360C"
          },
          {
          "letter": "T",
          "word": "Thavil",
          "emoji": "🥁",
          "bgColor": "#795548"
          },
          {
          "letter": "M",
          "word": "Maddale",
          "emoji": "🥁",
          "bgColor": "#33691E"
          },
          {
          "letter": "U",
          "word": "Udukkai",
          "emoji": "🥁",
          "bgColor": "#E91E63"
          },
          {
          "letter": "P",
          "word": "Parai",
          "emoji": "🥁",
          "bgColor": "#FF9800"
          },
          {
          "letter": "I",
          "word": "Idakka",
          "emoji": "🥁",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "K",
          "word": "Khol",
          "emoji": "🥁",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "D",
          "word": "Dhol",
          "emoji": "🥁",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Steel Pan",
          "emoji": "🥁",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "B",
          "word": "Bodhrán",
          "emoji": "🥁",
          "bgColor": "#795548"
          },
          {
          "letter": "G",
          "word": "Guiro",
          "emoji": "🎵",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "T",
          "word": "Timbale",
          "emoji": "🥁",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "C",
          "word": "Cajon",
          "emoji": "🥁",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "R",
          "word": "Rattle",
          "emoji": "🎵",
          "bgColor": "#827717"
          },
          {
          "letter": "A",
          "word": "African Drum",
          "emoji": "🥁",
          "bgColor": "#5D4037"
          },
          {
          "letter": "H",
          "word": "Hi-Hat",
          "emoji": "🥁",
          "bgColor": "#455A64"
          },
          {
          "letter": "J",
          "word": "Jembe",
          "emoji": "🥁",
          "bgColor": "#BF360C"
          },
          {
          "letter": "W",
          "word": "Washboard",
          "emoji": "🎵",
          "bgColor": "#607D8B"
          },
          {
          "letter": "L",
          "word": "Latin Drum",
          "emoji": "🥁",
          "bgColor": "#E65100"
          },
          {
          "letter": "F",
          "word": "Frame Drum",
          "emoji": "🥁",
          "bgColor": "#37474F"
          },
          {
          "letter": "O",
          "word": "Octapad",
          "emoji": "🥁",
          "bgColor": "#1565C0"
          },
          {
          "letter": "V",
          "word": "Vibraslap",
          "emoji": "🎵",
          "bgColor": "#FF5722"
          },
          {
          "letter": "E",
          "word": "Egg Shaker",
          "emoji": "🎵",
          "bgColor": "#FFA000"
          },
          {
          "letter": "X",
          "word": "Xun Drum",
          "emoji": "🥁",
          "bgColor": "#263238"
          },
          {
          "letter": "Y",
          "word": "Yaragh",
          "emoji": "🥁",
          "bgColor": "#33691E"
          },
          {
          "letter": "Z",
          "word": "Zarb",
          "emoji": "🥁",
          "bgColor": "#4E342E"
          },
          {
          "letter": "Q",
          "word": "Quijada",
          "emoji": "🎵",
          "bgColor": "#546E7A"
          },
          {
          "letter": "N",
          "word": "Nagara",
          "emoji": "🥁",
          "bgColor": "#C62828"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsPercussion3"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Percussion - Part 3",
          videoId: "instruments-percussion-3",
          bgGradient: ["#FFA000","#FFECB3"] as [string, string],
          accentColor: "#FF8F00",
          letters: [
          {
          "letter": "S",
          "word": "Surdo",
          "emoji": "🥁",
          "bgColor": "#1565C0"
          },
          {
          "letter": "T",
          "word": "Talking Drum",
          "emoji": "🥁",
          "bgColor": "#FF9800"
          },
          {
          "letter": "A",
          "word": "Ashiko",
          "emoji": "🥁",
          "bgColor": "#BF360C"
          },
          {
          "letter": "B",
          "word": "Berimbau",
          "emoji": "🎵",
          "bgColor": "#33691E"
          },
          {
          "letter": "C",
          "word": "Cuica",
          "emoji": "🥁",
          "bgColor": "#E91E63"
          },
          {
          "letter": "D",
          "word": "Dundun",
          "emoji": "🥁",
          "bgColor": "#795548"
          },
          {
          "letter": "F",
          "word": "Finger Cymbal",
          "emoji": "🎵",
          "bgColor": "#FFA000"
          },
          {
          "letter": "G",
          "word": "Ganza",
          "emoji": "🎵",
          "bgColor": "#2E7D32"
          },
          {
          "letter": "H",
          "word": "Hang Drum",
          "emoji": "🥁",
          "bgColor": "#607D8B"
          },
          {
          "letter": "I",
          "word": "Indian Ghatam",
          "emoji": "🥁",
          "bgColor": "#827717"
          },
          {
          "letter": "J",
          "word": "Japanese Taiko",
          "emoji": "🥁",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "K",
          "word": "Kalimba",
          "emoji": "🎵",
          "bgColor": "#00897B"
          },
          {
          "letter": "L",
          "word": "Lithophone",
          "emoji": "🎵",
          "bgColor": "#455A64"
          },
          {
          "letter": "M",
          "word": "Mbira",
          "emoji": "🎵",
          "bgColor": "#5D4037"
          },
          {
          "letter": "N",
          "word": "Nigerian Drum",
          "emoji": "🥁",
          "bgColor": "#FF5722"
          },
          {
          "letter": "O",
          "word": "Opera Drum",
          "emoji": "🥁",
          "bgColor": "#263238"
          },
          {
          "letter": "P",
          "word": "Pandeiro",
          "emoji": "🥁",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "R",
          "word": "Repinique",
          "emoji": "🥁",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "U",
          "word": "Udu Drum",
          "emoji": "🥁",
          "bgColor": "#4E342E"
          },
          {
          "letter": "V",
          "word": "Vibra Drum",
          "emoji": "🥁",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "W",
          "word": "Wind Chime",
          "emoji": "🎵",
          "bgColor": "#7CB342"
          },
          {
          "letter": "E",
          "word": "Ektaal",
          "emoji": "🥁",
          "bgColor": "#E65100"
          },
          {
          "letter": "X",
          "word": "Xylorimba",
          "emoji": "🎵",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "Y",
          "word": "Yuka Drum",
          "emoji": "🥁",
          "bgColor": "#37474F"
          },
          {
          "letter": "Z",
          "word": "Zabumba",
          "emoji": "🥁",
          "bgColor": "#C62828"
          },
          {
          "letter": "Q",
          "word": "Quinto",
          "emoji": "🥁",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Timpani",
          "emoji": "🥁",
          "bgColor": "#1A237E"
          },
          {
          "letter": "S",
          "word": "Shaker",
          "emoji": "🎵",
          "bgColor": "#43A047"
          },
          {
          "letter": "B",
          "word": "Bell Tree",
          "emoji": "🔔",
          "bgColor": "#FFEB3B"
          },
          {
          "letter": "C",
          "word": "Crash Cymbal",
          "emoji": "🥁",
          "bgColor": "#455A64"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
      <Composition
        id="InstrumentsKeyboard1"
        component={AlphabetShortsTemplate}
        durationInFrames={2880}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Keyboard Instruments - Part 1",
          videoId: "instruments-keyboard-1",
          bgGradient: ["#6A1B9A","#E1BEE7"] as [string, string],
          accentColor: "#4A148C",
          letters: [
          {
          "letter": "P",
          "word": "Piano",
          "emoji": "🎹",
          "bgColor": "#263238"
          },
          {
          "letter": "H",
          "word": "Harmonium",
          "emoji": "🎹",
          "bgColor": "#FF9800"
          },
          {
          "letter": "O",
          "word": "Organ",
          "emoji": "🎹",
          "bgColor": "#795548"
          },
          {
          "letter": "K",
          "word": "Keyboard",
          "emoji": "🎹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "A",
          "word": "Accordion",
          "emoji": "🪗",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "S",
          "word": "Synthesizer",
          "emoji": "🎹",
          "bgColor": "#7C4DFF"
          },
          {
          "letter": "C",
          "word": "Celesta",
          "emoji": "🎹",
          "bgColor": "#42A5F5"
          },
          {
          "letter": "M",
          "word": "Melodica",
          "emoji": "🎹",
          "bgColor": "#E91E63"
          },
          {
          "letter": "H",
          "word": "Harpsichord",
          "emoji": "🎹",
          "bgColor": "#FBC02D"
          },
          {
          "letter": "C",
          "word": "Clavichord",
          "emoji": "🎹",
          "bgColor": "#8D6E63"
          },
          {
          "letter": "E",
          "word": "Electric Piano",
          "emoji": "🎹",
          "bgColor": "#00897B"
          },
          {
          "letter": "G",
          "word": "Grand Piano",
          "emoji": "🎹",
          "bgColor": "#263238"
          },
          {
          "letter": "B",
          "word": "Baby Grand",
          "emoji": "🎹",
          "bgColor": "#455A64"
          },
          {
          "letter": "D",
          "word": "Digital Piano",
          "emoji": "🎹",
          "bgColor": "#1976D2"
          },
          {
          "letter": "F",
          "word": "Fortepiano",
          "emoji": "🎹",
          "bgColor": "#607D8B"
          },
          {
          "letter": "L",
          "word": "Lap Organ",
          "emoji": "🎹",
          "bgColor": "#33691E"
          },
          {
          "letter": "N",
          "word": "Nord Keyboard",
          "emoji": "🎹",
          "bgColor": "#D32F2F"
          },
          {
          "letter": "R",
          "word": "Rhodes Piano",
          "emoji": "🎹",
          "bgColor": "#FF6F00"
          },
          {
          "letter": "T",
          "word": "Toy Piano",
          "emoji": "🎹",
          "bgColor": "#FFA000"
          },
          {
          "letter": "U",
          "word": "Upright Piano",
          "emoji": "🎹",
          "bgColor": "#5D4037"
          },
          {
          "letter": "V",
          "word": "Virginal",
          "emoji": "🎹",
          "bgColor": "#6A1B9A"
          },
          {
          "letter": "W",
          "word": "Wurlitzer",
          "emoji": "🎹",
          "bgColor": "#BF360C"
          },
          {
          "letter": "I",
          "word": "Indian Harmonium",
          "emoji": "🪗",
          "bgColor": "#E65100"
          },
          {
          "letter": "J",
          "word": "Janko Keyboard",
          "emoji": "🎹",
          "bgColor": "#37474F"
          },
          {
          "letter": "X",
          "word": "Xaphoon Keys",
          "emoji": "🎹",
          "bgColor": "#827717"
          },
          {
          "letter": "Y",
          "word": "Yamaha Piano",
          "emoji": "🎹",
          "bgColor": "#1565C0"
          },
          {
          "letter": "Z",
          "word": "Zen Keyboard",
          "emoji": "🎹",
          "bgColor": "#00695C"
          },
          {
          "letter": "Q",
          "word": "Quarter Tone",
          "emoji": "🎹",
          "bgColor": "#546E7A"
          },
          {
          "letter": "S",
          "word": "Spinet",
          "emoji": "🎹",
          "bgColor": "#795548"
          },
          {
          "letter": "A",
          "word": "Auto Piano",
          "emoji": "🎹",
          "bgColor": "#FF5722"
          }
          ],
          letterDuration: 3,
          introDuration: 3,
          outroDuration: 3,
        }}
      />
    </>
  );
};
