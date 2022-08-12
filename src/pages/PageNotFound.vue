<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen font-open"
  >
    <img
      src="@/assets/icons/error-404.png"
      alt="icon"
      width="200"
      height="200"
      class="mb-10"
    />
    <div class="flex flex-col items-center justify-center">
      <p class="mb-5 font-bold text-7xl text-[#2C3333]">Oops !</p>
      <p class="mb-10 font-semibold text-2xl text-[#2C3333] text-center">
        We can't seem to find the page you're looking for.
      </p>
      <routerLink
        to="/"
        class="w-[100px] h-[40px] bg-orange-600 text-white hover:bg-orange-500 rounded-md flex justify-center items-center font-open text-lg font-semibold p-0"
      >
        HOME
      </routerLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
