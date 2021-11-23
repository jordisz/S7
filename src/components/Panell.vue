<template>
    <div class="panell">


<!-- modals -->
    <div class="modal fade" id="paginesModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-body">
                Indiqueu el número de pàgines que tindrà el vostre lloc web.
            </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="idiomesModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

            <div class="modal-body">
                Indiqueu el número d'idiomes que tindrà el vostre lloc web.
            </div>

            </div>
        </div>
    </div>

<!-- panell -->
    <div class="fila">
        <label>Número de pàgines</label>
        <QuantityInput v-on:quantityChanged="changePagines"/>
        <button type="button" class="info-button" data-bs-toggle="modal" data-bs-target="#paginesModal">
        <font-awesome-icon icon="question-circle" />
        </button>

    </div>
    <div class="fila">
        <label>Número d'idiomes</label>
        <QuantityInput v-on:quantityChanged="changeIdiomes"/>
    <button type="button" class="info-button" data-bs-toggle="modal" data-bs-target="#idiomesModal">
        <font-awesome-icon icon="question-circle" />
        </button>

    </div>
  </div>
</template>

<script>
import QuantityInput from './QuantityInput.vue'

export default {
    name: "Panell",
    components: {
        QuantityInput
    },
    data() {
        return {
            idiomes: 1,
            pagines: 1
        }
    },
    methods: {
        changePagines(val) {
            this.pagines = val;
            this.$emit('paginesChanged', this.pagines);
        },
        changeIdiomes(val) {
            this.idiomes = val;
            this.$emit('idiomesChanged', this.idiomes);
        }
    }
}
</script>

<style>
    .panell {
        width: 360px;
        border: 2px solid black;
        border-radius: 15px;
        padding: 2em 1.5em 1em 1.5em;
        margin: 1em 0 1em .5em;
    }
    .fila {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }
    .fila label {
        width: 18ch;
    }
    .info-button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        font-size: 1.25rem;
        color: gray;
        padding-bottom: -2px;
        padding-left: 3px;
    }
    
    .modal-content {
        transform: translate(0px, 280px);
        border: 2px solid black;
        border-radius: 10px;
    }
    @media(min-width: 1000px) {
        .modal-content {
            transform: translate(-140px, 280px);
        }
    }
</style>