<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { useState } from '../../composables/state'
import GraphPane from '../../components/GraphPane.vue'
import ManualExperience from './experience.vue'

const { renderingTimes } = useState()

function onRender() {
  renderingTimes.value = 1
}
</script>

<template>
  <GraphPane />
  <TresCanvas
    render-mode="manual"
    clear-color="#82DBC5"
    window-size
    @render="onRender"
  >
    <ManualExperience />
  </TresCanvas>
</template>
