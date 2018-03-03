import { createEmployee } from "SERVER/useCases/employees";

export default function letterRequests(api) {
  api.post("/employees", async (req, res, next) => {
    const employee = await createEmployee(req.body).catch(next);
    res.json({ employee });
  });
}
