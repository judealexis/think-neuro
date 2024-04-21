<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import TextImage from "./Components/TextImage.svelte";
  import Carousel from "./Components/Carousel.svelte";
  import TightGallery from "./Components/TightGallery.svelte";
  import Video from "./Components/Video.svelte";
  import Image from "./Components/Image.svelte";
  import JuxtaposeGallery from "./Components/JuxtaposeGallery.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "ABOUT",
      orientation: "left",
      component: TextButton,
      prop: [
        "αβγ",
        true,
        "click",
        "Apply",
        "http://tinyurl.com/su24-thinkneuro",
      ],
    },
    {
      title: "STUDENT TESTIMONIALS",
      orientation: "center",
      component: Carousel,
      prop: [9, "assets/testimonials/research/"],
    },
  ]}
/>
<Repeater
  noAlternate={false}
  children={[
    {
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
    },
  ]}
/>
<Footer />

<style>
</style>
