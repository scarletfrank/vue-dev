<template>
<img alt="Vue logo" src="./assets/logo.png">
<div id="app">
    <ul>
        <li v-for="item in ToDoItems" :key="item.id">
            <to-do-item :label="item.label" :done="item.isDone" :id="item.id"></to-do-item>
        </li>
    </ul>

    <mark-editor></mark-editor>

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MarkEditor from './components/MarkEditor.vue';
import ToDoItem from './components/ToDoItem.vue';
import uniqueId from 'lodash.uniqueid'

export default {
    name: 'app',
    components: {
        MarkEditor,
        ToDoItem
    },
    data() {
        return {
            ToDoItems: [{
                    id: uniqueId('todo-'),
                    label: 'Learn Vue',
                    done: false
                },
                {
                    id: uniqueId('todo-'),
                    label: 'Create a Vue project with the CLI',
                    done: true
                },
                {
                    id: uniqueId('todo-'),
                    label: 'Have fun',
                    done: true
                },
                {
                    id: uniqueId('todo-'),
                    label: 'Create a to-do list',
                    done: false
                }
            ]
        };
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
