<template>
  <div class="font-open lg:w-[320px] w-full h-[500px] border p-5">
    <p class="text-xl text-[#1F2A36] font-semibold leading-7 pb-3">
      Keterangan Modul
    </p>
    <hr />

    <div class="flex items-center justify-between w-full py-3">
      <div class="flex items-center justify-between w-auto h-auto">
        <img
          :src="videoIcon"
          alt="icon"
          width="20"
          height="20"
          class="inline-block mr-5"
        />
        <p class="text-sm font-open text-[#8D959E]">Jumlah Video</p>
      </div>
      <p class="text-sm font-open font-semibold text-[#46505C]">1 video</p>
    </div>

    <div class="flex items-center justify-between w-full py-3">
      <div class="flex items-center w-auto h-auto">
        <img
          :src="watchIcon"
          alt="icon"
          width="20"
          height="20"
          class="inline-block mr-5"
        />
        <p class="text-sm font-open text-[#8D959E]">Durasi Video</p>
      </div>
      <p class="text-sm font-open font-semibold text-[#46505C]">02:22:01</p>
    </div>

    <div class="flex items-center justify-between w-full py-3">
      <div class="flex items-center w-auto h-auto">
        <img
          :src="userIcon"
          alt="icon"
          width="20"
          height="20"
          class="inline-block mr-5"
        />
        <p class="text-sm font-open text-[#8D959E]">Pemateri</p>
      </div>
      <p class="text-sm font-open font-semibold text-[#46505C]">Fazztrack</p>
    </div>

    <div class="flex items-center justify-between w-full py-3">
      <div class="flex items-center w-auto h-auto">
        <img
          :src="academicIcon"
          alt="icon"
          width="20"
          height="20"
          class="inline-block mr-5"
        />
        <p class="text-sm font-open text-[#8D959E]">Level</p>
      </div>
      <p class="text-sm font-open font-semibold text-[#46505C]">Basic</p>
    </div>

    <div class="flex items-center justify-between w-full py-3">
      <div class="flex items-center w-auto h-auto">
        <img
          :src="ratingOutlineIcon"
          alt="icon"
          width="20"
          height="20"
          class="inline-block mr-5"
        />
        <p class="text-sm font-open text-[#8D959E]">Rating</p>
      </div>
      <div class="flex items-center justify-center">
        <img :src="ratingSolidIcon" alt="icon" height="20" width="20" />
        <img :src="ratingSolidIcon" alt="icon" height="20" width="20" />
        <img :src="ratingSolidIcon" alt="icon" height="20" width="20" />
        <img :src="ratingSolidIcon" alt="icon" height="20" width="20" />
        <img :src="ratingSolidIcon" alt="icon" height="20" width="20" />
      </div>
    </div>
    <hr class="mb-5" />
    <div class="flex items-center justify-between w-full">
      <p class="text-sm font-open text-[#8D959E]">Harga</p>
      <p class="text-sm font-open font-bold text-[#EF6807]">Gratis</p>
    </div>
    <routerLink to="/login" class="btn btn-outline w-full h-[46px] my-5"
      >Masuk</routerLink
    >
    <routerLink
      to="/register"
      class="btn w-full h-[46px] border btn-primary text-white rounded-md"
    >
      Daftar
    </routerLink>
  </div>
</template>

<script>
import videoIcon from "@/assets/icons/video.svg";
import watchIcon from "@/assets/icons/watch.svg";
import userIcon from "@/assets/icons/user.svg";
import academicIcon from "@/assets/icons/academic.svg";
import ratingOutlineIcon from "@/assets/icons/ratingOutline.svg";
import ratingSolidIcon from "@/assets/icons/ratingSolid.svg";

export default {
  name: "ComponentCardKetModul",
  data: () => ({
    videoIcon,
    watchIcon,
    userIcon,
    academicIcon,
    ratingOutlineIcon,
    ratingSolidIcon,
  }),
};
</script>
