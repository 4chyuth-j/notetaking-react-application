import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();


//middleware
//Before handling any routes, if the request has a JSON body, automatically read it and convert it into a JavaScript object.
app.use(express.json());

app.use("/api/notes",notesRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`); 
});




