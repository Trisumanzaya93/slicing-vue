<template>
  <Navbar />
  <div class="font-open">
    <!-- CAROUSEL -->
    <div class="flex items-center justify-center p-28">
      <div class="w-[50%]">
        <p class="text-[48px] font-bold mb-3">Ubah Hidupmu Sekarang Juga</p>
        <p class="text-[20px] leading-7 mb-8">
          Belajar menjadi software engineer secara online/remote selama 3 - 6
          bulan sampai diterima kerja, tanpa bayar di depan (Cicil Setelah
          Kerja).
        </p>
        <button class="w-[155px] h-[46px] bg-[#EF6807] text-white rounded-md">
          Daftar Sekarang
        </button>
      </div>

      <div class="w-[50%] flex justify-center items-center">
        <img
          src="@/assets/images/carosel/01-btpn.e89dd14.svg"
          alt="card"
          height="368"
          width="266"
        />
      </div>
    </div>

    <!-- REKANAN PERUSAHAAN -->
    <div class="bg-[#F3F4F5] flex flex-col justify-center items-center p-10">
      <p class="text-[24px] leading-9 font-semibold mb-2">
        500 lebih lulusan sudah dipercaya di lebih dari 500 perusahaan
      </p>
      <p class="text-[20px] leading-7 mb-10">
        Fazztrack menjamin lulusan mendapat kesempatan membagun karir di
        perusahaan impian.
      </p>
      <div class="w-[90%] flex flex-wrap gap-5">
        <img
          src="@/assets/images/perusahaan/tokopedia.e6def53.svg"
          alt="icon"
        />
        <img src="@/assets/images/perusahaan/mandiri.d9f1f48.png" alt="icon" />
        <img src="@/assets/images/perusahaan/bri.7d466d0.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/jenius.a8270a4.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/flip.851afcc.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/jne.0a48135.svg" alt="icon" />
        <img
          src="@/assets/images/perusahaan/prudential.a23e2d6.svg"
          alt="icon"
        />
        <img src="@/assets/images/perusahaan/molatv.ea61655.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/aia.7ccbb68.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/pintu.eb4a956.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/bibit.7c32a8b.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/stockbit.9979b1a.svg" alt="icon" />
        <img
          src="@/assets/images/perusahaan/alodokter.4f00ccc.svg"
          alt="icon"
        />
        <img
          src="@/assets/images/perusahaan/modalrakyat.5ad39da.svg"
          alt="icon"
        />
        <img src="@/assets/images/perusahaan/bahaso.ad154cd.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/privyid.1b7bbd0.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/sirclo.7d776dd.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/teravin.3f4bae6.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/mitrais.04db949.png" alt="icon" />
        <img src="@/assets/images/perusahaan/gameqoo.90ad1c4.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/grid.7783c53.svg" alt="icon" />
        <img src="@/assets/images/perusahaan/sehati.2039247.png" alt="icon" />
        <img src="@/assets/images/perusahaan/agros.326f1f3.svg" alt="icon" />
        <img
          src="@/assets/images/perusahaan/kontrakhukum.88f8b29.png"
          alt="icon"
        />
      </div>
    </div>

    <!-- TESTIMONI ALUMNI -->
    <div class="flex items-center justify-center w-full p-10">
      <div class="w-[90%] px-[2%]">
        <p
          class="flex items-center text-[24px] font-semibold leading-9 text-[#1F2A36"
        >
          Alumni Fazztrack
        </p>
        <p class="text-[20px] leading-7 text-[#46505C]">
          Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja yang
          sudah mereka ikuti.
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center w-full mb-10">
      <div class="flex w-[90%] justify-center items-center flex-wrap gap-5">
        <CardTestimoni
          :data="item"
          v-for="(item, idx) in testimoni"
          :key="idx"
        />
      </div>
    </div>

    <!-- PILIHAN BOOTCAMP -->
    <div class="flex flex-col items-center justify-center">
      <p class="text-[24px] leading-9 font-semibold text-[#1F2A36] mb-3">
        Pilihan Bootcamp Fazztrack
      </p>
      <p class="text-[20px] leading-7">
        Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun untuk
        kamu siap bekerja.
      </p>

      <div
        class="w-[90%] flex justify-center items-center flex-wrap gap-5 my-16"
      >
        <CardPilihanBootcamp
          :data="item"
          v-for="(item, idx) in pilihanBootcamp"
          :key="idx"
        />
      </div>
    </div>

    <!-- KEUNGGULAN BOOTCAMP -->
    <div class="flex flex-col items-center justify-center bg-[#1C417D]">
      <div class="w-[85%] text-white">
        <p class="text-[24px] leading-9 font-semibold mb-3 text-center my-10">
          Keunggulan Bootcamp Fazztrack
        </p>
        <p class="text-[20px] leading-7 text-center">
          Bootcamp Fazztrack akan membimbing kamu menjadi Software Engineer
          profesional sampai di salurkan kerja dengan berbagai keunggulan
          seperti berikut:
        </p>
        <div class="flex flex-wrap items-center justify-center gap-5 my-16">
          <CardKeunggulan
            :data="item"
            v-for="(item, idx) in keunggulan"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/molecule/Navbar.vue";
import CardTestimoni from "@/components/molecule/CardTestimoni.vue";
import CardPilihanBootcamp from "@/components/molecule/CardPilihanBootcamp.vue";
import CardKeunggulan from "@/components/molecule/CardKeunggulan.vue";
import data from "@/utils/data.js";

export default {
  name: "PageHome",
  components: {
    Navbar,
    CardTestimoni,
    CardPilihanBootcamp,
    CardKeunggulan,
  },
  data: () => ({
    testimoni: data.testimoni,
    pilihanBootcamp: data.pilihan,
    keunggulan: data.keunggulan,
  }),
};
</script>
