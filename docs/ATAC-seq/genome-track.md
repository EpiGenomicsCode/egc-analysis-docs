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
bamCoverage -b mydata.bam -o mydata.bw \
    --binSize 20 --normalizeUsing BPM --smoothLength 60 \
    --extendReads 150 --centerReads -p 6 2> logs/35302_Input_-_J-Lat.log
```