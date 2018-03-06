import { Employee } from "SERVER/models";
import { create } from "SERVER/services/user";

export async function createEmployee({ first_name, last_name, email }) {
  const user = await create({
    email,
    password: "temp",
    role: "employee",
    confirmed: true
  });

  const employee = await Employee.forge({
    first_name,
    last_name,
    user_id: user.get("id")
  }).save();

  return employee.toJSON();
}

export async function search(user, page = 1, pageSize = 15) {
  const result = await Employee.forge()
    .orderBy("last_name")
    .fetchPage({
      page,
      pageSize
    });

  return {
    totalCount: result.pagination.rowCount,
    results: result.toJSON()
  };
}
