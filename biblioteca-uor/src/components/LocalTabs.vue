<template>
  <div>
    <q-tabs
      class="bg-primary text-grey-4"
        indicator-color="transparent"
        active-color="white"
        inline-label
      no-caps
      align="right"
    >
    <q-route-tab
        v-for="(option, index) in options"
        :key="index"
        :label="option.label"
        :icon="option.icon"
        class="q-mx-md"
        :to="option.to"
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
.q-tab__label {
    font-size: 11px;
    line-height: 1.715em;
    font-weight: 600;
  }
  .q-tab__icon {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
</style>
