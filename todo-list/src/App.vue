<template>
  <h1>Todo List</h1>
    <p><button type="button" @click="addTask" class="btn btn-primary">add task</button></p>

    <h2>未完成</h2>
    <ul class="not done">
      <li v-for="task in notDoneTaskList" :key="task.id">
        <input type="checkbox" v-model="task.done">
        <input type="text" v-model="task.content" class="content"> <a href="#" @click.stop.prevent="showDeleteConfirm(task.id)">x</a>
      </li>
    </ul>

    <h2>完成</h2>
    <ul class="done">
      <li v-for="task in doneTaskList" :key="task.id">
        <input type="checkbox" v-model="task.done">
        <label><del>{{ task.content }}</del></label> <a href="#" @click.stop.prevent="showDeleteConfirm(task.id)">x</a>

      </li>
    </ul>
</template>

<script>
import { v1 as uuidv1 } from 'uuid'

export default {
  data () {
    return {
      taskList: []
    }
  },
  computed: {
    notDoneTaskList () {
      return this.taskList.filter((task, index) => {
        return !task.done
      })
    },
    doneTaskList () {
      return this.taskList.filter((task, index) => {
        return task.done
      })
    }
  },
  methods: {
    addTask () {
      const newTask = {
        id: uuidv1(),
        content: '',
        done: false
      }

      this.taskList.unshift(newTask)

      // render 後，滑鼠游標在 taskList 的第一個
      this.$nextTick(() => {
        // 選取 taskList 的第一個元素，並聚焦在其 content 欄位
        document.querySelector('ul.not.done > li > input.content').focus()
      })
    },
    showDeleteConfirm (id) {
      const deleteTask = confirm('Are you sure to delete it ?')

      if (deleteTask) {
        // 用 id 尋找元素物件的索引值
        const index = this.taskList.findIndex(t => t.id === id)
        // 刪除該索引值的元素
        this.taskList.splice(index, 1)
      }
    }
  }
}
</script>
