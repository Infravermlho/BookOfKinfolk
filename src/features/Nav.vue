<template>
    <div>
        <h5>Basic</h5>
        <ToggleButton v-model="checked1" onIcon="pi pi-check" offIcon="pi pi-times" />

        <h5>Customized</h5>
        <ToggleButton v-model="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const checked1 = ref(false);
        const checked2 = ref(true);

        return { checked1, checked2 }
    }
}
</script>