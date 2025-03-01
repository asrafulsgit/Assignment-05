const todaistasks = [
  {
    id: "1",
    title: "ShopEase",
    problem: "Fix Mobile Button Issue",
    description: "Debug using Chrome DevTools, check for overlappin...",
    deadline_date: "21 March 2025",
  },
  {
    id: "2",
    title: "CloudSync",
    problem: "Add Dark Mode",
    description:
      "Store the user's preference in localStorage, update CSS varia..",
    deadline_date: "21 March 2025",
  },
  {
    id: "3",
    title: "SwiftPay",
    problem: "Optimize  Home page ",
    description: "Debug using Chrome DevTools, check for overlappin...",
    deadline_date: "21 March 2025",
  },
  {
    id: "4",
    title: "Meta",
    problem: "Add new emoji 🤲",
    description: "Debug using Chrome DevTools, check for overlappin...",
    deadline_date: "21 March 2025",
  },
  {
    id: "5",
    title: "Google LLC",
    problem: "Integrate OpenAI API ",
    description: "Debug using Chrome DevTools, check for overlappin...",
    deadline_date: "21 March 2025",
  },
  {
    id: "6",
    title: "Glassdoar",
    problem: "Improve Job searching",
    description: "Debug using Chrome DevTools, check for overlappin...",
    deadline_date: "21 March 2025",
  },
];
let completedTasks = [
     
]
const tasks = document.querySelector("#tasks");
const totalTasks = todaistasks.length;
for (let x = 0; x < totalTasks; x++) {
     const {id,title,problem,description,deadline_date}=todaistasks[x]
     const taskCard = document.createElement('div')
     taskCard.classList.add('task-card')
     taskCard.innerHTML =`
               <p class="small-title">${title}</p>
                 <h3 class="title">${problem}</h3>
                 <p class="description">
                    ${description}
                 </p>
                 <div class="task-card-footer">
                    <div class="deadline">
                         <p class="deadline-text">Deadline:</p> 
                         <p class="deadline-date">${deadline_date}</p>
                    </div>
                    <button class="complete-btn" id='btn-${id}' onClick="completeTask(${id}, '${problem}')">Completed</button>
                 </div>`
     tasks.appendChild(taskCard)
}


const completedTasksBody = document.querySelector('#completed-tasks')
const totalCompletedTasks = completedTasks.length;

const taskAssigned = document.querySelector('#uncompleted')

let TotalCompletedTaskCount = 24;
const  TotalCompletedTaskShow = document.querySelector('#total-completed-task')
TotalCompletedTaskShow.textContent = TotalCompletedTaskCount;

function completedTasksFunc(){
     completedTasksBody.innerHTML =''
     for (let y = 0; y < completedTasks.length; y++) {
          const {problem,solveTime}=completedTasks[y];
          const cTask = document.createElement('div')
          cTask.classList.add('c-task')
          cTask.innerHTML =`
                <p>You have Complete The Task ${problem} at ${solveTime}</p>
          `
          completedTasksBody.appendChild(cTask)
      }
      const unCompletedTask = todaistasks.length - completedTasks.length;
      taskAssigned.textContent = unCompletedTask;
}

completedTasksFunc()



function completeTask(id,problem){
     
     alert('Board Updated Successfully')
      
     if(todaistasks.length - completedTasks.length === 1){
          alert('Congrates!!! You have competed all the current task')
     }
     const solveTime = getCurrentTime();
     completedTasks.push({id, problem,solveTime})
     
     const completedBtn = document.querySelector(`#btn-${id}`)
     completedBtn.disabled = true
     completedBtn.style.backgroundColor = '#ccc'

     TotalCompletedTaskCount += 1
     TotalCompletedTaskShow.textContent = TotalCompletedTaskCount

     completedTasksFunc()
}


const clearHistoryBtn = document.querySelector('#clear-history-btn')

clearHistoryBtn.addEventListener('click',function(){
     completedTasks = []
     completedTasksBody.innerHTML =''
})

const todayDate = getCurrentDate();
const {day,month,year,date} = todayDate
document.querySelector('#today-day').textContent = day
document.querySelector('#full-year').textContent = `${month} ${date <10 ? `0${date}` : date} ${year}`





