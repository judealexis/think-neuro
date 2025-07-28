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
        "ThinkNeuro is building the future of early-stage research and medical education through scalable, AI-supported learning experiences. We empower students, from elementary to undergraduate, with access to certification programs, research publication pathways, and real-world exposure to neuroscience, medicine, and public health. ThinkNeuro’s proprietary AI Suite, integrated directly into our programs, transforms how students learn and produce research. By building the infrastructure to democratize access to scientific education at scale, we’re creating new opportunities for students to explore their passions and accelerate their academic journeys. Rooted in equity, innovation, and impact, ThinkNeuro is redefining what’s possible for young learners, unlocking new pathways to academic and professional success.",
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
