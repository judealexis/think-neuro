<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextButton from "./Components/TextButton.svelte";
  import TightGallery from "./Components/TightGallery.svelte";
  import Video from "./Components/Video.svelte";
</script>

<Header />
<Repeater
  children={[
    {
      title: "ABOUT",
      orientation: "left",
      component: TextButton,
      prop: [
        "In the past, we’ve had volunteer programs that run during the summer that provide students with health-based videos. By watching our videos and completing the tasks within each video, our volunteers gain community service hours as a token of their work and dedication to the neurologic space.",
        true,
        "click",
        "Apply",
        "https://docs.google.com/forms/d/e/1FAIpQLScNgmqC-qtYnHcXUzsieLNrf2_2RT4Ly8Ic75GSOzS4xnDdmA/closedform",
      ],
    },
    {
      title: "VIDEOS",
      orientation: "left",
      component: TightGallery,
      prop: [
        {
          component: Video,
          args: "https://www.youtube.com/embed/o2dmjUJSco8",
          three: true,
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/uhEugJ7H0h8",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/_7ub4L919AQ",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/LXrdUsIzuiY",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/HsDaq_V9KMc",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/Xbg6IUhk31M",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/4jKKW7aQd_k",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/t5lG4JHCWI4",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/L7N-jmhJ-6I",
        },
        {
          component: Video,
          args: "https://www.youtube.com/embed/tQ9d_OqwZ4o",
        },
      ],
    },
  ]}
/>
<Footer />

<style>
</style>
