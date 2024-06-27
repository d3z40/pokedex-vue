<script setup>
import { onMounted, ref } from 'vue';

    let URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon';

    let pokemons = ref([]);

    let carregamento = ref(true);

    let termoFiltragem = ref('');

    onMounted(async () => {
        for(let i = 1; i <= 151; i++) {
            let request = await fetch(`${URL_POKEAPI}/${i}`);
            let pokemon = await request.json();
            pokemons.value.push(pokemon);
        }

        carregamento.value = false;
    });

    function filtrar() {
        return pokemons.value.filter(obj => obj.name.includes(termoFiltragem.value.toLocaleLowerCase()));
    };
</script>

<template>
    <div class="carregamento" v-if="carregamento">
        <img src="../complements/carregamento.gif" alt="">
    </div>

    <main class="container" v-if="!carregamento">
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="Qual Pokémon você esta procurando?" class="form-control pesquisa" v-model="termoFiltragem">

                <p v-if="filtrar().length == 0">Não foi encontrado nenhum Pokémon.</p>
                <p v-else-if="filtrar().length == 1">Foi encontrado apenas um pokémon.</p>
                <p v-else>Foram encontrados {{ filtrar().length }} Pokémons.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="pokemon in filtrar()">
                <div class="card" :class="pokemon.types[0].type.name">
                    <img :src="pokemon.sprites.other.home.front_default" alt="">
                    <p>{{ pokemon.name }}</p>
                </div>
            </div>
        </div>
    </main>
</template>