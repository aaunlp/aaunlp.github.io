---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-16
type: landing

sections:
  - block: hero
    content:
      title: |
        AAU NLP Research Lab
      image:
        filename: 'typnlp-15.png'
      text: |
        <br>
        <span style="font-size: 20px; line-height: 0.9">Welcome to the AAU NLP research lab at the Data, Knowledge, and Web Engineering group at Aalborg University led by Prof. Dr. Johannes Bjerva. The lab engages in research in Natural Language Processing (NLP), with interdisciplinary overlap in Education and Cybersecurity. Our scope revolves around leveraging linguistic synergies between languages to develop robust NLP models and building NLP applications that aid multiple domains outside of NLP.</span>
  
  - block: markdown
    content:
      title: Latest News
      subtitle:
      text: |
        * **[1 February 2025]** We have multiple papers accepted by NAACL, ICLR, TACL, and EDUCON, congratulations Yiyi, Heather, Russa, Esther, and Mike!
        * **[20 December 2024]** We have multiple papers accepted by AAAI, NoDaLiDa, and JoWS, congratulations Yiyi, Heather, Russa, Ernests, Esther, and Mike!
        * **[1 December 2024]** AAU is hiring faculty at Asst/P level, including NLP, ML and AI: [Apply by 14 February](https://www.vacancies.aau.dk/scientific-positions/show-vacancy/vacancyId/1219351).
        * **[22 November 2024]** We are organizing the AAU NLP Symposium, check it out [here](http://typnlp.github.io/event/aau-nlp-2024-symposium/)!

  - block: collection
    content:
      title: Latest Publications and Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: ''
    design:
      view: citation
      columns: '1'

  - block: collection
    content:
      title: Events
      text: ""
      count: 5
      filters:
        folders:
          - event
        publication_type: ''
    design:
      # view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
