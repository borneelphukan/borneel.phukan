---
author: "Borneel Bikash Phukan"
title: "Master Thesis on Content Analysis for Trust Evaluation"
date: "30th December, 2024"
link: ""
videoId: "7gvIPqzXbB8"
description: "Modern web applications, controlled by large corporations, raise concerns over data security and user control. Decentralized web solutions address this but struggle with trust in external data. The ConTED framework enhances trust evaluation using Content Analysis, Context Analysis, and Behavioral Analysis, focusing on Specificity, Likelihood, and Topic Classification. This thesis integrates Large Language Models (LLMs) into ConTED for RDF data preprocessing and content analysis, demonstrating feasibility through a prototype and use case evaluation."
---

**Why did I choose this topic and this path ?**

The topic of open source and decentralised web or Web 3.0 has fascinated me since my final year of my bachelor’s degree studies. This fascination for the decentralised web, which I still believe is the future of the web, is the one that drove me to pursue a master’s degree in Web Engineering. Inspired by the works of Sir Tim Berners Lee, a former CERN scientist and the legend who created the World Wide Web (WWW) and released it to the world as a decentralised platform to bring the world closer to one another in a free and fair manner, I always imagined where did the original motive of the world wide web has been lost to?

Today, the web as we know it is mainly controlled by big tech companies, and almost all the data being shared by individuals or creators can be taken away by the companies if they want to. Therefore Web 2.0 as we have it, in stark contrast to Web 1.0, which was the brainchild of Sir Tim Berners Lee. My fascination for Web 3.0 is mainly derived from the freedom it promises to attain from the big tech’s grip on user data and bringing the web back to the people. Hence, my thesis primarily focused on contributing to developing a very important component that makes trust evaluation of web applications in decentralised web possible.

**What is this thesis all about?**

The decentralised web is an entirely new concept compared to the current web. It has a different structural organisation, framework, layers, and ways in which web applications interact with each other. Multiple organisations all across the globe are working on various models for Web 3.0. However, the most significant is the SOLID project by Tim Berners Lee himself, where he proposes data to be stored in distinct highly secured pods. The pods serve data to web applications and interact to exchange data.

However, the connection must be trustworthy before a web application exchanges data. To analyse trust, the Distributed and Self-Organizing Systems of the Department of Computer Science, Technische Universität Chemnitz is developing a trust mechanism called ConTED (Content Trust Evaluation framework for the Decentralised Web), which calculates various trust factors that are combined to calculate the Final Trust. These trust factors are calculated using three main analysing components supporting the ConTED framework: Content Analysis, Context Analysis and Behavioral Analysis.

My thesis focuses on developing a Content Analysis component with the help of LLM for performing content analysis and calculating Specificity and Likelihood, the two trust factors that the Content Analysis component analyses. The content analysis component should be able to run in real-time and hence use prompt engineering with LLM endpoint to classify the topics from the received data, and calculate the two trust factors. The thesis provides in-depth documentation on the architecture and the process of integration and calculation. It subsequently performs test runs using an in-house testing framework created for the same purpose, called aTLAS, to report the accuracy and runtime of the content analysis component.

**What are the doors this topic opens?**

I made two significant findings while performing the Content Analysis component test runs on aTLAS. Was using a paid LLM worthy to perform content analysis for decentralised web applications on the decentralised web? Doesn’t it affect the meaning of decentralisation and open-source in the first place if we have to rely on an LLM that is hosted by a centralised entity like a big tech? However, while writing my thesis and working on the research and development task, I realised that open-source LLM was just a theory, not reality as we see it today. Hence, the first door it opens is the deployment of open-source LLM in the content analysis component.

My second observation was the high volatility of the model accuracy when using LLM for calculating trust factors. This volatility was primarily observed due to the multiple ways an LLM interprets the same prompt every time it is executed. The different perspectives an LLM uses, mainly to understand the same prompt, have led to a decline in accuracy, especially when performing mathematically intensive tasks with multiple unknowns and singular output. Overcoming this drawback has been a significant discussion point as far as research on LLM development is concerned. Although a breakthrough of this factor is presumed not so far away, until that breakthrough is made, as of January 2025, there is no improvement of accuracy in sight as long as we are using LLM for performing mathematically intensive tasks.

Research on the use of LLM in performing content analysis for trust evaluation on a decentralised web is an ongoing process, and immense attention is required to develop a content analysis component and trust evaluation component that does not use centralised entities. This can be done with the help of inducing lightweight reinforced learning models that analyse and classify content on the go and calculate the trust factors. This should obviously be backed up with a high degree of model optimisation.

If you are interested in learning more about the topic, please watch the presentation attached to this blog, which was also the actual presentation I presented to the jury during my thesis defence.
