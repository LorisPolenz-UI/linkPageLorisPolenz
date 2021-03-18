<template>
    <div>
        Heöllo {{data}}
    </div>
</template>

<script>
    export default {
        name: "link-node", 
        data() {
            return {
                links: [
                    {
                        name: "GitHub",
                        url: "https://github.com/LorisPolenz-UI"
                    },
                    {
                        name: "Twitter",
                        url: "https://twitter.com/LorisPolenz"
                    },
                    {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/loris-polenz/"
                    },
                    {
                        name: "Traily",
                        url: "https://www.traily.ch"
                    },
                    {
                        name: "Contact Me",
                        url: "https://contact.lorispolenz.com"
                    },
                    
                ]
            }
        }, 
        computed() {
            
        }
    }
</script>