<template>
<img alt="Vue logo" src="./assets/logo.png">
<div id="app">
    <h1>My To-Do List</h1>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <h2 id="list-summary">{{listSummary}}</h2>
    <ul aria-labelledby="list-summary" class="stack-large">
        <li v-for="item in ToDoItems" :key="item.id">
            <to-do-item :label="item.label" :done="item.done" :id="item.id" @checkbox-changed="updateDoneStatus(item.id)">
            </to-do-item>
        </li>
    </ul>
    <mark-editor></mark-editor>
    <fetch-item></fetch-item>
</div>
</template>

<script>
//    <mark-editor></mark-editor>
//    <fetch-item></fetch-item>

//import HelloWorld from './components/HelloWorld.vue'
import FetchItem from './components/FetchItem.vue'
import MarkEditor from './components/MarkEditor.vue';
import ToDoItem from './components/ToDoItem.vue';
import ToDoForm from './components/ToDoForm.vue';
import uniqueId from 'lodash.uniqueid'

export default {
    name: 'app',
    components: {
        MarkEditor,
        ToDoItem,
        ToDoForm,
        FetchItem
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
    },
    methods: {
        addToDo(toDoLabel) { // pick up the data from todo-form
            //console.log('To-do added:', toDoLabel);
            this.ToDoItems.push({
                id: uniqueId('todo-'),
                label: toDoLabel,
                done: false
            })
        },
        updateDoneStatus(toDoId) {
            const toDoToUpdate = this.ToDoItems.find(item => item.id === toDoId)
            toDoToUpdate.done = !toDoToUpdate.done
        }
    },
    computed: {
        listSummary() {
            const numberFinishedItems = this.ToDoItems.filter(item => item.done).length;
            return `${numberFinishedItems} out of ${this.ToDoItems.length} items completed`
        }
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
