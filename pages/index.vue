<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <divc class="text-h4">All courses</divc>
      <p class="p.q-mt-sn text-grey-8">
          웹 개발 입문부터 실전까지 학습해보세요!
      </p>
    </div>
    <div class="row q-col-qutter-lg">
        <div v-for="n in 3" :key="n" class="col-12 col-md-4 col-sm-6">
          <CourseCard></CourseCard>
        </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>