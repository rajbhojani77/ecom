<template>
  <div>
    <home />
  </div>
</template>

<script>
import common from "@/mixins/common.js";
export default {
  mixins: [common],
    middleware: "isAuthenticated",
};
</script>
