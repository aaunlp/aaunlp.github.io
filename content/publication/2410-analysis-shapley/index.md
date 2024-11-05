---
title: 'Linguistically Grounded Analysis of Language Models using Shapley Head Values'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - marcell
  - johannes

# Author notes (optional)
author_notes:
  - 

date: '2024-10-15'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-10-15'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article']

# Publication name and optional abbreviated publication name.
publication: 'ArXiv'
publication_short: 'ArXiv'

abstract: "Understanding how linguistic knowledge is encoded in language models is crucial for improving their generalisation capabilities. In this paper, we investigate the processing of morphosyntactic phenomena, by leveraging a recently proposed method for probing language models via Shapley Head Values (SHVs). Using the English language BLiMP dataset, we test our approach on two widely used models, BERT and RoBERTa, and compare how linguistic constructions such as anaphor agreement and filler-gap dependencies are handled. Through quantitative pruning and qualitative clustering analysis, we demonstrate that attention heads responsible for processing related linguistic phenomena cluster together. Our results show that SHV-based attributions reveal distinct patterns across both models, providing insights into how language models organize and process linguistic information. These findings support the hypothesis that language models learn subnetworks corresponding to linguistic theory, with potential implications for cross-linguistic model analysis and interpretability in Natural Language Processing (NLP)."

# Summary. An optional shortened abstract.
summary:

tags: [Linguistics, Subnetworks, SHV]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/pdf/2410.13396'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
