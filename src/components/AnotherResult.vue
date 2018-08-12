<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  //props: ['counter']
//   computed: {
//     counter() {
//       return this.$store.getters.doubleCounter;
//     },
//     numberOfClicks() {
//         return this.$store.getters.stringCounter;
//     }
//   }

    // mapGetters returns an object. Here we use the spread operator to blend
    // that object into the one returned by computed. This leaves us free to add our
    // own computed properties.
    // install babel-preset-stage-2 as a dev dependency, and add it to the babelrc to
    // support the spread operator otherwise you will get a compile error.
    computed: {
        ...mapGetters([
            'doubleCounter', 'stringCounter'
        ])
        // other computed properties here
    }
    

};
</script>