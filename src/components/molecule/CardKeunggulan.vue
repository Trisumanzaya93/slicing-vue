<template>
  <div
    class="w-[352px] h-[372px] flex flex-col justify-between items-center border font-open rounded-lg bg-white hover:shadow-md transform transition duration-500 hover:scale-105 p-5 text-black"
  >
    <img
      :src="require(`@/assets/images/keunggulan-botcamp/${data.icon}`)"
      alt="foro bootcamp"
      width="100"
      height="100"
    />
    <p class="text-[20px] leading-9 text-center">
      {{ data.name }}
    </p>

    <div class="w-[80%] text-center mb-1">
      <p class="text-sm text-[#46505C]">{{ data.description }}</p>
    </div>

    <router-link
      to="#"
      class="flex items-center text-center text-[#EF6807] font-bold"
      >{{ data.link }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ComponentCardPilihan",
  props: ["data"],
};
</script>
