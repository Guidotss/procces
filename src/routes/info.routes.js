import { Router } from "express";

const router = Router();


router.get("/", (req,res) => {
    res.json({
        argumentos: process.argv.slice(2),
        plataforma: process.platform,
        node: process.version,
        memoria: process.memoryUsage().rss,
        path: process.cwd(),
        pid: process.pid,
    }); 
}); 

export default router;