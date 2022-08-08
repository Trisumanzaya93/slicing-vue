<template>
  <div class="flex justify-center w-screen h-screen my-14">
    <div class="w-10/12 h-max border-2 rounded-md pb-10 lg:w-1/2">
      <div class="flex flex-col items-center">
        <div class="mt-16">
          <img src="@/assets/fazztrack.svg" alt="" />
        </div>
        <h3 class="mt-4 text-sm lg:text-2xl">Selamat Datang</h3>
        <h3 class="mt-1 text-xs lg:text-lg">
          belum punya akun Fazztrack ?
          <routerLink to="/register" class="text-orange-400"
            >Daftar disini</routerLink
          >
        </h3>
      </div>
      <div class="flex flex-col ml-10 mr-10">
        <div class="flex items-center">
          <h6 class="text-orange-400 mr-3">&#42;</h6>
        <h3 class="mt-1 text-xs lg:text-lg">
          Email
        </h3>
        </div>
        <input
          class="h-7 pl-4 mt-3  border-2 border-gray-200 rounded-sm placeholder:text-xs lg:h-10"
          placeholder="email"
        />
      </div>
      <div class="flex flex-col ml-10 mr-10 mt-5">
        <div class="flex items-center">
          <h6 class="text-orange-400 mr-3">&#42;</h6>
        <h3 class="mt-1 text-xs lg:text-lg">
          Password
        </h3>
        </div>
        <input
          class="h-7 pl-4 mt-3  border-2 border-gray-200 rounded-sm placeholder:text-xs lg:h-10"
          placeholder="password"
        />
      </div>
      <div class="flex flex-row justify-between mt-5 px-11">
        <div class="flex items-center">
          <input type="checkbox" />
          <h3 class="ml-3 text-xs lg:text-sm">Ingat Akun Saya</h3>
        </div>
        <h3 class="text-xs lg:text-sm">Lupa Password</h3>
      </div>
      <div class="mt-4 px-11">
        <routerLink
          to="/"
          class="w-full bg-orange-500 border-none btn hover:bg-orange-500 focus:bg-orange-500"
          >Masuk</routerLink
        >
      </div>
      <h3 class="mt-4 text-center text-xs lg:text-sm">Atau Masuk Menggunakan</h3>
      <div class="mt-4 px-11">
        <button
          class="w-full text-black bg-white border-gray-200 btn hover:bg-gray-100 hover:border-none focus:bg-grey-200"
        >
          Goggle
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  components: {},
};
</script>
