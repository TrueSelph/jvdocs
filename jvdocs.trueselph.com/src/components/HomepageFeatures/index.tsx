import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: string; // Updated to accept string paths for PNG images
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Modular Architecture',
    Svg: require('@site/static/img/modular.png').default,
    description: (
      <>
        JIVAS provides a modular architecture that allows developers to build, extend, and customize agents with ease. Its plug-and-play design via Action packages allows flexibility and scalability for various use cases.
      </>
    ),
  },
  {
    title: 'Declarative Workflows',
    Svg: require('@site/static/img/workflow.png').default,
    description: (
      <>
        JIVAS embraces a declarative approach, allowing developers to define integrations and workflows effortlessly. With actions for Typesense, Google Calendar, LLMs, and more, creating powerful agents is intuitive and efficient.
      </>
    ),
  },
  {
    title: 'Developer-Friendly Tools',
    Svg: require('@site/static/img/tools.png').default,
    description: (
      <>
        JIVAS offers a suite of developer tools, including a CLI and web server, to streamline the development, deployment, and management of agents, ensuring a smooth developer experience.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} role="img" /> {/* Updated to use <img> for PNG */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
