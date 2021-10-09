<template>
    <div class="row justify-between q-mb-md">
        <q-list bordered class="full-width">
            <q-item>
            <q-item-section side>
             <q-avatar size="100px">
                <q-img src="~assets/FB_IMG_16180506231003844.jpg"/>
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-subtitle2">
              <q-item-label class="text-grey-8">
                {{ info.restaurant }}
              </q-item-label>
                <q-item-label class="full-width q-my-sm text-grey-8">
                    <q-icon color="grey-8" name="location_on"/> {{ info.address }}
                </q-item-label>
              <q-badge class="text-center" color="positive" style="width:58px">
                 Aberto
              </q-badge>
                <div v-if="$q.screen.xs" class="text-grey">
                     <q-item-label caption class="full-width q-my-sm">
                        <q-icon color="grey-8" name="phone"/>{{ info.telefone1 }}
                    </q-item-label>
                    <q-item-label caption class="full-width q-my-sm">
                        <q-icon color="grey-8" name="phone"/> {{ info.telefone2 }}
                    </q-item-label>
                    <q-item-label caption class="full-width q-my-sm">
                        <q-icon color="grey-8" name="email"/> {{ info.email }}
                    </q-item-label>
                </div>
            </q-item-section>
            <q-item-section v-if="!$q.screen.xs" side>
                  <q-item-label class="full-width q-my-sm">
                     <q-icon color="grey-8" name="phone"/>{{ info.telefone1 }}
                </q-item-label>
                <q-item-label class="full-width q-my-sm">
                     <q-icon color="grey-8" name="phone"/> {{ info.telefone2 }}
                </q-item-label>
                <q-item-label class="full-width q-my-sm">
                     <q-icon color="grey-8" name="email"/> {{ info.email }}
                </q-item-label>
            </q-item-section>
        </q-item>
        </q-list>
        <div class="q-my-auto q-mr-sm">
           <slot name="right"></slot>
        </div>
  </div>
</template>

<script>

export default {
  props: {
    info: Object
  }
}
</script>

<style>

</style>
