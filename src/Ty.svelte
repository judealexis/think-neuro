<script>
  import Header from "./Components/Header.svelte";
  import Footer from "./Components/Footer.svelte";
  import Repeater from "./Components/Repeater.svelte";
  import TextAlone from "./Components/TextAlone.svelte";
  import TextImage from "./Components/TextImage.svelte";
  import CtaBtn from "./Components/CtaBtn.svelte";
  import Compare from "./Components/Compare.svelte";
  import Contact from "./Components/Contact.svelte";
</script>

<Header headbar={false} />

<!-- let rubric = [
    ["ε", "Ε", "emphasis"], //bold black
    ["β", "Β", "blue"],
    ["ω", "Ω", "white"],
    ["α", "Α", "black"],
    ["ρ", "Ρ", "break"],
  ]; -->

<main>
  <div class="inColumn" id="header">
    <div id="title">
      <span id="white">Your </span>
      <span id="blue"> free guide</span>
      <span id="white"> is on its way to your </span>
      <span id="blue">inbox!</span>
    </div>
    <img id="celebration" src="assets/celebration.png" alt="logo" />
  </div>
  <div id="infoBlock"></div>
</main>

<Repeater
  noAlternate="{true},"
  noSpacing="{true},"
  children={[
    {
      component: TextAlone,
      prop: [
        "βStart accessing resources nowΒα for your journey, or hang tight until Friday!Α",
        "center",
      ],
    },
    {
      component: TextImage,
      prop: [
        "βFree guidesΒα We collected all our best free resources in one place for you. As new options arrive you will see them right in the newsletter!Α",
        "right",
        "assets/phoneWoman.png",
        false,
        true,
      ],
    },
    {
      component: TextImage,
      prop: [
        "βPremium ResourcesΒα The choice to invest in yourself and your future is invaluable. While free resources are good, we share the premium services that have made all the difference for thousands of students.Α",
        "left",
        "assets/screenMan.png",
        false,
        true,
      ],
    },
  ]}
/>
<CtaBtn
  prop={[
    "ωWe have Ωβgifts for you Β ωwhen you Ω βshareΒ ω our newsletter with friends. Ω",
    "Join Now",
    false,
  ]}
/>
<Repeater
  noAlternate="{true},"
  noSpacing="{true},"
  children={[
    {
      component: TextAlone,
      prop: [
        "βThink Neuro Referral ProgramΒ ρ Ρ α We want to provide our resources to as many people as possible, Α ε students and parents alike. Ε ρ Ρ α When you help us in our mission by sharing your unique referral link, we'll send you Α εfree stuff! Ε ρ Ρ αEach week, you'll see what Α εrewards you can claim Ε α when you share our newsletter with friends and family that join our newsletter!Α",
        "left",
      ],
    },
    {
      component: Compare,
      prop: [
        {
          title: "Free Guides",
          image: "assets/giftLady.png",
          points: [
            "Premium Guide to Starting Your Own Nonprofit",
            "Executive Coaching Session",
            "Think Neuro Merchandise",
            "Discounts for Speciality Services",
            "And Much More!",
          ],
        },
      ],
    },
  ]}
/>
<CtaBtn
  prop={[
    "ωContact our team to learn more about Ωβfree rewards Β",
    "Get Newsletter",
    false,
  ]}
/>
<Repeater
  noSpacing={false}
  children={[
    { title: "CONTACT", orientation: "left", component: Contact, prop: [] },
  ]}
/>
<Footer />

<style>
  @font-face {
    font-family: think;
    src: url("fonts/analogue65medium.ttf");
  }
  @font-face {
    font-family: thinkHard;
    src: url("fonts/analogue75bold.ttf");
  }
  @font-face {
    font-family: thinkLight;
    src: url("fonts/analogue35thin.ttf");
  }

  #title {
    font-size: 35px;
    font-family: think;
    color: #abcdff;
    text-align: center;
    margin-top: 20px;
  }
  #blue {
    font-family: thinkSmart;
    color: #abcdff;
  }
  #white {
    font-family: think;
    color: white;
  }
  #infoBlock {
    color: #f2f2f2;
  }
  #celebration {
    object-fit: contain;
    margin-right: 20px;
    width: 250px;
  }
  #header {
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-image: linear-gradient(to bottom right, #294464, #19304c);
    color: white;
  }
  @media (max-width: 1100px) {
    #title {
      font-size: 3.2vw;
    }
  }
  @media (max-width: 750px) {
    #title {
      font-size: 24px;
    }
    #header {
      padding: 20px;
    }
  }
  @media (max-width: 600px) {
    #celebration {
      width: 40vw;
      margin-right: 2vw;
    }
    #header {
      padding: 18px;
    }
  }
  @media (max-width: 500px) {
    #title {
      font-size: 4.8vw;
    }
    #header {
      padding: 10px;
    }
  }
</style>
