<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import TextImage from "./Components/TextImage.svelte";
  import TextAlone from "./Components/TextAlone.svelte";
  import Carousel from "./Components/Carousel.svelte";
  import Accordian from "./Components/Accordian.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "APPLY",
      orientation: "left",
      component: TextButton,
      prop: [
        "αβδ",
        true,
        "click",
        "Apply",
        "https://docs.google.com/forms/d/e/1FAIpQLSc1Oo76EflJkTf_Svq3VG1EftaiAB9GFHxJVX3REi0cl1LDOw/viewform?usp=dialog",
      ],
    },
    {
      title: "PROGRAM DATES",
      orientation: "center",
      component: TextImage,
      prop: [
        `αThe Doctor Discovery Program runs from June 23rd to August 9th, 2025 with a total of 6 hours of programming each week: Α ρ Ρ
        κ• Lesson (1 hour): Κ ρ Ρ
        λ- Monday 9 AM PST or Λ ρ Ρ
        λ- Saturday 9 AM PST Λ ρ Ρ
        κ• Game Day (2 hour): Κ ρ Ρ
        λ- Sunday 9 AM PST Λ ρ Ρ
        κ• Office Hours (2 hour): Κ ρ Ρ
        λ- Sunday 11 AM PST Λ ρ Ρ`,
        "rightLeft",
        "assets/volunteer/asianDoctor",
        true,
      ],
    },
    {
      component: TextAlone,
      title: "PROGRAM OVERVIEW",
      prop: [
        "αStudents are able to choose between Monday or Saturday lesson times to accommodate for their busy summer schedules. While the content in both Monday and Saturday lessons will be relatively similar, students are able to join both sessions to ask questions and redo the at-home lab experiment with our Α εDoctor Discovery Kit™.Ε ρ Ρ αEach week, students will attend a virtual lesson taught by our counselors to go over the basics of the human body system along with an at-home lab experiment using the Α εDoctor Discovery Kit™Ε α complimentary of the program. Α ρ Ρ αAdditionally, there are Α ε“Game Days” and “Office Hours”Ε α available every Sunday. While these sessions are optional to attend, we encourage students to show up, as we account for participation when deciding the top students to award academic scholarships to at the end of the summer session. Α εGame DayΕ α comprises of virtual Bingo, Blooket, Jeopardy, and Simon Says. Α ρ Ρ αAfter class, students are expected to spend an additional hour to complete the homework assignments that accompany each lesson. They can bring questions to our Α εOffice HoursΕ α if they are stuck. Α ρ Ρ αBy signing up for the Α εDoctor Discovery ProgramΕ α, your child is provided with a Α εDoctor Discovery Kit™Ε α directly manufactured at the ThinkNeuro warehouse to supplement their learning experience. From food coloring to balloons, pipe cleaners to string, students will be able to model the various digestive and immune functions of their body systems. These kits will be shipped directly to your home, so there is no trouble or need for on-site pick up. Α",
        "left",
      ],
    },
    {
      title: "",
      orientation: "center",
      component: TextImage,
      prop: [
        `εThe Presidential Volunteer Service Award (PVSA) Ε αrecognizes students for their commitment to learning and community service. ThinkNeuro, a certified organization, grants this award to students who complete volunteer service through their summer programs. Students can earn hours by creating Α εHealth Fact vs. Myth infographicsΕ α, producing Α εdemonstration videosΕ α, and giving Α εpresentationsΕ α at community events. ThinkNeuro also partners with schools, libraries, and community centers to turn student-created materials into Α εpublic educational resourcesΕ α, expanding their impact.Α`,
        "right",
        "assets/volunteer/serviceAward",
        true,
      ],
    },
    {
      component: TextAlone,
      title: "",
      prop: [
        "αIn the past, ThinkNeuro as a social enterprise has served over Α ε4,000 studentsΕ α and counting, with hundreds participating in our summer programs each year. They are extremely satisfied with their experience, and you can view real student testimonials on Α εTrustpilot.Ε α Α ρ Ρ αThinkNeuro has also given generous Α εacademic scholarshipsΕ α to young students in elementary, middle, and high school each summer. Up to Α ε$500Ε α are awarded to students for the work they do at ThinkNeuro, with more information available closer to the start of the program. Α ρ Ρ αFor Α εscholarship opportunitiesΕ α for high school and undergraduate students, we encourage you to review our Α εresearch-intensive internship programΕ α in bibliometric analysis. Α",
        "left",
      ],
    },
    {
      title: "STUDENT TESTIMONIALS",
      orientation: "center",
      component: Carousel,
      prop: [6, "assets/testimonials/volunteer/"],
    },
    {
      component: TextAlone,
      title: "PROGRAM OVERVIEW",
      prop: [
        "αBecause of high demand each summer and the limited availability of the Α εDoctor Discovery Kit™Ε α, we encourage you to finalize your child's summer schedule and sign up as soon as possible. Once our full inventory is sold, we cannot open more seats in the program, and you would need to wait until next summer if interested. Α ρ Ρ αSign-ups will be open on Α εMarch 17thΕ α and close on Α εMay 30th, 2025.Ε α We encourage you to bookmark our website Α φhttps://www.thinkneuro.org/volunteerθwww.thinkneuro.org/volunteerΦ α so you can access the application as soon as it opens. Α ρ Ρ αThere is a Α ε$200 program feeΕ α per student, which covers activity materials included in our Α εDoctor Discovery Kit™Ε α, on-demand lesson materials, and shipment of theΑ ε Presidential Volunteer Service AwardΕ α certificates and medallions. Α ρ Ρ αTo learn more about the Α εDoctor Discovery Program (DDP),Ε α please watch the programming prepared by our staff here. For any additional questions, please review our Α εFrequently Asked Questions (FAQs)Ε α below or contact our staff at Α φmailto:info@thinkneuro.orgθinfo@thinkneuro.orgΦ",
        "left",
      ],
    },
    {
      title: "FREQUENTLY ASKED QUESTIONS",
      orientation: "left",
      component: Accordian,
      prop: [
        {
          question: "Who is eligible for the Doctor Discovery Program (DDP)?",
          answer:
            "αThe Α εDoctor Discovery ProgramΕ α is ThinkNeuro’s signature virtual summer program for rising Α ε3rd to 8th gradersΕ α interested in learning about the human body through interactive lessons and hands-on experiments using our Α εDoctor Discovery Kit™.Ε α Α αIf your child does not meet the age requirement, you may submit a Α φhttps://docs.google.com/forms/d/e/1FAIpQLSfYzrS8YVDJkGaRVTpU5B7bdR_Kc0x9Jic7TsqmMN8Naxnk1g/viewform?usp=dialogθwaitlist applicationΦ α, and we will do our best to accommodate your request or put you on a Α εpriority listΕ α for future sessions.Α",
          isOpen: false,
        },
        {
          question: "What is included in the $200 program fee?",
          answer:
            "αThe Α ε$200 program feeΕ α covers: Α ρ Ρ κ• Doctor Discovery Kit™ (includes shipping) Κ ρ Ρ κ• On-demand lesson materials Κ ρ Ρ κ• Live virtual instruction & counselor support Κ ρ Ρ κ• Game Days & Office Hours access Κ ρ Ρ κ• Presidential Volunteer Service Award (PVSA) certificate & medallion (shipment) Κ ρ Ρ",
          isOpen: false,
        },
        {
          question:
            "What is the Presidential Volunteer Service Award (PVSA)? Do all students at ThinkNeuro receive it?",
          answer:
            "αThe PVSA is a prestigious national award recognizing volunteer service. All students enrolled in summer sessions at ThinkNeuro are eligible to receive the certificate and medallion at the end of the program as long as they meet participation requirements.Α",
          isOpen: false,
        },
        {
          question: "When does registration open and close?",
          answer:
            "κ• Registration opens on March 17th and closes on May 30th, 2025. Κ ρ Ρ κ• Once all kits are sold out, we cannot add more seats, so we encourage early sign-ups. Κ",
          isOpen: false,
        },
        {
          question: "What happens if my child misses a class?",
          answer:
            "αWe provide on-demand lesson recordings so students can catch up at their own pace. They can also attend Office Hours on Sundays to ask questions.Α",
          isOpen: false,
        },
        {
          question: "Are there scholarship opportunities?",
          answer:
            "αYes! ThinkNeuro awards up toΑ ε $500 in academic scholarshipsΕ α to top-performing students based on participation, engagement, and contributions to the program.Α",
          isOpen: false,
        },
        {
          question: "What is the refund policy?",
          answer:
            "αDue to high demand and limited inventory of the Α εDoctor Discovery Kit™Ε α, refunds are not available once a student has been accepted and enrolled in the program. If students face scheduling conflicts, our team offers a one-time courtesy deferral to a future Α εFall, Spring, or Summer session.Ε",
          isOpen: false,
        },
        {
          question: "How do I register my child?",
          answer:
            "κ• Apply online at www.thinkneuro.org/volunteer. Κ ρ Ρ κ• Once accepted, complete the $200 program fee payment to secure your child’s spot. Κ ρ Ρ κ• Your child will receive a confirmation email with program details and kit shipment info. Κ",
          isOpen: false,
        },
        {
          question: "How can I contact ThinkNeuro for more questions?",
          answer:
            "αFor any additional questions, please email us at Α φmailto:info@thinkneuro.orgθinfo@thinkneuro.orgΦ and our staff will be happy to assist you!",
          isOpen: false,
        },
      ],
    },
  ]}
/>
<Footer />

<style>
</style>
