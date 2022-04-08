<template > 
<q-layout style="background-color: #1a1a1a; height: 790px">
    <div style="background-color: #1a1a1a; color:white; margin: -50px 0 -10px 0;">
    <h4 style="padding: 20px 0 0 20px;">Employee List</h4>
    <q-markup-table :separator="separator" flat bordered style="padding: 10px; background-color: #1a1a1a; margin: 0 50px 0 50px;">
      <thead style="background-color: #59b984; color: white;">
        <tr>
          <th class="text-left">Status</th>
          <th class="text-left">Employee ID</th>
          <th class="text-right">Employeee Name</th>
          <th class="text-right">Department</th>
          <th class="text-right">Position</th>
          <th class="text-right">Gender</th>
          <th class="text-right">Action</th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" :key="todo._id" style="background-color: #242424; color: white;">
        <tr>
          <td class="text-left"><q-toggle @click="$todosService.patch(todo._id, {completed: !todo.completed})" :modelValue="todo.completed" /></td>
          <td class="text-left" :class="{  ' text-green':  todo.completed}"  >{{todo._id}}</td>
          <td class="text-right" :class="{ ' text-green':  todo.completed}">{{todo.title1}}</td>
          <td class="text-right" :class="{ ' text-green':  todo.completed}" @keyup.enter="$todosService.patch(todo._id, {completed: !todo.completed})" :modelValue="todo.completed">{{todo.title2}}</td>
          <td class="text-right" :class="{ ' text-green':  todo.completed}">{{todo.title3}}</td>
          <td class="text-right" :class="{ ' text-green':  todo.completed}">{{todo.title4}}</td>
          <td class="text-right" >
                <q-btn-dropdown
                    class="glossy"
                    style="background-color: #59b984;"
                    label="Account Settings"
                    
                    >
                    <div class="row no-wrap q-pa-md" style="background-color: #242424;" >
                        <div class="column">
                            <div style="color: white;" class="text-h6 q-mb-md">Settings</div>
                        
                        <div class="q-pa-md q-gutter-sm">
                            <q-btn label color="primary" @click="alert = true" round icon="edit"/>
                            <q-dialog v-model="alert">
                            <q-card style="background-color: #242424; color: white;">
                                <q-card-section>
                                <div class="text-h6">Update Employee Data</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
        
                                   
                                            <q-input label-color="white" input-class="text-white" style="width: 400px; padding-bottom: 10px; color" @keyup.enter="editing" v-model="todo.title1" class="col" filled  label="Employee Name"/>
                                            <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color" @keyup.enter="editing" v-model="todo.title2" class="col" filled  label="Department"/>
                                            <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color" @keyup.enter="add" v-model="todo.title3" class="col" filled  label="Position" />
                                             <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color" @keyup.enter="add" v-model="todo.title4" class="col" filled  label="Gender" />
                                            
                                       
                                    
                                </q-card-section>

                                <q-card-actions align="right">
                                <q-btn @click="editing" flat label="Update" color="primary" v-close-popup />
                                </q-card-actions>
                            </q-card>
                            </q-dialog>
                        </div>
                            <!-- <q-btn @click="editing = true"  v-model="mobileData" round icon="edit"/> -->

                        <div class="q-pa-md q-gutter-sm">
                            <q-btn label color="negative" @click="alert1 = true" round icon="delete"/>
                            <q-dialog v-model="alert1">
                            <q-card style="background-color: #242424;">
                                <q-card-section>
                                <div style="color: white;" class="text-h6">Are you sure? You want to delete?</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
        
                                   
                                        
            
                                    
                                </q-card-section>

                                <q-card-actions align="right">
                                <q-btn  @click="removeTask(todo)" flat label="DELETE" color="negative" v-close-popup />
                                </q-card-actions>
                            </q-card>
                            </q-dialog>
                        </div>


                        </div>

                            <q-separator vertical inset class="q-mx-lg" />

                        <div class="column items-center" >
                            <q-avatar size="72px">
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>

                            <div style="color: white;" class="text-subtitle1 q-mt-md q-mb-xs" >{{todo.title1}}</div>

                                <!-- modal -->
                            <div class="q-pa-md q-gutter-sm">
                            <q-btn  push label="View" color="primary" @click="alert3 = true"/>
                            <q-dialog v-model="alert3">
                            <q-card  style="width: 1000px; background-color: #242424;">
                                <q-card-section>
                                <div style="background-color: #242424; color: white;" class="text-h6">View Employee Data</div>
                                </q-card-section>

                                <q-card-section style="background-color: #242424; color: white;" class="q-pt-none">
         
                                            
                                            <strong>Employee ID :</strong>
                                            <p style="margin-left: 60px;">{{todo._id}}</p>
                                            <strong>Employee Name :</strong>
                                            <p style="margin-left: 60px;">{{todo.title1}}</p>
                                            <strong>Employee Department: </strong>
                                            <p style="margin-left: 60px;">{{todo.title2}}</p>
                                            <strong>Employee Position: </strong>
                                            <p style="margin-left: 60px;">{{todo.title3}}</p>
                                            <strong>Employee Gender: </strong>
                                            <p style="margin-left: 60px;">{{todo.title4}}</p>
                                       
                                    
                                </q-card-section>

                                <q-card-actions align="right">
                                <q-btn flat label="close" color="primary" v-close-popup />
                                </q-card-actions>
                            </q-card>
                            </q-dialog>
                        </div>













                        </div>
                    </div>
                </q-btn-dropdown></td>
        </tr>
                </tbody>
    </q-markup-table>
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <router-link to="/Home" style="text-decoration: none; color: white;"><q-btn style="background-color: #59b984; margin: 10px 0 0 65%; width: 25%"> Add Employee</q-btn></router-link>
    <router-link to="/MainPage" style="text-decoration: none; color: white;"><q-btn style="background-color: #59b984; margin: 10px 0 0 0; width: 25%">Back to MainPage</q-btn></router-link>
    </div>
    </div>
</q-layout>
</template>





<script setup>

import { reactive, ref, onMounted, computed, getCurrentInstance } from 'vue' //getCurrentInstance use if u get axios globally
// import axios from 'axios' // Option 1 for using axios: To get data into server



import open from 'ink-html'

import greet from 'components/greet.vue'

const app = getCurrentInstance()

const { $pdfMake, $todosService } =app.appContext.config.globalProperties // Option 2 for using axios globally:

const printable = ref(null)

//Using Reactive
const state = reactive({
            task: '',
            task1:'',
            task2:'',
            task3:'',
            task4:'',
            fullName: ''
    
    })



const countCompleted = computed(() => todos.value.filter(t => t.completed).length)// To compute all todos.value if completed.. sample value is 6
const countActive = computed(() => todos.value.length - countCompleted.value) // To compute all todos.value in array then minus in the completed.value
const countIT = computed(() => todos.value.filter(t => t.completed).length)
const empNO = computed(() => todos.value.length)

const selected = ref(null) // for hover delete icon

const list = computed(() => todos.value.length)
//Using ref
const todos = ref([
            {
                id: Date.now(),
                title: 'ID',
                title1: 'FULLNAME',
                title2: 'DEPARTMENT',
                title3: 'POSITION',
                title4: 'GENDER',
                completed: false
            }
        
    ])



// onMounted is to initialize the data from axios and Axios used to get the into server
onMounted(async () => {
    // const { data } = await /*axios or*/$axios.get("https://jsonplaceholder.typicode.com/todos"); //if we use global axios by default use $axios, else axios
    // const { data: { data } } = await /*axios or*/$axios.get('http://localhost:3030/todos');
    

        $todosService.on('dataChange', (data) => {
            
                todos.value = [...data];
            
            // todos.value = data;
    })
})

    function add() 
    {
        
        $todosService.create({
            title: state.task,
            title1: state.task1,
            title2: state.task2,
            title3: state.task3,
            title4: state.task4,
            completed: false
        })


        state.task = ""; //it is for clearing text or data in input
        state.task1 = "";
        state.task2 = "";
        model = "";
        state.task3 = "";
        state.task4 = "";
    }

    // const editing = ref()

    function editing() {
        $todosService.update({
            title: state.task,
            title1: state.task1,
            title2: state.task2,
            title3: state.task3,
            title4: state.task4,
            completed: false
        })
    }

    const alert = ref(false)
    const alert1 = ref(false)
    const alert3 = ref(false)

    const mobileData = ref(false)
    const  bluetooth = ref(false)

    const model = ref(null)
   


    Chartkick.options = {
  colors: ["#8fd0ac", "#59b984", "#3b8b5f"]
}
 

    //for removing task in the application
    const removeTask = (task) => {
    //    const i = todos.value.findIndex(t => t.id === task.id)
    //     todos.value.splice(i, 1)
        $todosService.remove(task._id)
    }

        
</script>
