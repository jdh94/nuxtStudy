<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <divc class="text-h4">All courses</divc>
      <p class="p.q-mt-sn text-grey-8">
        웹 개발 입문부터 실전까지 학습해보세요!
      </p>
    </div>
    <div class="row q-col-qutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <NuxtLink v-slot="{ navigate }" custom: to="/course/${courseSlug}">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            thumbnail="thumbnail"
            @click="navigate"
          />
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>

<style scoped></style>
