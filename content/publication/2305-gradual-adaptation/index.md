---
title: 'Gradual Language Model Adaptation Using Fine-Grained Typology'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - marcell
  - johannes

# Author notes (optional)
author_notes:
  - 

date: '2023-05-02'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2023-05-02'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['workshop']

# Publication name and optional abbreviated publication name.
publication: In Proceedings of the 5th Workshop on Research in Computational Linguistic Typology and Multilingual NLP
publication_short: In SIGTYP

abstract: "Transformer-based language models (LMs) offer superior performance in a wide range of NLP tasks compared to previous paradigms. However, the vast majority of the world's languages do not have adequate training data available for monolingual LMs (Joshi et al., 2020). While the use of multilingual LMs might address this data imbalance, there is evidence that multilingual LMs struggle when it comes to model adaptation to to resource-poor languages (Wu and Dredze, 2020), or to languages which have typological characteristics unseen by the LM (Üstün et al., 2022). Other approaches aim to adapt monolingual LMs to resource-poor languages that are related to the model language. However, there are conflicting findings regarding whether language relatedness correlates with successful adaptation (de Vries et al., 2021), or not (Ács et al., 2021). With gradual LM adaptation, our approach presented in this extended abstract, we add to the research direction of monolingual LM adaptation. Instead of direct adaptation to a target language, we propose adaptation in stages, first adapting to one or more intermediate languages before the final adaptation step. Inspired by principles of curriculum learning (Bengio et al., 2009), we search for an ideal ordering of languages that can result in improved LM performance on the target language. We follow evidence that typological similarity might correlate with the success of cross-lingual transfer (Pires et al., 2019; Üstün et al., 2022; de Vries et al., 2021) as we believe the success of this transfer is essential for successful model adaptation. Thus we order languages based on their relative typological similarity between them. In our approach, we quantify typological similarity using structural vectors as derived from counts of dependency links (Bjerva et al., 2019), as such fine-grained measures can give a more accurate picture of the typological characteristics of languages (Ponti et al., 2019). We believe that gradual LM adaptation may lead to improved LM performance on a range of resource-poor languages and typologically diverse languages. Additionally, it enables future research to evaluate the correlation between the success of cross-lingual transfer and various typological similarity measures."

# Summary. An optional shortened abstract.
summary:

tags: [Typology, Adapters]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://aclanthology.org/2023.sigtyp-1.19.pdf'
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
