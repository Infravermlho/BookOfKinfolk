<template>
    <Button 
                    v-for="item in items"
                    :key = item[id]
                    :label = item[label]
                    class="p-button-raised p-button-text"
                    :class="{selected: item[id] === selectedID}"
                    style="display: block; margin-top: 6px; color:black; padding: 4px;"
                    @mouseover="hover(item[id])"
                    @click="click(item[id])"
    />
</template>

<script>
import { ref } from 'vue'

export default({
    emits: ['click', 'hover'],
    props: {    
        items: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
    },

    setup (props, ctx) {
        const selectedID = ref(-1)

        const click = (id) => {
            ctx.emit('click', id)
            selectedID.value = id
        }
        const hover = (id) => {
            ctx.emit('hover', id)
        }

        return {
            click,
            hover,
            selectedID
        }
    }
})
</script>

<style scoped>
.selected  :deep(.p-button-label){
    color:rgb(179, 32, 216);
    padding: 8px;
    transition: padding .3s;
}
</style>