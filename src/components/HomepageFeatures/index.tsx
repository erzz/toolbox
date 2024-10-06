import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Actions",
    Svg: require("@site/static/img/jetpacktocat.svg").default,
    description: (
      <>
        Reliable GitHub Actions from both myself and the community to help you automate boring
        stuff.
      </>
    ),
  },
  {
    title: "Reusable workflows",
    Svg: require("@site/static/img/labtocat.svg").default,
    description: (
      <>Workflows that can be reused across multiple projects, saving you time and effort.</>
    ),
  },
  {
    title: "Other cool stuff",
    Svg: require("@site/static/img/repo.svg").default,
    description: (
      <>
        Random references, guides and resources to help with automating and delivering your
        projects.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
