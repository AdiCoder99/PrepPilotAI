import express from 'express'

const app = express();


app.use(express.json())


app.get('/', (req, res) => {
    res.send("Server is running......");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT http://localhost:${PORT}`);
    
})