<template>
    <div>
        <button :class="`btn ${whidth} ${height} ${color} ${border} ${rounded}` ">{{title}}</button>
    </div>
</template>

<script>
export default {
    name:"ButtonComponent",
    props:["width","height","color","border","title","rounded"]
}
</script>