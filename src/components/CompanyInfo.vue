<template>
    <div class="company">
        <div class="company__img">
            <img src="@/assets/images/6.jpg" alt="About company">
        </div>
        <div class="company__container">
            <div v-for="item in aboutCompany" class="company__item"
                :key="item.id"
                :company="item">
                <div>{{ item.body }}</div>
            </div>
        </div>
        <div class="company__img-two">
            <img src="@/assets/images/7.jpg" alt="About company">
        </div>
        <div class="company__container-two">
            <div v-for="item in aboutCompany" class="company__item-two"
                :key="item.id"
                :company="item">
                <div>{{ item.body }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    name: 'CompanyInfo',
data() {
    return {

	}
},
    methods: {
        ...mapActions({
            getInfoAboutCompany: 'company/getInfoAboutCompany',			
        }),
        ...mapMutations({
            setAboutCompany: 'company/setAboutCompany',
        }),
    },
	computed: {
		...mapState({
			aboutCompany: state => state.company.aboutCompany,
		}),
		...mapGetters({
			aboutCompany: 'company/aboutCompany',
		}),
	},
    mounted() {
        this.getInfoAboutCompany();
    },
}
</script>

<style scoped lang="scss">
    $font: 1.7em;
    $font-family: Sylfaen;

    .company__img {
        position: absolute;
        margin: 170px 15px 0px 145px;
        
        & img {
            width: 330px;
            height: 500px;
        }
    }
    .company__container {
        position: absolute;
        padding: 0px 15px 15px 15px;
        margin: 170px 15px 0px 500px;
        max-width: 800px;
        text-align: justify;
        text-indent: 30px;

            & div::first-letter {
            text-transform: uppercase;
        }
    }
    .company__item {
        display: flex;
        flex-direction: column;
        padding: 7px;
        font-family: $font-family;
    }

    .company__img-two {
        position: absolute;
        margin: 770px 15px 0px 945px;

        & img {
            width: 330px;
            height: 500px;
        }
    }
    .company__container-two {
        position: absolute;
        padding: 0px 15px 15px 15px;
        margin: 770px 15px 0px 120px;
        max-width: 800px;
        text-align: justify;
        text-indent: 30px;

            & div::first-letter {
            text-transform: uppercase;
        }
    }
    .company__item-two {
        display: flex;
        flex-direction: column;
        padding: 7px;
        font-family: $font-family;
    }

</style>