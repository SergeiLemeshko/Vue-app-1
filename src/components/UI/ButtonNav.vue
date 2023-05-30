<template>
<button class="nav__btns btn">
        <slot></slot>
    </button>


</template>

<script>
export default {
	name: 'button-nav',
}
</script>

<style lang="scss">
    .nav__btns {
        width: 150px;
        height: 40px;
        margin-right: 30px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: Sylfaen;
        font-weight: 500;
        font-size: 0.9em;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        box-shadow: rgba(255,255,255,.5),
                    7px 7px 20px 0px rgba(0,0,0,.1),
                    4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;

        & span {
			color: #FFFFFF;
			letter-spacing: 0.01rem;
		}
    }
    .nav__btns:last-child {
        margin-right: 0px;
    }
    .btn {
        background-color: #5ab4cf;
        background-image: linear-gradient(315deg, #3b9db6 0%, #14d3ec 74%);
        border: none;
        z-index: 1;
    }
    .btn:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-radius: 5px;
        background-color: #0ebfd6;
        background-image: linear-gradient(315deg, #3db6e6 0%, #b9e7e4 74%);
        box-shadow: -7px -7px 20px 0px #fff9,
                    -4px -4px 5px 0px #fff9,
                    7px 7px 20px 0px #0002,
                    4px 4px 5px 0px #0001;
        transition: all 0.3s ease;
    }
    .btn:hover {
        color: #fff;
    }
    .btn:hover:after {
        top: 0;
        height: 100%;
    }
    .btn:active {
        top: 2px;
    }
</style>

