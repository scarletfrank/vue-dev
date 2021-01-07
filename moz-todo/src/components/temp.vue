<template>
<h1>My To-Do List</h1>
<to-do-form @todo-added="addToDo"></to-do-form>
<h2 id="list-summary">{{listSummary}}</h2>
<ul aria-labelledby="list-summary" class="stack-large">
    <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done" :id="item.id" @checkbox-changed="updateDoneStatus(item.id)">
        </to-do-item>
    </li>
</ul>
</template>

<script>
export default {

}
</script>
