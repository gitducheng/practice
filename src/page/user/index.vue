<template>
  <div>
  	<firstCarousel></firstCarousel>	
  	<about></about>
  	<secondCarousel></secondCarousel>
  	<design></design>
  	<searchForm></searchForm>
  </div>
</template>

<script>
import firstCarousel from "../carousel/firstCarousel"
import about from "../about/about"
import secondCarousel from "../carousel/secondCarousel"
import design from "../design/design"
import searchForm from "../form/form"

	export default {
		components: {
			firstCarousel,
			about,
			secondCarousel,
			design,
			searchForm
		}
	}
</script>