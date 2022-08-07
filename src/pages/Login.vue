<template>
  <div class="flex justify-center w-screen h-screen mt-14">
    <div class="w-1/2 border-2 rounded-md">
      <div class="flex flex-col items-center">
        <div class="mt-16">
          <img src="@/assets/fazztrack.svg" alt="" />
        </div>
        <h3 class="mt-4 text-2xl">Selamat Datang</h3>
        <h3 class="mt-1 text-lg">
          belum punya akun Fazztrack ?
          <routerLink to="/register" class="text-orange-400"
            >Daftar disini</routerLink
          >
        </h3>
      </div>
      <div class="flex flex-col ml-10 mr-10">
        <h3>
          <h6 class="text-orange-400">&#42;</h6>
          Email
        </h3>
        <input
          class="h-10 pl-4 mt-3 border-2 border-gray-200 rounded-sm"
          placeholder="email"
        />
      </div>
      <div class="flex flex-col ml-10 mr-10">
        <h3>
          <h6 class="text-orange-400">&#42;</h6>
          Password
        </h3>
        <input
          class="h-10 pl-4 mt-3 border-2 border-gray-200 rounded-sm"
          placeholder="password"
        />
      </div>
      <div class="flex flex-row justify-between mt-5 px-11">
        <div class="flex flex-row">
          <input type="checkbox" />
          <h3 class="ml-3">Ingat Akun Saya</h3>
        </div>
        <h3>Lupa Password</h3>
      </div>
      <div class="mt-4 px-11">
        <routerLink
          to="/"
          class="w-full bg-orange-500 border-none btn hover:bg-orange-500 focus:bg-orange-500"
          >Masuk</routerLink
        >
      </div>
      <h3 class="mt-4 text-center">Atau Masuk Menggunakan</h3>
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
