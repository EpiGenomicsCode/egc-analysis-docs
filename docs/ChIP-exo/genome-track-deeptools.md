---
sidebar_position: 5
---

import DownloadScriptManager from '/docs/DocComponents/DownloadScriptManager.md'

# Genome browser tracks (BigWig)

:::danger
## 👷‍♀️ Under active migration 👷‍♂️
:::

<DownloadScriptManager/>


```shell title='deeptools_gtrack.sh'
BINSIZE=10
SMOOTH=60
CORE=12

bamCoverage -b $BAM/mydata_BX_FilteredBAM.bam  -o mydata_BX.bw --binSize $BINSIZE --normalizeUsing BPM --Offset 1 -p $CORE 2> logs/file.logs
```