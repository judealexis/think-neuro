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
            "How do I apply to ThinkNeuro’s Fall 2025 Internship Cohort?",
          answer:
            "You can apply to ThinkNeuro’s Fall 2025 Cohort by clicking the “Apply for the Fall 2025 Cohort” button on our homepage or navigating to φwww.thinkneuro.org/researchθwww.thinkneuro.org/researchΦ. If you have any difficulty accessing the application at any time, please contact our team at φmailto:info@thinkneuro.orgθinfo@thinkneuro.orgΦ.",
          isOpen: false,
        },
        {
          question:
            "What differentiates ThinkNeuro’s pre-health opportunities?",
          answer:
            "αThe main perks of participation in ThinkNeuro’s programs include authorship on scholarly publications from research-based internships and academic scholarships from Medical Hackathon participation. For more information, please refer to the “Programs” section of our website.Α",
          isOpen: false,
        },
        {
          question: "When does ThinkNeuro open applications for all programs?",
          answer:
            "αInternship applications are open and accessible twice a year in the Fall and Spring. Clinical research applications are open and accessible twice a year in the Winter and Summer. Medical Hackathon applications are live in November. You can view interns who've participated in our hackathons Α φhttps://www.instagram.com/p/C0-mmZgrmcZ/?img_index=1θhereΦ α , all of whom are legally listed as inventors on the provisional patents that ThinkNeuro files.Α",
          isOpen: false,
        },
        {
          question: "Who can participate in the internship program?",
          answer:
            "αAmbitious high school students and undergraduates are eligible to apply for the internship.Α",
          isOpen: false,
        },
        {
          question:
            "How are applications reviewed for the internship program? How competitive are admissions?",
          answer:
            "αAll applications are reviewed periodically. We typically have two review rounds and encourage early submissions. To gauge competitiveness of previous cohorts, please review our Αφhttps://www.instagram.com/p/DAhkf9rukpv/?img_index=1θFall 2024 Internship Admission Statistics. Φ",
          isOpen: false,
        },
        {
          question:
            "What are past examples of ThinkNeuro research and internship cohorts?",
          answer:
            "αYou can find past oral and posters presented at the ThinkNeuro Research Symposium under the “Programs” section of our website. For research and scholarship testimonials, please follow our social media Α φhttp://instagram.com/thinkneuroθ@thinkneuroΦ",
          isOpen: false,
        },
        {
          question:
            "How does ThinkNeuro value the integrity of our organization and the experiences of our interns?",
          answer:
            "αAt ThinkNeuro, we care about the experiences of our interns to the greatest extent. We are transparent about past incidents where there may have been a lot of unwanted commotion on our Slack or other social media platforms that have disrupted the experiences of our interns. For the full incidence report, please refer to this Α φhttps://drive.google.com/drive/u/1/folders/122rV8GdpaCIKa15QDeqUnGS2S-vENPEDθarchiveΦ",
          isOpen: false,
        },
      ],
    },
  ]}
/>
<Footer locked={true} />

<style>
</style>
