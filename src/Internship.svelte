<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import ItemList from "./Components/ItemList.svelte";
  import Carousel from "./Components/Carousel.svelte";

  let items0 = [
    {
      image: "inter.jpg",
      title: "Digital Intervention Platform for Opioid Addiction",
      body: `
      τBACKGROUNDΤ
      In response to the pressing challenges of opioid addiction, particularly in unhoused 
      and uninsured communities, there is a need for innovative, tech-enabled solutions to aid in the recovery 
      process. The impact of addiction extends across diverse socioeconomic backgrounds, making it imperative to 
      address these challenges with a focus on inclusivity. Through the development of a supportive platform, this 
      initiative strives to provide continuous assistance, resources, and a sense of community for individuals in 
      recovery. ρ Ρ 
      
      τDESCRIPTIONΤ Interns will be instrumental in developing a comprehensive digital intervention 
      platform focused on aiding individuals in their recovery from opioid addiction. The platform will serve as a 
      user-friendly, accessible resource offering various features, including:

      λ 
      πεEducation Modules:Ε Interactive modules providing information on the science of addiction, the impact on 
      the brain, and strategies for recovery.Π
      πεProgress Tracking:Ε Tools to track and celebrate milestones in recovery, encouraging ongoing engagement.Π 
      πεResource Hub:Ε Access to local treatment centers, support services, and mental health resources.Π 
      Λ

      τINTERN ENGAGEMENTΤ
      λ 
      πεDesigning the platform:Ε Contributing to the user interface and experience design to ensure accessibility and engagement.Π
      πεCreating content:Ε Developing informative and engaging content for the education modules and resource hub.Π 
      πεTesting usability:Ε Conducting thorough testing to ensure the platform is user-friendly and meets the diverse needs of its audienceΠ
      πεDevising and implementing effective outreach strategies:Ε promoting the platform within the affected communities, ensuring maximum 
      impact and utilization.Π 
      Λ`,
    },
    // {
    //   image: "advo.jpg",
    //   title: "Policy Advocacy for Substance Abuse Treatment",
    //   body: `
    //   τBACKGROUNDΤ
    //   Recognizing the entrenched systemic barriers hindering access to substance abuse treatment,
    //   there is an urgent need for policy changes that enhance both affordability and accessibility. ρ Ρ

    //   τDESCRIPTIONΤ
    //   Embark on a dynamic policy advocacy project dedicated to improving substance abuse treatment accessibility.
    //   Key tasks encompass:
    //   λ
    //   πεPolicy Analysis:ΕThoroughly research and analyze existing state and federal policies pertaining to substance
    //   abuse treatment, identifying critical areas for enhancement.Π
    //   πεStakeholder Engagement:ΕEstablish collaborative partnerships by reaching out to advocacy groups, healthcare professionals,
    //   and policymakers, creating a robust coalition supporting enhanced accessibility.Π
    //   πεLegislative Recommendations:ΕCraft tangible and actionable legislative recommendations aimed at addressing identified
    //   gaps within substance abuse treatment policy.Π
    //   πεCommunity Awareness Campaign:ΕSpearhead the creation of impactful materials and events designed to raise awareness
    //   about the significance of policy changes, fostering community support for this crucial initiative.Π
    //   Λ

    //   τINTERN ENGAGEMENTΤ
    //   λ
    //   πεResearch:ΕFostering a deep understanding of the policy landscape and identifying potential areas for improvement, ultimately
    //   equipped with the knowledge essential for effective advocacy.Π
    //   πεCommunication:ΕDeveloping and implementing effective communication strategies. This involves forging connections with advocacy
    //   groups, healthcare professionals, and policymakers to build a strong and supportive coalition. Interns play a pivotal role in
    //   amplifying the advocacy message.Π
    //   πεCommunity engagement:ΕLeverage unique skills to create materials and organize events that resonate with diverse audiences.
    //   Interns become ambassadors, engaging communities and driving awareness about the importance of policy changes.Π
    //   Λ`,
    // },
    // {
    //   image: "tele.jpg",
    //   title: "Telehealth Expansion for Addiction Treatment",
    //   body: `
    //   τBACKGROUNDΤ
    //   The Telehealth Expansion for Addiction Treatment project stems from a critical need to address
    //   pervasive barriers hindering access to addiction treatment, particularly in rural or underserved areas. The existing
    //   landscape reveals a stark reality where geographical remoteness and limited healthcare infrastructure converge to
    //   create significant hurdles for individuals seeking addiction treatment. ρ Ρ

    //   τDESCRIPTIONΤ
    //   Develop and implement a project to expand telehealth services for addiction treatment, including:
    //   λ
    //   πεNeeds Assessment:ΕIdentify regions with limited access to addiction treatment services and assess their telehealth infrastructure.Π
    //   πεPartnerships:ΕCollaborate with healthcare providers, insurers, and telehealth platforms to establish and promote telehealth services
    //   for addiction treatment.Π
    //   πεUser-Friendly Resources:ΕCreate educational materials to guide individuals through the process of accessing addiction treatment through
    //   telehealth.Π
    //   πεResearch, Outreach, and Resource Development:ΕInvolved in multifaceted roles, encompassing thorough research, targeted outreach efforts,
    //   and the development of resources. Collective efforts aim to support individuals seeking addiction treatment through telehealth,
    //   addressing unique challenges in rural or underserved areas.Π
    //   Λ`,
    // },
    {
      image: "lit.jpg",
      title: "Children’s Neurologic Literature",
      body: `
      τBACKGROUNDΤ 
      Address barriers to accessing addiction treatment by expanding telehealth services, especially in rural or 
      underserved areas. ρ Ρ 
      
      τDESCRIPTIONΤ 
      Construct and create empathetic and educational children’s books tailored towards those facing various neurodegenerative diseases 
      including ADHD, dyslexia, and epilepsy. With a team of other interns, you will collaborate on various literary projects with the 
      overarching goals of: 
      λ 
      πεEmpathy and Understanding:ΕFoster empathy and understanding towards children dealing with neurodegenerative disease and their families.Π
      πεAwareness and Education:ΕRaise awareness about various neurological diseases and the specific needs of affected individuals while advocating 
      for inclusivity and support within communities and healthcare systems.Π 
      πεPositive Emotional Impact:ΕBring joy, comfort, and moments of happiness to youth facing challenging circumstances through uplifting and 
      inspiring stories.Π
      Λ
      Note for Spring 2024, the Children’s Neurologic Literature Project is only accepting novel illustrations from the new cohort.
      `,
    },
    {
      image: "lang.jpg",
      title: "Second Medical Language Exchange",
      body: `
      τBACKGROUNDΤ
      Within the landscape of healthcare, a significant impediment to equitable access and quality of care is the 
      documented dearth of educational materials available in languages diverse from the predominant ones. This discrepancy serves as a 
      formidable barrier, perpetuating disparities across chronic health management, treatments, and overall healthcare outcomes. The 
      challenges are profound: language disparities, cultural sensitivity, impact on health outcomes, and age and cultural considerations. 
      ρ Ρ 
      
      τDESCRIPTIONΤ 
      This initiative aims to bridge the existing gap between medical professionals and Limited English Proficiency (LEP) populations by 
      creating culturally sensitive and linguistically tailored educational materials. The project's objectives extend beyond merely generating 
      new materials; it aspires to enhance existing resources and investigate how these improvements can positively impact healthcare outcomes 
      for LEP populations. The key objectives include: 
      λ 
      πεMaterial Development:ΕCraft educational materials that resonate with diverse linguistic and cultural backgrounds. These materials 
      will not only address current gaps but will also be designed to improve understanding and engagement between medical professionals 
      and LEP populations.Π
      πεOutcome Evaluation:ΕConduct a comprehensive study to assess how the improved and new educational materials contribute to enhanced 
      healthcare outcomes for LEP populations. This evaluation will provide valuable insights into the efficacy of culturally sensitive 
      resources.Π 
      πεCultural and Age Considerations:ΕExplore the nuanced dynamics of culture and age in educational material effectiveness. This 
      involves understanding how different cultural contexts and age groups respond to healthcare information, enabling the establishment 
      of general guidelines for creating universally effective educational materials.Π
      πεGuideline Establishment:ΕBased on the study's findings, establish general guidelines for creating educational materials that are 
      optimally effective for both medical professionals and LEP populations. These guidelines will serve as a resource for future initiatives 
      aimed at promoting healthcare equity and access.Π
      Λ`,
    },
    {
      image: "edu.jpg",
      title: "Digital Health Science",
      body: `
      τBACKGROUNDΤ
        Many elementary and middle school students, especially those from under-resourced or historically marginalized communities, lack access to high-quality, engaging health science education. These early disparities in exposure can limit future interest and confidence in pursuing careers in medicine and public health. ρ Ρ 
      
      τDESCRIPTIONΤ 
      The Digital Health Science Education project addresses these gaps by developing interactive, age-appropriate lessons and hands-on activity 
      kits focused on human body systems. Interns work in small teams to create engaging STEM learning materials for K–8 students, which are 
      later distributed as part of ThinkNeuro’s Doctor Discovery Program (DDP). These materials are designed to be accessible for at-home use, 
      with lessons modeled after real medical cases and tailored for visual and tactile learners. ρ Ρ

      τINTERN ENGAGEMENTΤ 
      λ 
      πεLesson Development:ΕCreate informative, standards-aligned curriculum modules focused on topics like the respiratory, digestive, 
      or nervous systems.Π
      πεActivity Kits:ΕDesign DIY science kits using household materials to reinforce key concepts through tactile learning.Π 
      πεEquity-Driven Design:ΕEnsure all materials are culturally relevant and inclusive, especially for students underrepresented in the sciences.Π
      πεAuthorship Opportunity:ΕInterns may be credited as co-authors on a future community case study publication evaluating the educational 
      impact of DDP content.Π
      Λ`,
    },
  ];

  let items1 = [
    {
      image: "opioid.jpg",
      title: "Opioid Education Outreach in San Bernardino",
      body: `
      τBACKGROUNDΤ
      The ongoing opioid epidemic presents considerable challenges in communities
      like San Bernardino, particularly impacting those with limited English proficiency, non-native
      English speakers, and individuals for whom English is a second language. Addressing barriers to
      accurate information access is vital to empower these populations, enhance education about opioids,
      and ultimately reduce misuse while improving patient outcomes. ρ Ρ 
      
      τDESCRIPTIONΤ 
      Interns will play a crucial role in conducting community outreach, developing educational materials, and 
      administering surveys to gather baseline data, contributing to a comprehensive project aimed at raising 
      awareness of opioid use and abuse in San Bernardino.

      λ 
      πεInnovative Educational Materials:Ε The interns will be actively involved in creating 
      impactful educational materials, such as infographics, short papers, or videos, specifically designed to 
      engage individuals struggling with opioid addiction.Π
      πεCommunity Outreach and Surveys:Ε The intern cohort will play a pivotal role in conducting community 
      outreach, distributing the educational materials, and administering initial surveys to gather baseline 
      data on substance abuse within the targeted populations.Π 
      πεProject Timeline and Follow-up:Ε The project will unfold in phases, starting with outreach to identify 
      educational needs, followed by material development, and concluding with dispersal efforts. The interns 
      will also engage in follow-up outreach to study participants, measuring quantitative improvements for 
      statistical significance.Π 
      Λ`,
    },
  ];
</script>

<main>
  <Header />
  <Repeater
    children={[
      {
        title: "PROJECTS",
        orientation: "left",
        component: TextButton,
        prop: [
          `
          Note: Application to our special project tracks (including the Opioid Technology Initiative, Medical Second Language Exchange, 
          and Children’s Health & Literature Fellowship) are εpaused for the Fall 2025 cycleΕ. These projects will resume in εSpring 2026Ε, 
          and at this time, εno new applicants will be acceptedΕ for these programs during the fall. ρ Ρ ρ Ρ

          Only current interns who began these projects in previous cycles will continue working on them throughout Fall 2025. ρ Ρ ρ Ρ

          If you’re interested in joining a special project in the future, we recommend applying to the Fall 2025 Bibliometrics 
          Research Internship (BRI) or another ThinkNeuro program first. When reviewing applicants for these selective interdisciplinary 
          tracks, we give priority to returning interns who have shown strong engagement and long-term interest in our mission.
          `,
          true,
          "clickDisabled",
          "Apply",
          "https://docs.google.com/forms/d/e/1FAIpQLSfaGQGwgbRma6smf8XtuUar6PQIvSa9xd2zKc3uz2E1s5u1gg/viewform",
        ],
      },
      {
        title: "CURRENT OPPORTUNITIES",
        orientation: "left",
        component: ItemList,
        prop: items0,
      },
      {
        title: "COMPLETED PROJECTS",
        orientation: "left",
        component: ItemList,
        prop: items1,
      },
      {
        title: "STUDENT TESTIMONIALS",
        orientation: "center",
        component: Carousel,
        prop: [4, "assets/testimonials/internship/"],
      },
    ]}
  />
  <Footer />
</main>

<style>
</style>
