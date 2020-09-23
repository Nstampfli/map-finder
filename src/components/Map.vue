<template >
<div class="map">
  <GmapMap
    :center="{lat: this.$store.state.lat, lng: this.$store.state.lng}"
    :zoom="12"
    map-type-id="terrain"
    style="width: 80%; max-width:900px; height: 450px"
  >
    <GmapMarker
        label="♠"
        :position="{
          lat: this.$store.state.lat,
          lng: this.$store.state.lng,
        }"
    />
  </GmapMap>
  <div class="map__infos">
    <p class="map__info"><span>Adresse : </span>  {{this.$store.state.adress}}  </p>
    <p class="map__info"><span>Latitude : </span> {{this.$store.state.lat}} </p>
    <p class="map__info"><span>Longitude : </span>  {{this.$store.state.lng}} </p>
  </div>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
.map{
  margin-top: 60px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__infos{
    margin-top: 12px;
  }
  &__info{
    margin: 4px 0px;
      span{
        font-weight: bold;;
      }
    }
}
</style>
