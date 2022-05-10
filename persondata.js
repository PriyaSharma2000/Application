var recordData = `
<label for="name">Name ~>
First Name : <input type="text" name="fname" id="fname">
Last Name : <input type="text" name="lname" id="lname"><br><br>
</label>      
      <label for="birthplace">Birthplace:</label>
      <input type="text" name="birthplace" id="birthplace"><br><br>
      <label for="age">Age:</label>
      <input type="number" name="age" id="age"><br><br><br><br><br>
      <button id="savebtn">SAVE</button>

      <table>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>BirthPlace</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody id="result"></tbody>
      </table>
`