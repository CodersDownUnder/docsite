import type { ReactNode } from "react";
import clsx from "clsx";
//import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Card from "../components/HomepageFeatures/Card";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container padding-vert--lg">
        <div className="row">
          <div className="col col--4">
            <Card
              modName="Flower Seeds 2"
              modDescription="This is a Description"
              modLink="/docs/flowerseeds"
              modLinkText="Flower Seeds 2 Documentation"
            />
          </div>

          <div className="col col--4">
            <Card
              modName="Magic Eight Cube"
              modDescription="This is a Description"
              modLink="/docs/magiceightcube"
              modLinkText="Magic Eight Cube Documentation"
            />
          </div>

          <div className="col col--4">
            <Card
              modName="Loot Bag Mod"
              modDescription="This is a Description"
              modLink="/docs/lootbagmod/"
              modLinkText="LootBagMod Documentation"
            />
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--4">
            <Card
              modName="Growable Cells"
              modDescription="This is a Description"
              modLink="/docs/growablecells2"
              modLinkText="Growable Cells 2 Documentation"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
