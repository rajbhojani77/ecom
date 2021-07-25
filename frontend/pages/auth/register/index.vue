<template>
  <div>
    <auth-register />
  </div>
</template>

<script>
export default {
  middleware: "notAuthenticated"
};
</script>

<style></style>
