<template>
  <div>
  <div class="timeline">
      	Timeline:
        <ul>
        	<li v-for="e in events" v-bind:key="title" >
          	{{e.title}} - {{e.summary}}
          </li>
        </ul>
  		</div>
  </div>
</template>
<script>
export default {
  props: {'events': Array },
  data() {
    return {
      eventList: []
    }
  },
  mounted: function () {
    this.eventList = this.events;
    console.log(this.events);
  }
}
</script>
<style scoped>
</style>
