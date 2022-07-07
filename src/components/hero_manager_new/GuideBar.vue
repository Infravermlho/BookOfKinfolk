<template>
    <div class="navbar">
        <div class="inputsContainer">
            <router-link 
                to="/hero_management"
                style="text-decoration: none"
            >
            <Button 
                    label = "Exit"
                    class="custombtn p-button-raised p-button-danger p-button-text"
                />
            </router-link>
            <Button 
                    label = "Back"
                    class="custombtn p-button-text p-button-plain"
                />
            <Button 
                    label = "Continue"
                    class="custombtn p-button-raised p-button-primary p-button-text"
                />
        </div>
    </div>
</template>

<script>
export default({
    props: {    
        enableContinue: {
            type: Boolean,
            default: true    
        },
        enableBack: {
            type: Boolean,
            default: true
        },
        enableExit: {
            type: Boolean,
            default: true
        }
    },
})
</script>

<style scoped>
.navbar {
    border-top: 2px dotted silver;
}
.inputsContainer {
    display: flex;
    justify-content: space-around;
}
.custombtn {
    margin-top: 4px;
    color:black;
}
</style>