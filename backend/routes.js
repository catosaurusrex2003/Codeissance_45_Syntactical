const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
