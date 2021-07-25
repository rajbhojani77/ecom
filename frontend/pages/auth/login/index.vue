<template>
  <div>
    <auth-login />
  </div>
</template>

<script>
export default {
  middleware: "notAuthenticated"
};
</script>

<style></style>
