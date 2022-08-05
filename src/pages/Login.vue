<template>
  <div class="w-screen h-screen flex justify-center mt-14">
    <div class="w-1/2 border-2 rounded-md">
      <div class="items-center flex flex-col">
        <div class="mt-16">
          <img src="@/assets/fazztrack.svg" alt="" />
        </div>
        <h3 class="text-2xl mt-4">Selamat Datang</h3>
        <h3 class="text-lg mt-1">
          belum punya akun Fazztrack ?
          <a href="" class="text-orange-400">Daftar disini</a>
        </h3>
      </div>
      <div class="ml-10 flex flex-col mr-10">
        <h3>
          <h6 class="text-orange-400">&#42;</h6>
          Email
        </h3>
        <input
          class="border-2 rounded-sm border-gray-200 h-10 pl-4 mt-3"
          placeholder="email"
        />
      </div>
      <div class="ml-10 flex flex-col mr-10">
        <h3>
          <h6 class="text-orange-400">&#42;</h6>
          Password
        </h3>
        <input
          class="border-2 rounded-sm border-gray-200 h-10 pl-4 mt-3"
          placeholder="password"
        />
      </div>
      <div class="flex flex-row justify-between px-11 mt-5">
        <div class="flex flex-row">
        <input type="checkbox">
        <h3 class="ml-3">Ingat Akun Saya</h3>
        </div>
        <h3>Lupa Password</h3>
      </div>
      <div class="px-11 mt-4">
        <button class="btn bg-orange-500 border-none hover:bg-orange-500 focus:bg-orange-500 w-full">Masuk</button>
      </div>
      <h3 class="text-center mt-4">Atau Masuk Menggunakan</h3>
      <div class="px-11 mt-4">
        <button class="btn bg-white text-black border-gray-200 hover:bg-gray-100 hover:border-none  focus:bg-grey-200 w-full">Goggle</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  components:{}
};
</script>
