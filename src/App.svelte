<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import TextImage from "./Components/TextImage.svelte";
  import Carousel from "./Components/Carousel.svelte";
  import Contact from "./Components/Contact.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "OUR MISSION",
      orientation: "left",
      component: TextButton,
      prop: [
        "ThinkNeuro is redefining early access to research and medical education by empowering students through innovative, AI-supported learning experiences. From elementary and middle school learners to high school and undergraduates, we provide our students with research certification, publication pathways, and hands-on exposure to the health sciences. Through scalable, student-centered programs like our Bibliometric Research Internship (BRI) and Doctor Discovery Program (DDP), we aim to democratize access to meaningful academic and scientific exploration. By centering equity, innovation, and impact, we aim to bridge the gap between ambition and opportunity, creating new pipelines for socially conscious scholars to drive change for the underserved.",
        true,
        "click",
        "Learn More",
        "/internship",
      ],
    },
    {
      title: "DIVERSITY STATEMENT",
      orientation: "center",
      component: TextImage,
      prop: [
        "At ThinkNeuro, we hold a deep aspiration to build a more equitable future. Our advocacy initiatives and community-focused research aim to confront and redress the long-standing legacies of racism, discrimination, and structural inequity that persist in healthcare and education. We strive to foster a sense of belonging, collaboration, and self-empowerment by grounding our programs in sociocultural models of learning, including ιVygotsky’s Zone of Proximal DevelopmentΙ and ιCognitive ApprenticeshipΙ. Whether our learners are highly academically prepared or historically marginalized, we are committed to cultivating environments where all students can acquire the foundational skills to become equity-driven leaders engaged in both public and academic discourse.",
        "rightLeft",
        "assets/mission",
        false,
      ],
    },
    {
      title: "STUDENT TESTIMONIALS",
      orientation: "center",
      component: Carousel,
      prop: [9, "assets/testimonials/mainPage/"],
    },
    { title: "CONTACT", orientation: "left", component: Contact, prop: [] },
  ]}
/>
<Footer />

<style>
</style>
