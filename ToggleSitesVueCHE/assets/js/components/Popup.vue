<template>
<div class="wrapper">
    <h1 class="title"> Simple Vue Toggle Sites</h1>
    <div class="buttons">
        <button type="button" class="state-off" :class="{'is-active' : !active}" @click="setActive(false)">Off</button>
        <button type="button" class="state-on" :class="{'is-active' : active}" @click="setActive(true)">On</button>
    </div>
    <div class="sites">
        <p> List your websites below, one per line</p>
        <textarea v-model="list" autocapitalize="off" cols="30" rows="10"></textarea>
    </div>
    <button class="state-save" @click="saveList"> Save Site List </button>
</div>

</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            active: true,
            list: "example.com"
        }
    },
    created() {
        chrome.storage.sync.get(['toggleSitesActive', 'toggleSitesList'], (result) => {
            this.active = result.toggleSitesActive
            this.list = result.toggleSitesList
        })
    },
    methods: {
        setActive(active) {
            this.active = active
            console.log(this.active);
            chrome.storage.sync.set({
                toggleSitesActive: active
            }, () => {})
        },
        saveList() {
            chrome.storage.sync.set({
                toggleSitesList: this.list
            }, () => {})
        }
    },
}
</script>