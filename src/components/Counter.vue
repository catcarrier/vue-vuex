<template>
    <div>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
        <br>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations(['increment','decrement']), /* method 4 use mapMutations */
            // increment() {
            //     //this.$emit('updated', 1); /* method 1 using events */
            //     //this.$store.state.counter++; /* method 2 setting state directly */
            //     this.$store.commit('increment'); /* method 3 calling mutators directly */
            // },
            // decrement() {
            //     //this.$emit('updated', -1);
            //     // this.$store.state.counter--;
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>