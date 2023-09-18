const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
 "<th>Salary</th><th>Start Date</th><th>Actions</th>";
 
     
 let innerHtml = `${headerHtml}`;
 for(const empPayrollData of empPayrollList)
 {
     //alert("name=",empPayrollData._name);
     console.log(empPayrollData._name);
     innerHtml = `${innerHtml}
     <tr>
     <td><img class="profile" src="${empPayrollData._profilePic}" alt=""/></td>
     <td>${empPayrollData._name}</td>
     <td>${empPayrollData._gender}</td>
     <td>${empPayrollData._department}</td>
     <td>${empPayrollData._salary}</td>
     <td>${empPayrollData._startDate}</td>
     <td>

          <img name="${empPayrollData._id}" onclick="remove(this)
          src = "FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\delete-black-18dp.svg" alt = "delete">
          <img name="${empPayrollData._id}" onclick="update(this)
          src = "FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\delete-black-18dp.svg" alt = "edit">
          
          </td>
     </tr>
     `;
 }
 document.querySelector('#table-display').innerHTML = innerHtml;
}


