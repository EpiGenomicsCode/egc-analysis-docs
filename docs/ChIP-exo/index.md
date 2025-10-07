---
sidebar_label: "ChIP-exo"
sidebar_position: 3
---

import Link from '@docusaurus/Link';

# ChIP-exo Tutorials

*Also "ChIP-nexus"*

<div class="tutorial-img-flow-container">
  <img src="/img/assays/ChIP-exo.svg" alt="ChIP-exo cartoon" height="300" />
</div>

## Read more:

<Link href="https://enseqlopedia.com/wiki-entry/dna-sequencing-methods/dna-protein-interactions/chip-seqht-chipchip-exomint-chip/"
  className="button button--primary"> ChIP-Seq/HT-ChIP/ChIP-exo/Mint-ChIP *(Enseqlopedia)* </Link>
<Link href="https://pubmed.ncbi.nlm.nih.gov/23026909/"
  className="button button--primary"> ChIP-exo 1.0 *(Rhee 2012)* </Link>
<Link href="https://pubmed.ncbi.nlm.nih.gov/30030442/"
  className="button button--primary"> ChIP-exo 5.0 *(Rossi 2018)* </Link>

## Which tutorial should I start with?

We like for users unfamiliar with ScriptManager to start with the [heatmaps and composite plots tutorial][pileup] to get a quick feel for the types of figures you can make with your data. If you have not called peaks, eventually you may need to in order to have [**RefPTs**][glossary] for your publication Tag


<!-- ## Which peak caller should I use? -->


## Which RefPTs should I use?

It is common practice to use peak calls for general heatmap generation but with ChIP-exo being base-pair resolution data and peak callers having imperfect resolution, a more exact and high resolution reference point can give you more interesting insights into your data.

For [**ssTFs**][glossary], there are usually [weblogos][glossary] representing the position-specific nucleotide preferences of the [TFBS][glossary]. If you are ChIP-ing one of these targets, you have the opportunity to get some higher resolution RefPTs by obtaining every instance of some motif in the genome (use [**FIMO**](https://meme-suite.org/meme/meme_5.5.5/tools/fimo)) to use as a RefPT for your heatmap and composite plots. You can even intersect your motif instances to keep the ones that overlap for a peak call to get the set of "bound" sites (obligatory disclaimer on thresholding caveats here). For ChIP-exo data, this will give you a better chance at observing the actual bp-resolution crosslinking profiles of a target. 


## How should I handle replicates?

This is an important question as there are many options available to you but some may create some *circular reasoning* when you test your hypothesis. One thing we like to do to avoid this is to call peaks or do whatever manipulations you want to build your [**RefPTs**][glossary] all based on one replicate. Then when you pileup and observe signal enrichment of the data, you can plot a different replicate that was held out from any [**RefPT**][glossary]-building to fairly perform comparisons.

In other instances, you may need as much signal as you can get and you could consider [merging your BAM files][merge-bam].


[glossary]: /docs/glossary
[pileup]: pileup
