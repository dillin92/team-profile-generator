const employeeCards =  [];  


const generateInternCard = newIntern => {


        return `
        <div class="card">
            <div class="roles">
                ${newIntern.map(({name, id, email, role, school}) => {
                 
                    return `
                  <div class="employee">  
                    <h4>${name}</h4>
                    <p>Employee ID:${id}</p>
                    <p>Email Address:${email}</p>
                    <p>${role}</p>
                    <p>School:${school}</p>
                  </div>

                `;
                })
                }
            </div>
        </div>
        `;

};

const generateEngineerCard = newEngineer => {

  return `
  <div class="card">
      <div class="roles">
          ${newEngineer.map(({ name, id, email, role, github }) => {
           
              return `
              <div class="employee">
                <h4>${name}</h4>
                <p>Employee ID:${id}</p>
                <p>Email Address:${email}</p>
                <p>${role}</p>
                <p>Github Username:${github}</p>
              </div>

          `;
          })
          }
      </div>
  </div>
  `;
};

const generateManagerCard = newManager => {

  
  return `
  <div class="card">
      <div class="roles">
          ${newManager.map(({ name, id, email, role, officeNumber }) => {
           
              return `
            <div class="employee">
              <h4>${name}</h4>
              <p>Employee ID:${id}</p>
              <p>Email Address:${email}</p>
              <p>${role}</p>
              <p>Office Number:${officeNumber}</p>
            </div>

          `;
          })
          }
      </div>
  </div>
  `;
};

function getTeam(templateData) {
  let team = {
    intern: [],
    engineer: [],
    manager: [],
  };
  
  for(let i = 0;i < templateData.length; i ++) {
    let newEmployee = templateData[i];
  
    
    if(newEmployee.getRole() === 'Intern'){
      team.intern.push(newEmployee);

    }

      if(newEmployee.getRole() === 'Engineer'){
        team.engineer.push(newEmployee)
      }

      if(newEmployee.getRole() === 'Manager'){
        team.manager.push(newEmployee)
      }
  }

  return team;
};




// export function to generate entire page
module.exports = templateData => {

  
  let team = getTeam(templateData);
  console.log(team);
  const { intern, engineer, manager } = team;
  console.log(intern, engineer, manager);

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
   
  </head>

  
  
  
  <body>
    <header>
    <h1> My Development Team <h1>
    </header>

    

    <main>

      <section class="team">
        <div class="interns">
          <h2>Interns</h2>
         ${generateInternCard(intern)}
        </div>
        <div class="engineers">
          <h2>Engineers</h2>
          ${generateEngineerCard(engineer)}
        </div>
        <div class="managers">
          <h2>Managers</h2>
           ${generateManagerCard(manager)}
        </div>
      </section>  

    </main>

    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2021 by Dillin Helsley</h3>
    </footer>

    <script src="server.js"></script>
  </body>
  </html>
  `;
};



// function generatePage() {
//   const { internCards, engineerCards, managerCards } = employeeCards;
  
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>My Team</title>
   
//   </head>

  
  
  
//   <body>
//     <header>
//     </header>

//     <main class="container">
//     ${generateInternCard(internCards)}
//     ${generateEngineerCard(engineerCards)}
//     ${generateManagerCard(managerCards)}
    
//     </main>

//     <footer class="container text-center py-3">
//       <h3 class="text-dark">&copy;2021 by Dillin Helsley</h3>
//     </footer>

//     <script src="server.js"></script>
//   </body>
//   </html>
//   `;
// };