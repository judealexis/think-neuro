<script>
  import PeopleList from "./Components/PeopleList.svelte";
  import TextAlone from "./Components/TextAlone.svelte";
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import TextImage from "./Components/TextImage.svelte";
  import Accordian from "./Components/Accordian.svelte";
  import TightGallery from "./Components/TightGallery.svelte";
  import Video from "./Components/Video.svelte";
  import Image from "./Components/Image.svelte";
  import JuxtaposeGallery from "./Components/JuxtaposeGallery.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "BRI: BIBLIOMETRIC RESEARCH INTERNSHIP",
      orientation: "left",
      component: TextButton,
      prop: [
        `
        The εBibliometric Research Internship (BRI)Ε is a εfully remoteΕ research and certification program 
        for ambitious εhigh school and undergraduate studentsΕ. Interns learn to conduct real-world bibliometric 
        analysis on topics in neuroscience, medicine, and public health using tools like R programming, Microsoft 
        Excel, and data visualization.

        Interns complete the program with:
        λ
        πA graduate-level research εabstractΕΠ
        πA εresearch posterΕ and εoral presentationΕΠ
        πA εcertificateΕ recognizing their training in bibliometrics and data scienceΠ
        Λ

        The BRI program prepares students to showcase their research at conferences, bolster their academic resumes, 
        and build skills in data-driven analysis.
        `,
        true,
        "click",
        "Apply",
        "https://tinyurl.com/thinkneuro-fa25",
      ],
    },
    {
      component: TextAlone,
      title: "ELIGIBILITY & APPLICATION CRITERIA",
      prop: [
        `
        ThinkNeuro’s Bibliometrics Research Internship (BRI) is open to ambitious high school and undergraduate students with a 
        passion for neuroscience. While U.S. students are given priority for admission, international applicants are also welcome to apply. ρ Ρ ρ Ρ
        
        εWho Should Apply: Ε 
        This program is ideal for students with little to no prior research experience. In fact, 43% of our interns from Summer 2025 indicated 
        that the BRI is their first exposure to research, making it especially well-suited for: 
        λ
        πHigh school students who are curious, driven, and eager to explore academic researchΠ
        πUndergraduates who want to build a strong foundation before joining university labs or applying to national research programsΠ
        πMaster’s students and recent graduates looking to gain practical experience in data analysis, research communication, or public health-related topicsΠ
        Λ

        εWe value curiosity, commitment, and independent learningΕ more than credentials. If you're motivated to learn and excited about neuroscience, 
        this program is built for you. ρ Ρ ρ Ρ

        εApplication Process: Ε
        λ
        πSubmit an φhttps://tinyurl.com/thinkneuro-fa25θonline application formΦΠ
        πAdmission offers are sent via email on a rolling basisΠ
        πEach cohort is capped to ensure quality mentorship and small-group supportΠ
        Λ
        We encourage early applications, as spots are limited and tend to fill quickly.
        `,
        "left",
      ],
    },
    {
      component: TextAlone,
      title: "INSIDE THE BRI CURRICULUM",
      prop: [
        `
        ε Phase 1: R Programming Foundations Ε
        ρ Ρ 
        Interns begin by building technical fluency in R, one of the most widely used programming languages in research and data science.
        Through guided modules led by our in-house biostatisticians and computer science mentors, students learn to:
        λ
        π Set up their R environment Π
        π Clean and organize data Π
        π Run bibliometric commands Π
        π Create basic visualizations (e.g., word clouds, co-authorship networks) Π
        Λ
        No prior coding experience is required, as this phase is designed to be beginner-friendly yet rigorous!
        ρ Ρ ρ Ρ

        ε Phase 2: Bibliometric Analysis & Data Visualization Ε
        ρ Ρ
        Next, interns move into the core analysis phase, where they extract real citation and authorship data from Web of Science (WoS) exports and organize it using Microsoft Excel and R.
        They will:
        λ
        π Perform keyword and citation analysis Π
        π Identify research trends and gaps Π
        π Create publication graphs, topic maps, and collaboration networks Π
        π Learn to interpret and refine bibliometric figures Π
        Λ
        This phase emphasizes bibliometric computation and modeling, transforming raw citation data into structured datasets and visual analytics.
        ρ Ρ ρ Ρ

        ε Phase 3: Research Communication & Presentation Ε
        ρ Ρ
        In the final phase, interns translate their analysis into professional research deliverables, including a graduate-level abstract, a research poster formatted for academic conferences, and an oral presentation.
        Interns receive mentorship on public speaking, design, and how to effectively communicate complex ideas to diverse audiences, preparing them for real-world academic and professional settings.
        ρ Ρ ρ Ρ
        Many interns have gone on to submit their posters to local and national conferences with success. Their research skills and communication training developed throughout the BRI program have:
        λ
        π Translated into stronger college and graduate school applications. Π
        π Opened doors to research positions at local universities and further academic opportunities. Π
        Λ
        The success of past interns is highlighted in the case studies featured below.
        `,
        "left",
      ],
    },
    {
      component: TextAlone,
      title: "TOOLS & PLATFORMS YOU'LL LEARN",
      prop: [
        `
        Throughout the program, interns gain hands-on experience with a range of tools commonly used in academic research, data science, and presentation design:
        λ
        π R Programming – for data cleaning, bibliometric analysis, and visualization Π
        π Web of Science (WoS) – to export citation and authorship data Π
        π Microsoft Excel – to organize, structure, and sort datasets Π
        π Zotero – to manage references and citation metadata Π
        π Google Slides / Canva – to design clear, professional posters and presentations Π
        Λ
        These tools are introduced gradually throughout each phase of the curriculum, with beginner-friendly guidance and support from mentors through our custom-built modules, dedicated Slack channels, and live bi-weekly office hours.
        ρ Ρ ρ Ρ

        ε ThinkNeuro AI Suite (Beta) Ε
        ρ Ρ
        As part of our commitment to innovation, ThinkNeuro is beta testing the ThinkNeuro AI Suite: a collection of AI-powered tools designed to support BRI interns throughout their research journey.
        ρ Ρ
        Interns will receive early access to:
        λ
        π ThinkCode AI – A GPT-powered R Programming Assistant that helps troubleshoot code, explain bibliometric functions, and guide basic syntax Π
        π ThinkDraft AI – An Abstract Scaffold Generator that offers structured prompts to help interns organize and begin writing their research abstracts Π
        Λ
        These tools are completely optional and are designed to enhance (not replace!) your learning, especially as you navigate coding and scientific communication.
        ρ Ρ ρ Ρ
        By participating in the beta, interns also play a key role in shaping the future of these tools. Planned features for future cohorts include:
        λ
        π Seamless integration with RStudio and Quarto Π
        π Scaffold templates for posters and oral presentations Π
        π AI-assisted literature review and citation support Π
        π Personalized learning prompts based on quiz results Π
        Λ
        Currently, these tools are included at no additional cost for BRI interns. In the future, they will be offered as licensed educational tools for independent learners, schools, and institutions.
        ρ Ρ
        `,
        "left",
      ],
    },
    {
      title: "STUDENT TESTIMONIALS",
      orientation: "left",
      component: TextImage,
      prop: [
        `
        εShishir TalladaΕ ρ Ρ
        ιHigh School Intern → Undergraduate at Johns Hopkins UniversityΙ ρ Ρ
        Shishir joined ThinkNeuro as a εhigh school studentΕ with no prior experience in academic research. Through his 
        internship, he explored key topics in medicine and public health while gaining valuable mentorship and communication 
        skills. Shishir is now attending εJohns Hopkins UniversityΕ, where he continues to build on the foundation he developed 
        during his time at ThinkNeuro.
        ρ Ρ ρ Ρ
        εAnton DaoΕ ρ Ρ
        ιFreshman at UC Berkeley → Undergraduate ResearcherΙ ρ Ρ
        Anton participated in ThinkNeuro as a freshman at UC Berkeley. The skills and support he received during the internship 
        helped him successfully transition into a research position at a university lab. He credits ThinkNeuro with giving him 
        the early momentum and clarity to pursue research with confidence.
        ρ Ρ ρ Ρ
        εSonia SinghalΕ ρ Ρ
        ιUndergraduate at the University of Pennsylvania → Returning Summer InternΙ ρ Ρ
        Sonia joined the BRI program in the spring of her freshman year at εUPennΕ. Now a rising sophomore, she’s returning for a 
        second round, but this time, she’s documenting her journey. Sonia’s 9-part video series walks through εeach week of the BRIΕ
        experience, so future interns can get a real sense of how the program is structured. ρ Ρ
        φhttps://www.youtube.com/watch?v=404HAt-ww3M&list=PL7yaNuHOf2USqfJUnt7CV8xs0A1PtthdKθWatch the full seriesΦ
        `,
        "rightLeft",
        [9, "assets/testimonials/research/"],
        true,
        true,
      ],
    },
    // {
    //   title: "GALLERY (2024)",
    //   orientation: "left",
    //   component: TightGallery,
    //   prop: [
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/0.png",
    //       three: false,
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/1.png",
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/2.png",
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/3.png",
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/4.png",
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/5.png",
    //     },
    //     {
    //       component: Image,
    //       args: "assets/posters/2024/6.png",
    //     },
    //   ],
    // },
    {
      title: "FREQUENTLY ASKED QUESTIONS",
      orientation: "left",
      component: Accordian,
      prop: [
        {
          question: "How much time should I expect to commit each week?",
          answer: `Interns typically spend ε3–5 hours per weekΕ, depending on their pace and depth of exploration. 
            The program is designed to be flexible for students balancing school, extracurriculars, or other commitments.`,
          isOpen: false,
        },
        {
          question: "Do I need any prior experience with coding or research?",
          answer: `Not at all! BRI is εbeginner-friendlyΕ and structured to support students with little to no prior experience. 
            Many of our interns are exploring research for the first time.`,
          isOpen: false,
        },
        {
          question: "Is the program fully remote?",
          answer: `Yes — BRI is ε100% onlineΕ and accessible to students worldwide. All training, mentorship, and deliverables 
          can be completed from anywhere with an internet connection.`,
          isOpen: false,
        },
        {
          question: "Will I receive a certificate at the end?",
          answer: `Yes, interns who complete the full curriculum will receive a εcertificate recognizing their training in 
            bibliometric analysis and data science.Ε`,
          isOpen: false,
        },
        {
          question: "Are there live meetings? What if I can't attend?",
          answer: `The first 2–3 weeks of R programming are εfully asynchronous and self-pacedΕ. After that, interns are grouped 
            into research projects led by project associates, who host real-time meetings to support analysis and presentation 
            development. Meeting times are coordinated based on εintern availabilityΕ, and recordings or alternative options are 
            provided when possible.`,
          isOpen: false,
        },
        {
          question:
            "What kind of support will I receive during the research internship program?",
          answer: `Every intern is paired with a εproject associate or supervisorΕ who provides guidance, feedback, and mentorship throughout 
            the program. You’ll also have access to εcustom-built modulesΕ, dedicated εSlack channelsΕ, and εbi-weekly live office hoursΕ 
            led by ThinkNeuro staff.`,
          isOpen: false,
        },
        {
          question:
            "Can I use my project for a science fair or external competition?",
          answer: `Yes! Many interns have successfully submitted their εBRI posters or abstractsΕ to science fairs, conferences, and other 
          external competitions. If you plan to do so, you must εkeep the ThinkNeuro trademark on your posterΕ. We also encourage you to 
          let your mentor know, as we’re happy to help you prepare your materials for submission.`,
          isOpen: false,
        },
        {
          question: "Is financial aid available?",
          answer: `εFinancial aid is not available for the Fall 2025 program cohortΕ, but students needing assistance are encouraged to apply 
          for our Spring or Summer cohorts, as funding availability may change. ρ Ρ ρ Ρ
          
          Interns who are unable to pay the full program fee upfront can choose εKlarnaΕ at checkout through Stripe to finance their tuition. 
          Klarna offers options like Pay in 4 interest-free installments or monthly financing, depending on your eligibility.`,
          isOpen: false,
        },
        {
          question: "What is the acceptance rate?",
          answer: `We do not have fixed acceptance rates, as they εvary by application cycleΕ depending on the volume and competitiveness 
          of the applicant pool. Some cycles — such as the Fall — receive significantly more applications than others. ρ Ρ ρ Ρ
          
          Admission is based on a εholistic reviewΕ of your interest, commitment, and alignment with our mission. While the program is 
          selective, it is also designed to support a εdiverse range of learnersΕ, especially those with limited access to traditional 
          research opportunities, whether due to their εage, educational background, or lack of prior research exposureΕ. ρ Ρ ρ Ρ

          For acceptance statistics from a recent cohort, you can view data from Fall 2024 φhttps://www.instagram.com/p/DAhkf9rukpv/?img_index=1θhereΦ
          `,
          isOpen: false,
        },
        {
          question: "Can international students and recent graduates apply?",
          answer: `
          Yes, international students are eligible and welcome to apply. While U.S.-based students are prioritized, we regularly receive applications 
          from students around the world. ρ Ρ ρ Ρ
          
          The program is open to high school students, undergraduates, master’s students, and recent graduates who are eager to build research and 
          data skills. All applicants are considered based on fit, interest, and capacity.
          `,
          isOpen: false,
        },
      ],
    },
  ]}
/>
<Footer />

<!-- {
  title: "GALLERY (2023)",
  orientation: "left",
  component: JuxtaposeGallery,
  prop: [
    [
      {
        component: Image,
        args: "assets/posters/2023/0.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/oU8GnZgzF1I",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/1.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/LTNZb70U7UE",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/2.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/w_LOSchQXiI",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/3.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/q4SLNHTE4h0",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/4.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/bN03T3wWOJ0",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/5.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/wQ0znzBUcD8",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/6.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/eYLekIrFUTM",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/7.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/OZ0nAbft6kY",
      },
    ],
    [
      {
        component: Image,
        args: "assets/posters/2023/8.png",
      },
      {
        component: Video,
        args: "https://www.youtube.com/embed/bsEkXE-GI4E",
      },
    ],
  ],
}, -->

<style>
</style>
