<template>
    <div>
        <button class="btn btn-primary" @click="asynchIncrement({by: 2, duration: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asynchDecrement({by: 2, duration: 2000})">Decrement</button>
        <br>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asynchIncrement',
                'asynchDecrement'
            ])
            //...mapMutations(['increment','decrement'])
            // increment() {
            //     // this.$store.state.counter++;
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     // this.$store.state.counter--;
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>