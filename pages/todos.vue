<template>
  <ul>
    <li v-for="(todo, idx) in todos" :key="idx">
      <input :checked="todo.done" type="checkbox" @change="toggle(todo)" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  middleware: "todo-auth",
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style lang="scss">
.done {
  text-decoration: line-through;
}
</style>
