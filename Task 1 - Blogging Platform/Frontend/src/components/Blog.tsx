import test from "../assets/test.jpg";

import { useParams } from "react-router-dom";
import Container from "./Container";
import RecentPost from "./RecentPost";
import Categories from "./Categories";

export default function Blog() {
  const { blogId } = useParams();

  return (
    <Container className="flex">
      <div className="w-2/3 py-3 space-y-2">
        <img src={test} alt="blog" className="w-full h-[500px]" />
        <div className="space-y-0">
          <h1 className="text-4xl font-bold">
            AI TAKING THE WORLD? IS IT THE END?
          </h1>
          <div className="flex justify-between pr-5">
            <span className="text-stone-600 text-md">July 03, 2024</span>
            <span>Raus Ray</span>
          </div>
        </div>
        <p className="pr-4 text-lg text-justify">
          In envisioning the future world, we can anticipate a landscape shaped
          profoundly by technological advancements, societal shifts, and global
          challenges. At the heart of this future lies a tapestry woven with
          innovation, sustainability, and interconnectedness. Technological
          progress, driven by artificial intelligence (AI), quantum computing,
          and biotechnology, promises transformative changes. <br /> AI, once
          confined to specialized tasks, now permeates daily life, enhancing
          productivity, healthcare, and personalization across industries.
          Quantum computing unlocks unprecedented computational power,
          revolutionizing fields from cryptography to material science.
          Biotechnology enables precise gene editing and personalized medicine,
          extending human longevity and enhancing wellness. Sustainability
          emerges as a cornerstone of the future world. <br /> With climate
          change pressing, renewable energy sources like solar and wind become
          ubiquitous, powering smart cities designed for efficiency and minimal
          environmental impact. Circular economies thrive, where resources are
          conserved, reused, and recycled, mitigating waste and pollution. Urban
          planning integrates green spaces, promoting biodiversity and enhancing
          quality of life. Globalization and interconnectedness redefine
          economies and societies. Digital platforms facilitate seamless
          cross-border transactions and collaborations, fostering economic
          growth and cultural exchange. Virtual reality and augmented reality
          redefine education and entertainment, bridging distances and enriching
          experiences. <br /> Social media evolves into dynamic platforms for
          global dialogue and activism, driving social change and civic
          engagement. Ethical considerations become paramount in this future. As
          AI and automation reshape industries, ethical frameworks guide
          responsible innovation, ensuring fair employment practices and
          equitable distribution of benefits. Privacy and data security
          frameworks safeguard personal information in an increasingly
          interconnected world. Ethical AI principles prevent bias and
          discrimination, promoting transparency and accountability.
        </p>
      </div>
      {/* //extra */}
      <div className="w-1/3 px-2 space-y-2">
        <RecentPost />
        <Categories />
      </div>
    </Container>
  );
}
