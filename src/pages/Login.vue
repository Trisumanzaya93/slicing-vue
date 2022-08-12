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
      <form @submit.prevent="handleLogin">
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
          v-model="form.email"
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
          v-model="form.password"
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
        <button tipe="submit" for="my-modal-6" class="w-full bg-orange-500 border-none btn hover:bg-orange-500 focus:bg-orange-500">masuk</button>
      </div>
      </form>
      <h3 class="mt-4 text-center text-xs lg:text-sm">Atau Masuk Menggunakan</h3>
      <div class="mt-4 px-11">
        <button
          class="w-full text-black bg-white border-gray-200 btn hover:bg-gray-100 hover:border-none focus:bg-grey-200"
        >
          Goggle
        </button>
      </div>
    </div>
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal w-full h-full sm:modal-bottom, sm:modal-midle">
  <div class="w-full mx-10 bg-white px-10 pb-10 rounded-2xl pt-10 sm:modal-box " v-if="user.email">
    <h3 class="font-bold text-lg">User berhasil login!</h3>
    <p class="py-4">{{user.email}}</p>
    <div class="w-full flex justify-center my-10">
    <img :src="user.profilePicture" class=" h-52" alt="">
    </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn bg-orange-500">kembali</label>
    </div>
  </div>
  <div class="w-full mx-10 bg-white px-10 pb-10 rounded-2xl  sm:modal-box " v-else>
    <div class="flex flex-col items-center my-10">
      <div class="w-24 h-24 rounded-full border-8 border-red-600 flex justify-center items-center mb-10">
        <h3 class="text-6xl font-bold text-red-600">X</h3>
      </div>
    <h3 class="text-sm font-bold sm:text-lg">{{message}}</h3>
    </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn bg-orange-500">kembali</label>
    </div>
  </div>
</div>
</div>
  
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "LoginPage",
  data() {
    return {
      modal:false,
      message:"",
      user:{},
      form:{
        email:"",
        password:""
      }
    }
  },
  methods:{
    ...mapActions({
      login:"auth/login"
    }),
    async handleLogin(){
      try {
        if(this.form.email===""){
          document.getElementById('my-modal-6').checked = true;
          return this.message = "email belum terisi"
        }
        if(this.form.password===""){
          document.getElementById('my-modal-6').checked = true;
          return this.message = "password belum terisi"
        }
        const result = await this.login(this.form)
        this.user=result
        console.log(this.user);
        this.message=""
        document.getElementById('my-modal-6').checked = true;

      } catch (error) {
        console.log(error.message);
        this.message=error.message
        this.user={}
        document.getElementById('my-modal-6').checked = true;
        
      }
    }
  }
};
</script>
