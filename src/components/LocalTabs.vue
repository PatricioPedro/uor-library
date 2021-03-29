<template>
  <div>
    <q-tabs
        indicator-color="transparent"
        inline-label
        active-color="primary"
        no-caps
        class="bg-white text-grey-8"
    >
    <q-route-tab
        v-for="(option, index) in options"
        :key="index"
        :label="option.label"
        class="q-mx-md"
        :to="option.to"
        :icon="option.icon"
    />
    </q-tabs>
  </div>
</template>

<script>
export default {
  props: {
    options: [Array, Object]
  }
}
</script>

<style>

</style>
