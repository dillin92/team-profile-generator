

const generateCard = employeeCard => {
    console.log(employeeCard)
        return `
        <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
                ${employeeCard
                .filter(({ info }) => info)
                .map(({ name, id, email, role }) => {
                    console.log(name);
                    return `
                    <h4><b>${name}</b></h4>
                    <p>${id}</p>
                    <p>${email}</p>
                    <p>${role}</p>

                `;
                })
                .join('')}
            </div>
        </div>
        `;
};

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const employeeCard = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/}">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container">
        ${generateCard(employeeCard)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by Dillin Helsley</h3>
      </footer>
    </body>
    </html>
    `;
  };