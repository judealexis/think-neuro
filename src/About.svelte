<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import PeopleList from "./Components/PeopleList.svelte";

  // {
  //     category: "Founders",
  //     members: [
  //       {
  //         name: "Michael Yang",
  //         image: "assets/profiles/MY.jpg",
  //         title: "Chief Executive Officer",
  //         description:
  //           "it little profits that an idle king by this still hearth...",
  //       },
  //     ],
  //   },

  let personnel = [
    {
      category: "Founders",
      members: [
        {
          image: "assets/profiles/MY.jpg",
          name: "Michael Yan",
          title: "Chief Executive Officer",
          description: `
            εMichael YanΕ is a senior at the University of California, Berkeley majoring in Molecular and Cell Biology. He founded 
            φhttps://www.thinkneuro.org/θThinkNeuroΦ
            to increase 
            equitable access to research and medical education, with early efforts focused on underserved populations affected by opioid use disorders.
            ρ Ρ
            Michael’s passion for translational medicine has led to research roles at Stanford Medicine and Berkeley Public Health, with his work 
            presented at the WFNS 18th World Congress of Neurosurgery. In addition to building ThinkNeuro into a recognized student-driven enterprise, 
            Michael previously founded 
            φhttps://hiftu.studentorg.berkeley.eduθHealth Insurance for the UnhousedΦ, 
            a Berkeley-based advocacy group focused on healthcare access and housing equity.
            ρ Ρ
            After graduation, Michael plans to pursue an MD and continue building solutions at the intersection of clinical care, education, and health 
            equity. Outside of academics, he enjoys hiking, traveling, and mentoring students interested in medicine and research.
            `,
        },
        {
          image: "assets/profiles/LS.jpg",
          name: "Lalita Sabat",
          title: "Chief Operating Officer",
          description:
            "Lalita is a recent graduate from the Virginia Commonwealth University BS/MD Program with a Biology major and Chemistry minor. She is passionate about increasing the health and scientific literacy of diverse and underserved populations, leading to the launch of ThinkNeuro. As an undergraduate, Lalita was an avid researcher of amyotrophic lateral sclerosis within the Department of Biology, whose work garnered accolades at numerous regional conferences. This hands-on experience, coupled with her leadership roles on Research Conference Committees, ignited a fervent desire to guide students along their own paths to research success. Apart from academic accolades, she is a Bharatnatyam dancer and choreographer. She has competed on a variety of her undergraduate college dance teams including Bhangra, Bollywood Fusion, and Classical. Looking ahead, Lalita envisions a future as a compassionate physician-educator who empathetically listens, teaches, and leads both patients and fellow healthcare professionals. Her driving ambition is to deliver the highest quality care tailored to the needs of diverse populations, with a particular emphasis on addressing the challenges faced by underserved communities.",
        },
        {
          image: "assets/profiles/BL.jpg",
          name: "Briana Lay",
          title: "Board President",
          description:
            "Briana is a recent UCLA graduate with a B.S. in Human Biology and Society, an interdisciplinary major that intersects the social sciences and life sciences. She is passionate about finding ways on how environmental health overlaps with personal health and discovering solutions for its adverse effects, leading to the launch of ThinkNeuro. Along with ThinkNeuro, during her undergraduate years, she has been director of Khmer Outreach, Retention, and Education (KORE) where she manages outreach and mentorship efforts at Long Beach Unified School District, a research assistant for a clinical psychology lab, finance director at Bruins Public Health, a department volunteer at UCLA Health, and served on various mentorship organizations. In the future, Briana plans to become a physician to further serve those in the Los Angeles community. Outside of her academic endeavors, Briana enjoys staying active and trying new restaurants.",
        },
      ],
    },
    {
      category: "Executive Board",
      members: [
        {
          image: "assets/profiles/JT.jpg",
          name: "Jasmine Tai",
          title: "Chief of Staff",
          description:
            "Jasmine is an undergraduate student at the University of California, Berkeley double majoring in Molecular Cell Biology and Psychology. She is passionate about healthcare and hopes to go into the biotechnology or pharmaceutical industry. Jasmine is currently a research assistant at University of California, San Francisco and has been a health worker for University Health Services in the past. She is also a student mentor for elementary students through the Sage Mentorship program. Outside of academics, Jasmine enjoys golfing and exploring the Bay.",
        },
        {
          image: "assets/profiles/MF.jpg",
          name: "Matthew Fok",
          title: "Chief of Outreach",
          description:
            "Matthew is a second-year undergraduate student at UCI majoring in biology. He is interested in life sciences and hopes to explore more on biotech and medical research. He is currently a clinical researcher at the UCI medical center in Orange where he conducts patient chart reviews and monitors patients in a neuro-ICU using spectroscopy devices to measure tissue oxygenation activity. He hopes to one day pursue a career in medicine. In his free time, Matthew enjoys swimming and going out to eat with friends.",
        },
        {
          image: "assets/profiles/NN.jpg",
          name: "Nicole Nakama",
          title: "Chief of Education",
          description:
            "Nicole is a second-year undergraduate student studying Neuroscience at UCLA. She is passionate about neuropsychology, the public policy surrounding various health disparities seen across the U.S.,  and developing solutions as such which has been her main drive for pursuing a career in medicine and public health. She is currently working under the Clinical and Translational Center at UCLA with other physicians and administration aiding in various projects and tasks geared towards the division and UCLA Health as a whole, a virtual tutor to a few elementary-aged students in various school districts across Southern California, and a medical scribe down in Long Beach, CA. Outside of school, Nicole also enjoys weightlifting, being outdoors, reading, journaling, and traveling.",
        },
        {
          image: "assets/profiles/IG.jpg",
          name: "Isabela Gonzalez",
          title: "Chief of Legal Affairs",
          description:
            "Isabela is a second-year undergraduate student studying Psychology and Legal Studies at the University of California Berkeley. She is interested in human interaction and behavior as well as the roles of the human mind within the branches of our law. She aspires to one day become an Immigration Lawyer helping families gain a pathway to citizenship. Isabela joined ThinkNeuro because she wants to help underserved communities. In her free time, Isabela loves binging Desperate Housewives, writing poetry, and drawing.",
        },
        {
          image: "assets/profiles/TC.jpg",
          name: "Tiffany Cheng",
          title: "Chief of Design",
          description:
            "Tiffany is a second year undergraduate at the University of California Berkeley studying Dance and Performance Studies and Media Studies with a concentration in digital media. She aspires to connect with others through the arts in all forms. She has worked as a freelance graphic designer throughout all of high school and has continued her passion for design in college. She is currently a graphic designer for Innovative Design, the largest creative agency on the UC Berkeley campus. In her free time, Tiffany enjoys dancing, drawing, and exploring new places.",
        },
        {
          image: "assets/profiles/CT.jpg",
          name: "Cody Tran",
          title: "Chief of Data",
          description:
            "Cody is a current second year undergraduate at UC Berkeley majoring in Chemical Biology and minoring in Nutritional Sciences. In the future, Cody strives to involve himself within pharmaceutical research and medicinal chemistry. Currently, he has involved himself within the Albrecht Lab in the Department of Pharmaceutical Sciences at UC Irvine where he studies lysosomal activity and its corresponding effects with different drugs through utilizing western blotting, gel electrophoresis, and other methods. Additionally, he is currently working in the Moore Lab in the Department of Nutritional Sciences and Toxicology at UC Berkeley, focusing on FACT-protein mediated DNA transcription. Outside of academics, Cody enjoys working out, doing karaoke with friends, and shoutcasting for UC Berkeley’s competitive esports club.",
        },
        {
          image: "assets/profiles/FH.jpg",
          name: "Fengyi Huang",
          title: "Chief of Finance",
          description:
            "Fengyi is a second year undergraduate at the University of California, Berkeley, studying Computer Science and Applied Mathematics. He is also the project coordinator under Professor David Levine for ChatCHW, an AI chatbot intended to help community health workers in less fortunate countries. While not directly related to Neuroscience, Fengyi is very interested in the field and is currently learning more about it. Fengyi plans on attending graduate school for a Master’s in Computer Science as well as working on a business, and hopes to pursue a MBA as well in the future. He hopes that in the future, he is able to use his knowledge of Computer Science and Business to make a positive impact on the world. Outside of school, Fengyi loves all forms of outdoor activities, socializing with people, and working on personal projects.",
        },
        {
          image: "assets/profiles/AK.jpg",
          name: "Asli Aktepe",
          title: "Chief of Communications",
          description:
            "Asli is a fourth year undergraduate student at UC Berkeley studying Molecular and Cell Biology with an emphasis in Neurobiology. She is extremely passionate about the convergence of immunology and neurobiology and aspires to pursue a PhD degree and a research career that allows her to further explore these fields. Asli served as a research assistant at Rapid Revivers/Infectious Diseases, where she gained extensive knowledge in experimental processes, recent therapeutic advancements in the realm of infectious diseases, and the progression of diseases. This position also fostered her interest in public health and advocacy. Outside of her academic pursuits, Asli enjoys cooking, quality time with loved ones, and embarking on adventures to new places.",
        },
        {
          image: "assets/profiles/JA.jpg",
          name: "Jude Alexis",
          title: "Chief of Technology",
          description:
            "Jude is a first year undergraduate at Berkeley studying Molecular and Cellular Biology with pre-med ambitions. With professional clinical experience, heavy technical exposure to CS, and a passion for ensuring the human good, Jude aims to be on the bleeding edge of the increasing digitization of medicine. In his free time he enjoys reading and playing chess.",
        },
        {
          image: "assets/profiles/JY.jpg",
          name: "Jimin Yoo",
          title: "Chief of Public Relations",
          description:
            "Jimin Yoo is a second year undergraduate student at UC Berkeley studying Molecular Cell Biology and hoping to pursue a career in the field of medicine. She is passionate about cancer research as well as various health disparities present in the United States. Currently, she works at the Chen Lab at the UC Berkeley School of Optometry where she assists in mice experiments and image analysis to treat lymphatic diseases. She also provides mentoring for elementary students under the SAGE mentoring program as an executive board member. In her free time, Jimin loves meeting new people, trying new restaurants, singing, and traveling.",
        },
        {
          image: "assets/profiles/FK.jpg",
          name: "Fatima Khan Lookmanji",
          title: "Chief of Research",
          description:
            "Fatima is an enthusiastic senior biology student and science devotee pursuing an Honours Bachelor of Sciences in Life Sciences at the University of Ontario Institute of Technology. As President of multiple clubs and extracurriculars, she actively engages in these roles, alongside her involvement in extensive volunteering across charitable organizations in Canada. Fatima aspires to continue her altruistic journey through continuous academic development and new experiences that will further allow her to practice her passion of providing aid to vulnerable communities.",
        },
        {
          image: "assets/profiles/DB.jpg",
          name: "Dhruva Bhat",
          title: "Chief of Conferences",
          description:
            "Dhruva Bhat is a junior at Foothill High School, with a passion for neuroscience and community service. He hopes to pursue a career within the field of medicine and is currently president of the Neuroscience club at his school. His passion for making an impact within his community has led him to participate in various volunteering opportunities, including at Kaiser Permanente and the American Cancer Society. Along with this, he has a passion for research and innovation and you can frequently find him building various contraptions.",
        },
        {
          image: "assets/profiles/VT.jpg",
          name: "Vivian Tran",
          title: "Chief of Marketing",
          description:
            "Vivian Tran is a graduate student pursuing her Master of Public Health in Health Behaviors at UC San Diego. She is a recent Spring 2023 graduate from UC Berkeley double majoring in Molecular & Cell Biology and Integrative Human Biology and minoring in Global Public Health. She currently works with the California Department of Public Health (CDPH) within the Substance and Addiction Prevention Branch (SAPB) as a Graduate Researcher to improve public health responses towards opioid misuse. She also is conducting research with the Moores Cancer Center for her thesis and has had a variety of research experience in fields of biochemistry, physics, and public health during her time at UC Berkeley. Beyond her academic pursuits, Vivian is a Certified Clinical Medical Assistant (CCMA) at a local clinic, and aspires to go into the medical field. She's also a passionate food enthusiast, exploring culinary scenes wherever she goes.",
        },
        {
          image: "assets/profiles/SP.jpg",
          name: "Shree Parekh",
          title: "Chief of Operations",
          description:
            "Shree is a first year undergraduate student at UC Berkeley majoring in Molecular Cell Biology with an emphasis in Neurobiology, along with intended major in Psychology. She has an ongoing passion for the medical field within Neurology and is interested in pursuing pediatrics, putting higher concentration on mental health. Since high school, she has been advocating for vape prevention and mental health awareness to youth elementary schools by hosting presentations. Shree currently does research in a cognitive neuroscience lab called D’Esposito Lab at UC Berkeley. In the fall, Shree will start volunteering at UCSF, with hopes to work in the neonatal department! Away from academics, Shree loves to dance, night drives, and quality time with her little siblings!",
        },
        {
          image: "assets/profiles/RM.jpg",
          name: "Reymon Moe",
          title: "Chief of Medicine",
          description:
            "Reymon is a third year undergraduate at UC Berkeley. Specializing in a double major in Molecular Cell Biology (Immunology) and Public Health, Reymon exhibits an unwavering passion for deepening their knowledge and understanding of the complexities of the human body and its interaction with the environment. Reymon has demonstrated a keen interest in the practical application of his studies, as evident through his involvement in internships at both UCLA and UCSF. At both locations Reymon played an integral role in kidney clinical trials, gaining invaluable experience and insights into medical research methods and patient care. Currently, Reymon is diving deeper into the world of molecular biology through his position in the Bustamante Lab at Berkeley.",
        },
        {
          image: "assets/profiles/MN.jpg",
          name: "Michaela Forouzan",
          title: "Chief of Public Affairs",
          description:
            "Michaela, a fourth-year undergraduate at UC Berkeley, is majoring in Interdisciplinary Research with a focus on child psychology. Her passion lies in pediatric medicine and neurological disorders. This enthusiasm is reflected in her practical application of her studies, demonstrated through her internships at Dan Lab UC Berkeley and Jerusalem Brain Center. These experiences have deepened her knowledge in researching future interventions for neurological disorders such as Parkinson's and Alzheimer's. Currently, Michaela is conducting her own research, exploring the impact of children's anxiety when their guardians have cancer, leveraging CDC data for her study. Beyond her academic pursuits, Michaela is actively engaged in extracurricular activities. She enjoys playing volleyball and dedicates her time to volunteering at local shelters. Additionally, she contributes to the UC Berkeley community by educating fellow students on crucial topics related to sexual and mental health. Michaela's dedication to her studies and her involvement in community service highlight her commitment to making a positive impact in both the academic and social spheres.",
        },
      ],
    },
    {
      category: "Comittee Chairs",
      members: [
        {
          image: "assets/profiles/AJ.jpg",
          name: "Avinna Jain",
          title: "Professional Development Chair",
          description:
            "Avinna is a junior studying Molecular and Cell Biology with a concentration in Neurobiology at University of California, Berkeley. She is also the Academic chair in the campus organization Gender Equity in Math, which promotes underrepresented groups to find a place in math and foster their academic success. Avinna plans to go to medical school to obtain an M.D. She enjoys reading, biking, and doing puzzles in her free time.",
        },
        {
          image: "assets/profiles/AY.jpg",
          name: "Anirudh Yarlagadda",
          title: "Community Service Chair",
          description:
            "Anirudh is a second year undergraduate at the University of California, Berkeley, studying Business Administration and Molecular and Cell Biology and concentrating in Neurobiology. He is passionate about combining medicine with business and finding innovative ways to make medicine more accessible to everyone. Anirudh works as a clinical and administrative assistant at Six Corners Same Day Surgeries in Chicago, Illinois. Additionally, he is an undergraduate researcher at the Bhattacharya Lab at the University of California, San Francisco where he studies the treatment of pulmonary diseases with the use of macrophages. Outside of academics, Anirudh is in the California Marching Band where he plays both brass and percussion instruments. In his free time, Anirudh enjoys playing and watching sports, mainly football, volleyball, and cricket.",
        },
        {
          image: "assets/profiles/PT.jpg",
          name: "Prongha Talukder",
          title: "Curriculum Chair",
          description:
            "Prongha is a rising second year student at the University of California, Berkeley, studying Molecular and Cellular Biology, with a concentration in Neurobiology. He is passionate about public health and mental health research and has done work with research groups focusing on the spread of Covid and mental health legislation in India. He is also passionate about public service and is part of the Berkeley Project and Berkeley Blood Pressure Project where he serves the greater Berkeley community. He plans to pursue an M.D after his degree. He loves badminton, biking, the outdoors, and hanging out with friends.",
        },
        {
          image: "assets/profiles/VU.jpg",
          name: "Veronica Uy",
          title: "Philanthropy Chair",
          description:
            "Veronica is a rising third year at University of California, berkeley majoring in Molecular and Cell Biology. She is passionate about medicine and the humanities (such as art, history, literature, and language). She has done previous work as the head of fundraising for multiple organizations like activist group Generation Up and has volunteered for organizations like the Red Cross. Veronica is planning to pursue a career in medicine while practicing her other passions such as drawing, writing, and travel in the meantime.",
        },
        {
          image: "assets/profiles/AO.jpg",
          name: "Amara Ajon",
          title: "Ambassador Chair",
          description:
            "Amara is a rising third year at UCLA majoring in psychobiology. She is extremely passionate about mental health and cognition, and currently serves as a Research Assistant for the UCLA Stress Lab — where she is a part of the consent team for an ongoing clinical research study about how childhood ACEs affect stress resilience. Besides her involvement in ThinkNeuro, she also volunteers at Cedars-Sinai Medical Center, works as a certified medical assistant, and holds leadership positions in other pre-medical clubs on campus. In the future, she plans to pursue a career in medicine but for now she spends her free time reading, hiking, driving, and reviewing restaurants as part of the Yelp Elite.",
        },
        {
          image: "assets/profiles/SK.jpg",
          name: "Sahaj Kaur",
          title: "Marketing Chair",
          description:
            "Sahaj is a first year student studying molecular and cell biology at Cal State University Fullerton. She is passionate about health care and hopes to go into advanced medicine research revolving around pharmacology. She has done previous work such as volunteering in health fairs for the service of minority groups and is currently working on getting licensed to work in pharmacy related settings. In her free time she loves to read, do oil paintings, and go on hiking trails.",
        },
      ],
    },
  ];
</script>

<main>
  <Header />
  <Repeater
    children={[
      {
        title: "OUR TEAM",
        orientation: "left",
        component: TextButton,
        prop: [
          "We're a group of students, researchers, policymakers, and leaders with an aim to create positive change in the neurological space.",
          false,
        ],
      },
      {
        title: "PERSONNEL",
        orientation: "left",
        component: PeopleList,
        prop: personnel,
      },
    ]}
  />
  <Footer />
</main>

<style>
</style>
