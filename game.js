function generateRandomNumber(lower, upper, usedNumbers) 
{
  let number = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  while (usedNumbers.includes(number))
  {
    number = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
  usedNumbers.push(number);
  return number;
}

function createPythonBingoCard() 
{
  let card = document.getElementById('bingo-card');

  // Heading row
  let headings = ['P', 'Y', 'T', 'H', 'O', 'N'];
  let headingRow = document.createElement('tr');
  headings.forEach(heading => 
  {
    let th = document.createElement('th');
    th.textContent = heading;
    headingRow.appendChild(th);
  });
  card.appendChild(headingRow);

  // Number rows
  let ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75], [76, 90]];
  let usedNumbers = [];

  for (let row = 0; row < ranges[0][1] - ranges[0][0] + 1; row++) 
  {
    const numberRow = document.createElement('tr');
    for (let col = 0; col < headings.length; col++) 
    {
      const [lower, upper] = ranges[col];
      const td = document.createElement('td');
      td.textContent = generateRandomNumber(lower, upper, usedNumbers);

       //6Add click event listener to the cell
      td.addEventListener('click', function(){
        this.classList.toggle('marked');
        checkCompletedRowsAndColumns(row,col);
      })

      numberRow.appendChild(td);
    }
    card.appendChild(numberRow);
  }
}

  
   function checkCompletedRowsAndColumns(_row, _col) 
  {
    let table = document.getElementById('bingo-card');
    let rows = table.getElementsByTagName('tr');
    let compRow = true;
    let compCol = true;
  
    // Row check
    for (let col = 0; col < rows[_row].cells.length; col++) 
  {
      if (!rows[_row].cells[col].classList.contains('marked')) 
      {
        compRow = false;
        break;
      }
  }
  
    // Column check
    for (let row = 1; row < rows.length; row++)
    {
      if (!rows[row].cells[_col].classList.contains('marked')) 
      {
        compCol = false;
        break;
      }
    }
  
    if (compRow) 
    {
      alert('Row ' + (_row) + ' completed');
    } else if (compCol) 
    {
      alert('Column ' + (_col + 1) + ' completed');
    }
  }
  
  

// Generate the Python Bingo card
createPythonBingoCard();
