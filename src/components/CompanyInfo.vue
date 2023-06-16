<template>
    <div>
        <div class="company__wrapper">
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
        </div>
    </div>
        <div class="company__wrapper-two">
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

    .company__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 150px;
    }
    .company__wrapper-two {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
    }
    .company__container {
        display: flex;
        flex-direction: column;
        padding: 0px 15px 15px 15px;
        max-width: 800px;
        text-align: justify;
        text-indent: 30px;
        align-items: start;

            & div::first-letter {
            text-transform: uppercase;
        }
    }
    .company__container-two {
        display: flex;
        flex-direction: column;
        padding: 0px 15px 15px 15px;
        max-width: 800px;
        text-align: justify;
        text-indent: 30px;
        align-items: end;

            & div::first-letter {
            text-transform: uppercase;
        }
    }
    .company__img {
        margin-left: 25px;
        margin-right: 15px;
        -webkit-box-shadow: 0px 0px 9px 15px rgba(151, 219, 124, 0.2);
        -moz-box-shadow: 0px 0px 9px 15px rgba(151, 219, 124, 0.2);
        box-shadow: 0px 0px 9px 15px rgba(151, 219, 124, 0.2);
        
        & img {
            width: 330px;
            height: 500px;
        }
    }
    .company__img-two {
        margin-right: 25px;
        margin-left: 15px;
        -webkit-box-shadow: 0px 0px 9px 17px rgba(85, 174, 206, 0.2);
        -moz-box-shadow: 0px 0px 9px 17px rgba(85, 174, 206, 0.2);
        box-shadow: 0px 0px 9px 17px rgba(85, 174, 206, 0.2);

        & img {
            width: 330px;
            height: 500px;
        }
    }
    .company__item {
        display: flex;
        flex-direction: column;
        padding: 7px;
        font-family: $font-family;
    }

    @media (max-width: 767px) {
    .company__item {
        padding: 3px;
        line-height: 0.9;
    }
}
    .company__item-two {
        display: flex;
        flex-direction: column;
        padding: 7px;
        font-family: $font-family;
    }

    @media (max-width: 767px) {
    .company__item-two {
        padding: 3px;
        line-height: 0.9;
    }
}
</style>