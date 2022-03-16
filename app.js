const fs = require('fs');

const data = (`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

   <link rel="stylesheet" href="style.css">
</head>
<body>
 

 

    
    <script src="scripts/controller/CalcController.js"></script>
    <script src="scripts/calculator.js"></script>
    
</body>
</html>


`);
fs.writeFileSync('index.html', data);