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
        "ThinkNeuro is dedicated to combating healthcare disparities in opioid abuse treatment access through policy advocacy, education reform, and technological renovation. Through sponsorship of professional development opportunities and scholarship initiatives, we aim to inspire future healthcare leaders to serve the public and improve the health of communities often in the periphery of our society. Our commitment to public service extends beyond streamlining substance abuse campaigns to bridging digital health solutions for opioid use disorder patients and expanding telehealth services for addiction treatment. Intersecting collaboration of highly motivated academics with our emphasis on scholarly research, ThinkNeuro strives to address the racial-ethnic, socioeconomic, and geographic barriers to healthcare access within the United States.",
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
        "νWe have an aspiration to be better. Our advocacy initiatives and community-focused research projects serve to redress centuries of racism, discrimination, and inequity that have plagued the healthcare and education sectors of our society. We have an aspiration to foster a sense of belonging, collaboration, and self-empowerment, applying sociocultural models of learning such asΝ ι Vygotsky's Zone of Proximal Development Ι νandΝ ι Cognitive ApprenticeshipΙν. We have an aspiration to improve the environment in which our learners, ranging from the highly academically competent to the academically marginalized, gain fundamental skills required to become equity-oriented leaders engaged in public and academic discourse.Ν",
        "rightLeft",
        "assets/mission",
        true,
        true,
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
