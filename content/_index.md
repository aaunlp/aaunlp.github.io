---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-16
type: landing

sections:
  - block: hero
    content:
      title: |
        AAU NLP Research Group
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
        * **[22 November 2024]** We are organizing the AAU NLP Symposium, check it out [here](http://typnlp.github.io/event/aau-nlp-2024-symposium/)!
        * **[11 August 2024]** Our members will be at ACL 2024 presenting work on Creoles, NLP Security, Multilingual Instruction tuning, and hosting the KALLM Workshop! 
        * **[10 April 2024]** CreoleVal is accepted to TACL! 
        * **[16 March 2024]** Some of our members will be at EACL 2024, come and say hi! 

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
