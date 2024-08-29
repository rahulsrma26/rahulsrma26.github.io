import styles from "./styles.module.css";
import React from "react";

import Intro from "../Intro";
import AreasOfInterest from "../AreasOfInterest";

import DLSVG from "../../assets/svgs/deeplearning.svg";
import SpeechSVG from "../../assets/svgs/speech.svg";
import NLPSVG from "../../assets/svgs/nlp.svg";
import VisionSVG from "../../assets/svgs/vision.svg";
import AISVG from "../../assets/svgs/ai.svg";
import DeploySVG from "../../assets/svgs/deploy.svg";
import VisualizationSVG from "../../assets/svgs/visualization.svg";
import SystemSVG from "../../assets/svgs/system.svg";
import ParallelSVG from "../../assets/svgs/parallel.svg";

const areasOfInterest = [
  {
    icon: <DLSVG />,
    title: "Deep learning",
    description:
      "Expertise in developing DL frameworks and libraries at various companies used for training, testing, and deployment.",
  },
  {
    icon: <SpeechSVG />,
    title: "Speech",
    description:
      "Speech plays a key role in reaching the next billion users. Acoustic model and meta-models are improving the lives of millions of people.",
  },
  {
    icon: <NLPSVG />,
    title: "NLP",
    description:
      "Understanding human languages can be tricky for computers. Semantic and phonetic embeddings are the link between text and numbers.",
  },
  {
    icon: <VisionSVG />,
    title: "Vision",
    description:
      "Vision is the art of seeing invisible. Reasearch and development in Computer Vision is happing at tremendous rate.",
  },
  {
    icon: <AISVG />,
    title: "ML",
    description:
      "Data is the new raw material for the businesses today. Click-prediction and recommendation are the backbone of this industry.",
  },
  {
    icon: <DeploySVG />,
    title: "Deploy",
    description:
      "AI is useful only when it serves people efficiently. Infra should support deployment on both server and client (mobile) side.",
  },
  {
    icon: <VisualizationSVG />,
    title: "Visualization",
    description:
      "Plots and visualization techniques can help in understanding what model is learning and how it is helping in achieving our goals.",
  },
  {
    icon: <SystemSVG />,
    title: "Systems",
    description:
      "AI is not just about models. It is a cycle of collecting, storing, cleaning, transforming, annotating, learning, testing, debugging, and deploying.",
  },
  {
    icon: <ParallelSVG />,
    title: "Performance",
    description:
      "Users want low latencies and providers want low cost. Knowledge of CPU (SIMD), and GPU (CUDA/OCL) can help achieve that.",
  },
];

export default function Home() {
  return (
    <div id="homePage" className={styles.homeStyle}>
      <Intro />
      <AreasOfInterest areasOfInterest={areasOfInterest} />
    </div>
  );
}
