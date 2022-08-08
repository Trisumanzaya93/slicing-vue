<template>
  <Navbar />

  <!-- row 1 -->
  <div class="w-[100%] h-[72vh] relative font-open">
    <div class="w-[100%] h-[50%] bg-[#1C417D]"></div>
    <div class="w-[100%] h-[50%]"></div>
    <div
      class="w-[87%] h-[426px] absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-between flex-col items-start px-4"
    >
      <button
        @click="goBack"
        class="pt-1 text-white hover:text-slate-400 text-[13px]"
      >
        Kembali
      </button>
      <a
        class="w-[100%] h-[90%] bg-banner-class bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer overflow-hidden"
        href="#my-modal-2"
      >
        <div
          class="flex items-center justify-center w-full h-full bg-opacity-50 bg-slate-800"
        >
          <img
            src="@/assets/icons/play.svg"
            alt="icon"
            width="70"
            height="70"
          />
        </div>
      </a>
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="flex items-center justify-center w-screen h-auto py-5 font-open">
    <div class="w-[85%] h-auto flex justify-between gap-2 flex-wrap">
      <div class="items-start">
        <p class="text-sm leading-5 text-[#8D959E]">
          NodeJS - Building Backend with NodeJS for Beginner
        </p>
        <p class="text-2xl text-[#1F2A36] leading-9 font-semibold my-2">
          Building Backend with NodeJS for Beginner
        </p>
        <p class="py-2 text-sm leading-5">Course Basic</p>
        <p class="py-2 text-sm leading-5">
          Kunjungi Website Fazztrack Untuk Info Pelatihan
        </p>
        <p>https://www.fazztrack.com/</p>
        <br />
        <p class="py-2 text-sm leading-5">
          Follow juga Akun Instagram Fazztrack
        </p>
        <p class="py-2 text-sm leading-5">
          https://www.instagram.com/fazztrack.id
        </p>
      </div>
      <div class="w-full pt-10 lg:w-auto">
        <CardModule />
      </div>
    </div>
  </div>

  <!-- ROW 3 -->
  <div class="flex items-center justify-center w-screen h-auto py-7 font-open">
    <div class="w-[85%] h-auto">
      <p class="text-xl font-semibold text-[#1F2A36]">List Materi</p>
      <table
        class="table w-full mt-5 border rounded-lg"
        v-if="window.width < 700"
      >
        <!-- head -->
        <thead>
          <tr>
            <th>Judul</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr>
            <td>Building Backend With Nodejs For Begineer</td>
          </tr>
        </tbody>
      </table>

      <div class="w-full mt-5 border rounded-lg" v-else>
        <div class="overflow-x-auto">
          <table class="z-0 table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th>Judul</th>
                <th>Durasi</th>
                <th>Diskusi</th>
                <th>materi</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <td>Building Backend With Nodejs For Begineer</td>
                <td>02:22:01</td>
                <td>28 Komentar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- ROW 4 -->
  <div
    class="flex items-center justify-center w-screen h-auto py-5 mb-20 font-open"
  >
    <div class="w-[85%] h-auto">
      <p class="text-xl font-semibold text-[#1F2A36] mb-5">Rating dan Review</p>
      <div
        class="flex flex-wrap justify-between gap-10 lg:flex-nowrap lg:gap-0"
      >
        <div class="lg:w-[30%] w-full h-fit lg:sticky border top-24">
          <div class="flex items-center justify-between p-6 border">
            <div class="flex items-center justify-center">
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
            </div>
            <p>32</p>
          </div>

          <div class="flex items-center justify-between p-6 border">
            <div class="flex items-center justify-center">
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
            </div>
            <p>4</p>
          </div>

          <div class="flex items-center justify-between p-6 border">
            <div class="flex items-center justify-center">
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
            </div>
            <p>0</p>
          </div>

          <div class="flex items-center justify-between p-6 border">
            <div class="flex items-center justify-center">
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
            </div>
            <p>0</p>
          </div>

          <div class="flex items-center justify-between p-6 border">
            <div class="flex items-center justify-center">
              <img :src="RatingSolidIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
              <img :src="RatingNullIcon" alt="icon" height="20" width="20" />
            </div>
            <p>0</p>
          </div>
        </div>
        <div class="lg:w-[70%] w-full h-auto lg:pl-10">
          <CardReview />
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL-->
  <div class="modal" id="my-modal-2">
    <div class="relative w-auto max-w-max modal-box">
      <h3 class="text-lg font-bold">Front-End Web dengan ReactJS</h3>
      <hr />
      <div class="w-[800px] h-[498px] p-5">
        <iframe
          class="w-full h-full"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        >
        </iframe>
      </div>
      <a
        href="#"
        class="absolute top-[-10px] modal-action btn btn-sm btn-circle right-2 flex justify-center items-center bg-transparent border-none text-black hover:text-white"
      >
        <p class="">X</p>
      </a>
    </div>
  </div>

  <Footer />
</template>

<script>
import Navbar from "@/components/molecule/Navbar.vue";
import Footer from "@/components/molecule/Footer.vue";
import CardModule from "@/components/molecule/CardKetModul.vue";
import CardReview from "@/components/molecule/CardReview.vue";
import RatingNullIcon from "@/assets/icons/ratingNull.svg";
import RatingSolidIcon from "@/assets/icons/ratingSolid.svg";

export default {
  name: "DetailVideoBelajar",
  components: {
    Navbar,
    Footer,
    CardModule,
    CardReview,
  },
  data: () => ({
    shownModal: false,
    window: {
      width: 0,
      height: 0,
    },
    RatingNullIcon,
    RatingSolidIcon,
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    goBack() {
      return this.$router.push("/module-belajar");
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>
