<template>
  <div
    class="w-[539px] h-[220px] flex border font-open rounded-md hover:shadow-md transform transition duration-500 hover:scale-105"
  >
    <img
      :src="require(`@/assets/images/pilihan_botcamp/${data.foto}`)"
      alt="foro bootcamp"
      class="w-[150] h-full"
    />
    <div class="flex flex-col justify-around p-5">
      <p class="text-[24px] font-semibold leading-9 text-[#1F2A36]">
        {{ data.name }}
      </p>
      <p>{{ data.description }}</p>

      <router-link to="#" class="flex items-center text-[#2557A7] font-bold"
        >Lihat kurikulum
        <img
          :src="arrowRigth"
          width="20"
          height="20"
          class="ml-2 text-red-600"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import arrowRigth from "@/assets/icons/arrowRigth.svg";

export default {
  name: "ComponentCardPilihan",
  props: ["data"],
  components: {},
  data: () => ({
    arrowRigth,
  }),
};
</script>
