import express from "express"


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.listen(8080, () => 
    console.log("app.listen: 8080",)
)