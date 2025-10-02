---
sidebar_position: 1
---

# Getting Started

## Who are you?

#### I have `.bam` files

You've gotten some sequencing data off the sequencer, done some QC filtering and maybe even trimmed some of your reads, and now you have performed your aligments and are left with a bunch of `.bam` files.

#### I have sequencing data, but no `.bam` files

If you haven't done this part yet, there are tons of tutorials out there that can help you get to this stage so Google up some resources to help get you to this part. There are better resources out there to help you with this so we won't try to cover it in these docs. We encourage you to understand the assumptions and parameters of your pipeline to this point because there are certain scenarios where this may influence your parameter choices in using ScriptManager.

<!-- Here are some example resources but I'm sure there are better ones out there (and probably better suited to your needs) if you look for yourself -->

#### I do not have sequencing data

If you don't have data yet but wish to explore genomic data analysis in these tutorials anyway, consider downloading data from the [ENCODE portal](https://www.encodeproject.org/) to build your own questions and do your own hypothesis testing exploration.


## 🤷‍♀️ Now what?

This is the fun part but also the most challenging part: creatively considering what kinds of comparisons to make that will answer the questions you are trying to ask of your data and that will confirm or reject your hypotheses. The best place to start is to mimic existing analysis strategies so we have compiled a set of examples in this collection of tutorials. Feel free to mix-and-match parts of these workflows to customize your analysis.


## Layout and tutorial organization

### Browse tutorials (by genomic assay)

We have roughly grouped our tutorials by type of genomics assay for users coming to this resource with specific datasets in mind. Keep in mind that some of these tutorials can work for different types of genomic assays and so the same or similar tutorials may be listed for several different assays. These tutorials are by no means comprehensive and just because an analysis isn't explicitly grouped in with your assay, it doesn't mean you can't use that analysis for your own work. The pipeline building possibilities are endless!

<!-- Build tutorial index mapping genomic assay names to their corresponding resources -->

### Discussions

We will also include some more general discussions around normalization and replicate handling that are frequently asked to help users to make a choice that best works for their data and their questions. These tend to be more open-ended guidelines that don't work for everyone's scenarios but we have found prompts useful discussion for helping users to understand the important considerations for their analysis.

<!-- Coming soon: -->

<!-- Discussion topics brainstorm, or blog posts: -->
<!-- - normalization -->
<!-- - reference point selection: peaks vs motifs -->
<!-- - peak-calling (thresholding discussion, cartoon edge cases) -->
<!-- - controls - how and when to use IgG control  -->

<!-- - Benzonase-seq -->
<!--   - Pileup on features (translational) -->
<!--   - Pileup on features (rotational) -->
<!-- - ChIP-seq -->
<!--   - Pileup on motifs -->
<!-- - Benzonase ChIP-exo -->
<!--   - Pileup on features (translational) -->
<!--   - Pileup on features (rotational) -->



