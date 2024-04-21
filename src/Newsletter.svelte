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
    <img id="logo" src="assets/logo.png" alt="logo" />
    <div id="title">Every Moment is a Chance to Achieve</div>
    <div id="subTitle">
      <span id="subNormal">A weekly newsletter curated by </span>
      <span id="subEmph">Think Neuro</span>
    </div>
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
        "βJoin 2,000+ pre-professional studentsΒα accessing speciality resources vetted for success.Α",
        "center",
      ],
    },
    {
      component: TextImage,
      prop: [
        "αWe are invested in theΑ ε achievementsΕ α andΑ ε admissions Ε αsuccess of our pre-medical and pre-health students at Think Neuro.Α",
        "right",
        "assets/checkMan.png",
        false,
        true,
      ],
    },
    {
      component: TextImage,
      prop: [
        "αWe are invested in theΑ ε achievementsΕ α andΑ ε admissions Ε αsuccess of our pre-medical and pre-health students at Think Neuro.Α",
        "left",
        "assets/boxCheck.png",
        false,
        true,
      ],
    },
  ]}
/>
<CtaBtn
  prop={[
    "ωWe Ωβbuilt Β ωour newsletter to remove the Ω βguesswork.Β",
    "Join Now",
    true,
  ]}
/>
<Repeater
  noAlternate="{true},"
  noSpacing="{true},"
  children={[
    {
      component: TextAlone,
      prop: [
        "βEvery Friday...Β ρ Ρ α The executive team at Think Neuro releases Α εhand-picked resources and services Ε αwith a track record for admissions success.Α ρ Ρ α So you Α εnever need to worry Ε αabout missing resources or falling behind in your educational ambitions.Α",
        "left",
      ],
    },
    {
      component: Compare,
      prop: [
        {
          title: "Free Guides",
          image: "assets/phoneWoman.png",
          points: [
            "How to Apply to Top Medical Schools",
            "Students Journey to BS/MD Acceptances",
            "Starting a Nonprofit Organization from Scratch",
            "Stanford Admit Shares Their Accepted Resume",
            "And More...",
          ],
        },
        {
          title: "Premium Resources",
          image: "assets/screenMan.png",
          points: [
            "MCAT Courses of a 520+ Scorer",
            "Prep Books That Worked for MD Interview Success",
            "Executive Coaching for Building a Profitable Company",
            "Vetted Admissions Experts for Application Essay Feedback",
            "Launch Your Own Course in Just Five Days",
            "And More...",
          ],
        },
      ],
    },
  ]}
/>
<CtaBtn
  prop={[
    "ωWe'll send you our Ωβfree guide Β ωwith Ω β5 Ways to Stand Out Βωas a pre-health applicant.Ω",
    "Get Newsletter",
    true,
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
  #subTitle {
    font-size: 20px;
  }
  #subNormal {
    font-family: ThinkLight;
    color: white;
  }

  #subEmph {
    font-family: ThinkHard;
    color: white;
  }
  #infoBlock {
    color: #f2f2f2;
  }
  #logo {
    object-fit: contain;
    margin-right: 20px;
    width: 100px;
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
    #subTitle {
      font-size: 1.8vw;
    }
  }
  @media (max-width: 750px) {
    #title {
      font-size: 24px;
    }
    #subTitle {
      font-size: 13.5px;
    }
    #header {
      padding: 20px;
    }
  }
  @media (max-width: 600px) {
    #logo {
      width: 14vw;
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
    #subTitle {
      font-size: 2.8vw;
    }
    #header {
      padding: 10px;
    }
  }
</style>
