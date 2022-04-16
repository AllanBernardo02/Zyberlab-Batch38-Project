<template style="background-color: #1a1a1a;">
    <div style="background-color: #1a1a1a;">

            <!-- line5 to line13  header -->
        <q-toolbar class=" text-white" style="background-color: #59b984;">
            <q-btn flat round dense icon="assignment_ind" />
                <q-toolbar-title>
                       ZyberLab Batch 38 - Employee Management System
                </q-toolbar-title>
                <q-btn icon="print" @click="print1"/>
                <q-btn icon="download" @click="download"/>
                <q-btn icon="email" @click="open1"/>
        </q-toolbar>

            <!-- For body -->
        <div class="q-ma-md row no-wrap">
            
            <q-scroll-area visible :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 775px; max-width: 400px; background-color:#242424 ; padding: 0 10px 0 0" class="col" ref="firstRef" @scroll="onScrollFirst">
                 <h5 style="margin: 20px 0 20px 100px; color: white;">Create Employee</h5>
               
                <div class="q-pa-sm" style="margin-bottom: 60px;   ">
                    
                    <q-input :disable="true" style="background-color: #1a1a1a; padding-bottom: 10px; margin-bottom: 10px; color: white;" @keyup.enter="add" v-model="state.task" class="col" filled  label="Employee ID - Auto Generate by API" label-color="white"/>
                    <q-input input-class="text-white"  style="background-color: #1a1a1a; padding-bottom: 10px; margin-bottom: 10px; color: white;" @keyup.enter="add" v-model="state.task1" class="col" filled  label="Employee Name" label-color="white" />
                    <q-input input-class="text-white" style="background-color: #1a1a1a; padding-bottom: 10px; margin-bottom: 10px; color: white;" @keyup.enter="add" v-model="state.task2" class="col" filled  label="Department" label-color="white"/>
                    <q-input input-class="text-white" style="background-color: #1a1a1a; padding-bottom: 10px; margin-bottom: 10px; color: white;" @keyup.enter="add" v-model="state.task3" class="col" filled  label="Position" label-color="white"/>
                    <q-input input-class="text-white" style="background-color: #1a1a1a; padding-bottom: 10px; margin-bottom: 10px; color: white;" @keyup.enter="add" v-model="state.task4" class="col" filled  label="Gender" label-color="white"/>
                    <q-btn @click="add" style="background-color: #59b984; width: 75%; margin: 0 0 0 50px; text-decoration: none; color: white" >Submit</q-btn>

                </div>
                    <!-- For pie chart -->
                <pie-chart input-class="text-white" :data="[['InActive', countActive], ['Active', countCompleted], ['Employee', list]]"></pie-chart>
    
            </q-scroll-area>



            <q-scroll-area visible :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 750px;" class="col" ref="secondRef" @scroll="onScrollSecond">
                <div  class="q-pa-sm">
                        <!-- Line 41 to 45 For Tracking list -->
                    <div  class="row q-gutter-lg" style="margin: 0 0 0 20%;">
                       <q-btn  style="background-color: #242424; color: white;"><h5>Active: {{countCompleted}}</h5></q-btn>
                        <q-btn style="background-color: #242424; color: white;"><h5>InActive: {{countActive}}</h5></q-btn>
                        <q-btn style="background-color: #242424; color: white;"><h5>Employee_No: {{list}}</h5></q-btn>
                    </div>
                        
                            <!-- Line 48 to 172 For displaying list -->
                        <div class="q-pa-md">
                            <div ref="printable">
                                <q-markup-table :separator="separator" flat bordered style="padding: 10px; background-color: #1a1a1a;">
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
                                            <q-btn-dropdown class="glossy" style="background-color: #59b984;" label="Account Settings">
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
                                            
                                                                                <q-input label-color="white" input-class="text-white" style="width: 400px; padding-bottom: 10px; color"  v-model="todo.title1" class="col" filled  label="Employee Name"/>
                                                                                <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color" v-model="todo.title2" class="col" filled  label="Department"/>
                                                                                <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color" v-model="todo.title3" class="col" filled  label="Position" />
                                                                                <q-input label-color="white" input-class="text-white" style=" padding-bottom: 10px; color"  v-model="todo.title4" class="col" filled  label="Gender" />
                                                                                
                                                                    </q-card-section>

                                                                    <q-card-actions align="right">
                                                                    <q-btn @click="edit(todo)" flat label="Update" color="primary" v-close-popup />
                                                                    </q-card-actions>
                                                                </q-card>
                                                                </q-dialog>
                                                            </div>
                                                        

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
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefhE9rjxG5XvKCbLlhrSUMzGiobop0jXCaA&usqp=CAU">
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
                            </div>
                            
                         </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr;">
                                    <router-link to="/employee_list" style="text-decoration: none; color: white;"><q-btn style="background-color: #59b984; margin: 10px 0 0 65%; width: 30%">Employee List</q-btn></router-link>
                                    <router-link to="/MainPage" style="text-decoration: none; color: white;"><q-btn style="background-color: #59b984; margin: 10px 0 0 0; width: 30%">MainPage</q-btn></router-link>
                                </div>
                </div>
            </q-scroll-area>
        </div>
    </div>
</template>




     <!-- composition API -->
<script setup>

import { reactive, ref, onMounted, computed, getCurrentInstance } from 'vue' //getCurrentInstance use if u get axios globally

import open from 'ink-html'

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
const list = computed(() => todos.value.length)
const selected = ref(null) // for hover delete icon


const alert = ref(false)
const alert1 = ref(false)
const alert3 = ref(false)

const model = ref(null)
    

Chartkick.options = {
  colors: ["#8fd0ac", "#59b984", "#3b8b5f"]
}



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



// onMounted is to initialize the data from axios
onMounted(async () => {
    
        $todosService.on('dataChange', (data) => {
            
                todos.value = [...data];
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

            //it is for clearing text or data in input
        state.task = ""; 
        state.task1 = "";
        state.task2 = "";
        state.task3 = "";
        state.task4 = "";
        model = "";
    }

 

    // function editing(task) {
    //     $todosService.patch({
    //         title: state.task._id,
    //         title1: state.task1,
    //         title2: state.task2,
    //         title3: state.task3,
    //         title4: state.task4,
    //         completed: false
    //     })
    // }



    const edit = (task) => {
        $todosService.patch(task._id, task)
    }

   
 
    function print1() {
        const dd = {
            content: [
                {
                    table: {
                        body: [
                            ['completed', 'active', 'All_list'],
                            [countCompleted.value, countActive.value, list.value]
                        ]
                    }
                }
            ]
        }
        $pdfMake.createPdf(dd).print1()
    
    }

    function download() {
        const dd = {
            content: [
                {
                    table: {
                        body: [
                            ['completed', 'active'],
                            [countCompleted.value, countActive.value]
                        ]
                    }
                }
            ]
        }
        $pdfMake.createPdf(dd).download()
    }
   

    function open1() {
        // const dd = {
        //     content: [
        //         {
        //             table: {
        //                 body: [
        //                     ['completed', 'active'],
        //                     [countCompleted.value, countActive.value]
        //                 ]
        //             }
        //         }
        //     ]
        // }
        // $pdfMake.createPdf(dd).open()
        open(printable.value)
    }

    //for removing task in the application
    const removeTask = (task) => {
    //    const i = todos.value.findIndex(t => t.id === task.id)
    //     todos.value.splice(i, 1)
        $todosService.remove(task._id)
    }



        
</script>




   