function generateHTML(team) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Profile</title>
        </head>
        <body>
          <h1>My Team</h1>
          ${generateTeamMembersHTML(team)}
        </body>
      </html>
    `;
  
    return html;
  }
  
  function generateTeamMembersHTML(team) {
    const membersHTML = team.map((member) => {
      return `
        <div>
          <h2>${member.getName()}</h2>
          <p>${member.getRole()}</p>
          <p>ID: ${member.getId()}</p>
          <p>Email: ${member.getEmail()}</p>
          ${generateAdditionalInfoHTML(member)}
        </div>
      `;
    });
  
    return membersHTML.join("");
  }
  
  function generateAdditionalInfoHTML(member) {
    if (member.getRole() === "Manager") {
      return `<p>Office Number: ${member.getOfficeNumber()}</p>`;
    } else if (member.getRole() === "Engineer") {
      return `<p>Github: ${member.getGithub()}</p>`;
    } else if (member.getRole() === "Intern") {
      return `<p>School: ${member.getSchool()}</p>`;
    } else {
      return "";
    }
  }
  
  module.exports = generateHTML;
  