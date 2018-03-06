import { createEmployee, search } from "SERVER/useCases/employees";

export default function letterRequests(api) {
  api.post("/employees", async (req, res, next) => {
    const employee = await createEmployee(req.body).catch(next);
    res.json({ employee });
  });

  api.post("/employees/search", async (req, res, next) => {
    const result = await search(req.body).catch(next);
    res.json(result);
  });
}
