<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import Accordian from "./Components/Accordian.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "FREQUENTLY ASKED QUESTIONS",
      orientation: "left",
      component: Accordian,
      prop: [
        {
          question:
            "What differentiates ThinkNeuro’s pre-health opportunities?",
          answer:
            "The main perks of participation in ThinkNeuro’s programs include authorship on scholarly publications from research-based internships and academic scholarships from Medical Hackathon participation. For more information, please refer to the “Programs” section of our website.",
          isOpen: false,
        },
        {
          question: "When does ThinkNeuro open applications for all programs?",
          answer:
            "Internship applications are open and accessible twice a year in the Fall and Spring. Clinical research applications are open and accessible twice a year in the Winter and Summer. Medical Hackathon applications are live in November.",
          isOpen: false,
        },
        {
          question: "Who can participate in the internship program?",
          answer:
            "Ambitious high school students and undergraduates are eligible to apply for the internship.",
          isOpen: false,
        },
        {
          question:
            "How are applications reviewed for the internship program? How competitive are admissions?",
          answer: "αβγ",
          isOpen: false,
        },
        {
          question:
            "What are past examples of ThinkNeuro research and internship cohorts?",
          answer: "αβδ",
          isOpen: false,
        },
        {
          question:
            "How does ThinkNeuro value the integrity of our organization and the experiences of our interns?",
          answer: "αβε",
          isOpen: false,
        },
      ],
    },
  ]}
/>
<Footer locked={true} />

<style>
</style>
