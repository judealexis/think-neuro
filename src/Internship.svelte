<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import ItemList from "./Components/ItemList.svelte";
  import Carousel from "./Components/Carousel.svelte";

  let items = [
    {
      image: "opioid.jpg",
      title: "Opioid Education Outreach in San Bernardino",
      body: `τBACKGROUNDΤ βThe ongoing opioid epidemic presents considerable challenges in communities
      like San Bernardino, particularly impacting those with limited English proficiency, non-native
      English speakers, and individuals for whom English is a second language. Addressing barriers to
      accurate information access is vital to empower these populations, enhance education about opioids,
      and ultimately reduce misuse while improving patient outcomes.Β ρ Ρ τDESCRIPTIONΤ βInterns will play a crucial role
      in conducting community outreach, developing educational materials, and administering surveys to gather
      baseline data, contributing to a comprehensive project aimed at raising awareness of opioid use and abuse
      in San Bernardino.Β 
      λ 
      πεInnovative Educational Materials:ΕβThe interns will be actively involved in creating 
      impactful educational materials, such as infographics, short papers, or videos, specifically designed to 
      engage individuals struggling with opioid addiction.ΒΠ
      πεCommunity Outreach and Surveys:ΕβThe intern cohort will play a pivotal role in conducting community 
      outreach, distributing the educational materials, and administering initial surveys to gather baseline 
      data on substance abuse within the targeted populations.ΒΠ 
      πεProject Timeline and Follow-up:ΕβThe project will unfold in phases, starting with outreach to identify 
      educational needs, followed by material development, and concluding with dispersal efforts. The interns 
      will also engage in follow-up outreach to study participants, measuring quantitative improvements for 
      statistical significance.ΒΠ 
      Λ`
        .replace(/\s+/g, " ")
        .trim(),
    },
    {
      image: "inter.jpg",
      title: "Digital Intervention Platform for Opioid Addiction",
      body: `τBACKGROUNDΤ βIn response to the pressing challenges of opioid addiction, particularly in unhoused 
      and uninsured communities, there is a need for innovative, tech-enabled solutions to aid in the recovery 
      process. The impact of addiction extends across diverse socioeconomic backgrounds, making it imperative to 
      address these challenges with a focus on inclusivity. Through the development of a supportive platform, this 
      initiative strives to provide continuous assistance, resources, and a sense of community for individuals in 
      recovery.Β ρ Ρ τDESCRIPTIONΤ βInterns will be instrumental in developing a comprehensive digital intervention 
      platform focused on aiding individuals in their recovery from opioid addiction. The platform will serve as a 
      user-friendly, accessible resource offering various features, including: Β 
      λ 
      πεEducation Modules:ΕβInteractive modules providing information on the science of addiction, the impact on 
      the brain, and strategies for recovery.ΒΠ
      πεProgress Tracking:ΕβTools to track and celebrate milestones in recovery, encouraging ongoing engagement.ΒΠ 
      πεResource Hub:ΕβAccess to local treatment centers, support services, and mental health resources.ΒΠ 
      Λ
      τINTERN ENGAGEMENTΤ
      λ 
      πεDesigning the platform:ΕβContributing to the user interface and experience design to ensure accessibility and engagement.ΒΠ
      πεCreating content:ΕβDeveloping informative and engaging content for the education modules and resource hub.ΒΠ 
      πεTesting usability:ΕβConducting thorough testing to ensure the platform is user-friendly and meets the diverse needs of its audienceΒΠ
      πεDevising and implementing effective outreach strategies:Εβpromoting the platform within the affected communities, ensuring maximum 
      impact and utilization.ΒΠ 
      Λ
      `
        .replace(/\s+/g, " ")
        .trim(),
    },
    {
      image: "advo.jpg",
      title: "Policy Advocacy for Substance Abuse Treatment",
      body: `τBACKGROUNDΤ βRecognizing the entrenched systemic barriers hindering access to substance abuse treatment, 
      there is an urgent need for policy changes that enhance both affordability and accessibility.Β ρ Ρ τDESCRIPTIONΤ 
      βEmbark on a dynamic policy advocacy project dedicated to improving substance abuse treatment accessibility. 
      Key tasks encompass:Β 
      λ 
      πεPolicy Analysis:ΕβThoroughly research and analyze existing state and federal policies pertaining to substance 
      abuse treatment, identifying critical areas for enhancement.ΒΠ
      πεStakeholder Engagement:ΕβEstablish collaborative partnerships by reaching out to advocacy groups, healthcare professionals, 
      and policymakers, creating a robust coalition supporting enhanced accessibility.ΒΠ 
      πεLegislative Recommendations:ΕβCraft tangible and actionable legislative recommendations aimed at addressing identified 
      gaps within substance abuse treatment policy.ΒΠ 
      πεCommunity Awareness Campaign:ΕβSpearhead the creation of impactful materials and events designed to raise awareness 
      about the significance of policy changes, fostering community support for this crucial initiative.ΒΠ 
      Λ
      τINTERN ENGAGEMENTΤ
      λ 
      πεResearch:ΕβFostering a deep understanding of the policy landscape and identifying potential areas for improvement, ultimately 
      equipped with the knowledge essential for effective advocacy.ΒΠ
      πεCommunication:ΕβDeveloping and implementing effective communication strategies. This involves forging connections with advocacy 
      groups, healthcare professionals, and policymakers to build a strong and supportive coalition. Interns play a pivotal role in 
      amplifying the advocacy message.ΒΠ 
      πεCommunity engagement:ΕβLeverage unique skills to create materials and organize events that resonate with diverse audiences. 
      Interns become ambassadors, engaging communities and driving awareness about the importance of policy changes.ΒΠ
      Λ
      `
        .replace(/\s+/g, " ")
        .trim(),
    },
    {
      image: "tele.jpg",
      title: "Telehealth Expansion for Addiction Treatment",
      body: `τBACKGROUNDΤ βThe Telehealth Expansion for Addiction Treatment project stems from a critical need to address 
      pervasive barriers hindering access to addiction treatment, particularly in rural or underserved areas. The existing 
      landscape reveals a stark reality where geographical remoteness and limited healthcare infrastructure converge to 
      create significant hurdles for individuals seeking addiction treatment.Β ρ Ρ τDESCRIPTIONΤ 
      βDevelop and implement a project to expand telehealth services for addiction treatment, including:Β 
      λ 
      πεNeeds Assessment:ΕβIdentify regions with limited access to addiction treatment services and assess their telehealth infrastructure.ΒΠ
      πεPartnerships:ΕβCollaborate with healthcare providers, insurers, and telehealth platforms to establish and promote telehealth services 
      for addiction treatment.ΒΠ 
      πεUser-Friendly Resources:ΕβCreate educational materials to guide individuals through the process of accessing addiction treatment through 
      telehealth.ΒΠ 
      πεResearch, Outreach, and Resource Development:ΕβInvolved in multifaceted roles, encompassing thorough research, targeted outreach efforts, 
      and the development of resources. Collective efforts aim to support individuals seeking addiction treatment through telehealth, 
      addressing unique challenges in rural or underserved areas.ΒΠ 
      Λ
      `
        .replace(/\s+/g, " ")
        .trim(),
    },
    {
      image: "lit.jpg",
      title: "Children’s Neurologic Literature",
      body: `τBACKGROUNDΤ βAddress barriers to accessing addiction treatment by expanding telehealth services, especially in rural or 
      underserved areas.Β ρ Ρ τDESCRIPTIONΤ 
      βConstruct and create empathetic and educational children’s books tailored towards those facing various neurodegenerative diseases 
      including ADHD, dyslexia, and epilepsy. With a team of other interns, you will collaborate on various literary projects with the 
      overarching goals of:Β 
      λ 
      πεEmpathy and Understanding:ΕβFoster empathy and understanding towards children dealing with neurodegenerative disease and their families.ΒΠ
      πεAwareness and Education:ΕβRaise awareness about various neurological diseases and the specific needs of affected individuals while advocating 
      for inclusivity and support within communities and healthcare systems.ΒΠ 
      πεPositive Emotional Impact:ΕβBring joy, comfort, and moments of happiness to youth facing challenging circumstances through uplifting and 
      inspiring stories.ΒΠ
      Λ
      βNote for Spring 2024, the Children’s Neurologic Literature Project is only accepting novel illustrations from the new cohort.Β
      `
        .replace(/\s+/g, " ")
        .trim(),
    },
    {
      image: "lang.jpg",
      title: "Second Medical Language Exchange",
      body: `τBACKGROUNDΤ βWithin the landscape of healthcare, a significant impediment to equitable access and quality of care is the 
      documented dearth of educational materials available in languages diverse from the predominant ones. This discrepancy serves as a 
      formidable barrier, perpetuating disparities across chronic health management, treatments, and overall healthcare outcomes. The 
      challenges are profound: language disparities, cultural sensitivity, impact on health outcomes, and age and cultural considerations.Β 
      ρ Ρ τDESCRIPTIONΤ 
      βThis initiative aims to bridge the existing gap between medical professionals and Limited English Proficiency (LEP) populations by 
      creating culturally sensitive and linguistically tailored educational materials. The project's objectives extend beyond merely generating 
      new materials; it aspires to enhance existing resources and investigate how these improvements can positively impact healthcare outcomes 
      for LEP populations. The key objectives include:Β 
      λ 
      πεMaterial Development:ΕβCraft educational materials that resonate with diverse linguistic and cultural backgrounds. These materials 
      will not only address current gaps but will also be designed to improve understanding and engagement between medical professionals 
      and LEP populations.ΒΠ
      πεOutcome Evaluation:ΕβConduct a comprehensive study to assess how the improved and new educational materials contribute to enhanced 
      healthcare outcomes for LEP populations. This evaluation will provide valuable insights into the efficacy of culturally sensitive 
      resources.ΒΠ 
      πεCultural and Age Considerations:ΕβExplore the nuanced dynamics of culture and age in educational material effectiveness. This 
      involves understanding how different cultural contexts and age groups respond to healthcare information, enabling the establishment 
      of general guidelines for creating universally effective educational materials.ΒΠ
      πεGuideline Establishment:ΕβBased on the study's findings, establish general guidelines for creating educational materials that are 
      optimally effective for both medical professionals and LEP populations. These guidelines will serve as a resource for future initiatives 
      aimed at promoting healthcare equity and access.ΒΠ
      Λ
      `
        .replace(/\s+/g, " ")
        .trim(),
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
          "ThinkNeuro offers research-based internships with topics encompassing health technology, health education, and health policy. Accepted interns are able to choose the rotation of their choice.",
          true,
          "click",
          "Apply",
          "https://docs.google.com/forms/d/e/1FAIpQLSfaGQGwgbRma6smf8XtuUar6PQIvSa9xd2zKc3uz2E1s5u1gg/viewform",
        ],
      },
      {
        title: "CURRENT OPPORTUNITIES",
        orientation: "left",
        component: ItemList,
        prop: items,
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
