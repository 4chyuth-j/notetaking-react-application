import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();

const PORT = process.env.PORT || 5001;



const app = express();

//middleware
//Before handling any routes, if the request has a JSON body, automatically read it and convert it into a JavaScript object.
app.use(express.json());

app.use(rateLimiter);

//simple coustom middleware
// app.use((req,res,next)=>{
//   console.log(`Req method is:-${req.method} & Req url is:-${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);


//only run the application after connecting to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
  });
});








