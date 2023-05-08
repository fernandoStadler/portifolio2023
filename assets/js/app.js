import projects from '../js/projectsData.js'
import courses from '../js/courseData.js'
import toggleMenu from '../js/tooggleMenu.js'
const projectTemplate = document.querySelector('[data-project]')
const colegiesTemplate = document.querySelector('[data-colegies]')

const loadProjectTemplate = () => {
    projects.forEach(project => {
        projectTemplate.innerHTML += `
        <div class="content-project">
            <div class="tumb-project">
                <img src='assets/img/${project.tumb}' alt="toDoJs" srcset="">
            </div>
            <span><strong>Nome:</strong> ${project.name}</span>
            <h4>Descrição</h4>
            <p>${project.description}</p>
            <h4>Tecnologias utilizadas</h4>
            <div class="used-technolgies">
                <ul>
                    ${project.technologies.map(technology =>
                    `<li>${technology}</li>`).join('')
                    }
                </ul>
            </div>
            <div class="project-links">
                <button><a href='${project.gitLink}' target="_blank">Código Fonte <i
                            class="fa-brands fa-github"></i></a></button>
                <button><a href='${project.deployLink}' target="_blank">Live Project <i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
            </div>
        </div>
`
    });
}
const loadCoursesTemplate = () =>{
    courses.forEach(course =>{
        colegiesTemplate.innerHTML+=`
        <div class="course">
        <div class="curse-tumbnail">
            <img src="assets/img/${course.tumb}">
        </div>
        <div class="course-info">
                <span>Curso: ${course.curso}</span>
                <span>Status: ${course.status}</span>
        </div>
    </div>       
        `
    })
}
toggleMenu();
AOS.init();
loadProjectTemplate();
loadCoursesTemplate();
