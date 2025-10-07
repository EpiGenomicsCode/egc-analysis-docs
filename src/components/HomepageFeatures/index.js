import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Genomic features',
    defaultSvg: require('@site/static/img/assays/GenomicFeatures.svg').default,
    darkSvg: require('@site/static/img/assays/GenomicFeatures_dark.svg').default,
    docPage: 'docs/GenomicFeatures',
    description: (
      <>
        Investigate and compare genomic features and annotations.
      </>
    ),
  },
  {
    title: 'ChIP-exo',
    defaultSvg: require('@site/static/img/assays/ChIP-exo.svg').default,
    darkSvg: require('@site/static/img/assays/ChIP-exo_dark.svg').default,
    docPage: 'docs/ChIP-exo',
    description: (
      <>
        Examine your ultra high resolution data to see where your TF binds chromatin.
      </>
    ),
  },
  {
    title: 'ATAC-seq',
    defaultSvg: require('@site/static/img/assays/ATAC-seq.svg').default,
    darkSvg: require('@site/static/img/assays/ATAC-seq_dark.svg').default,
    docPage: 'docs/ATAC-seq',
    description: (
      <>
        Check out some analysis inspo for your ATAC-seq data.
      </>
    ),
  },
  {
    title: 'CoPRO',
    defaultSvg: require('@site/static/img/assays/CoPRO.svg').default,
    darkSvg: require('@site/static/img/assays/CoPRO_dark.svg').default,
    docPage: 'docs/CoPRO',
    description: (
      <>
        Check out some analysis inspo for your CoPRO (or PRO-cap/PRO-seq) data.
      </>
    ),
  },
  {
    title: 'Benzonase ChIP-exo',
    defaultSvg: require('@site/static/img/assays/Benzonase-ChIP-exo.svg').default,
    darkSvg: require('@site/static/img/assays/Benzonase-ChIP-exo_dark.svg').default,
    docPage: 'docs/ChIP-exo',
    description: (
      <>
        Check for TF-nucleosome interactions in your nuclease-fragmented ChIP-exo data.
      </>
    ),
  },
  {
    title: 'ChIP-seq',
    defaultSvg: require('@site/static/img/assays/ChIP-seq.svg').default,
    darkSvg: require('@site/static/img/assays/ChIP-seq_dark.svg').default,
    docPage: 'docs/ChIP-seq',
    description: (
      <>
        Check and quantify where your TF binds chromatin.
      </>
    ),
  },
  {
    title: 'MNase-seq',
    defaultSvg: require('@site/static/img/assays/MNase-seq.svg').default,
    darkSvg: require('@site/static/img/assays/MNase-seq_dark.svg').default,
    docPage: 'docs/MNase-seq',
    description: (
      <>
        Look for nuclease-protected features (mostly nucleosomes).
      </>
    ),
  },
  // {
  //   title: 'Benzonase-seq',
  //   Svg: require('@site/static/img/assays/MNase-seq.svg').default,
  //   docPage: 'docs/Benzonase-seq',
  //   description: (
  //     <>
  //       Check out some analysis inspo for your nuclease-protection assay that captures both translational and rotational chromatin structure.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Cross-assay comparisons',
  //   Svg: require('@site/static/img/assays/Benzonase-seq.svg').default,
  //   docPage: 'docs/intro',
  //   description: (
  //     <>
  //       Check our collection of ideas for comparing data profiles between different genomic assays.
  //     </>
  //   ),
  // },
];

function Feature({defaultSvg, title, docPage, description, darkSvg}) {
  const { colorMode } = useColorMode();
  const Svg = colorMode === 'dark' && darkSvg ? darkSvg : defaultSvg;

  return (
    <div className={clsx('col col--4')}>
      <a href={ docPage }>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="homepage-feature-gallery">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
