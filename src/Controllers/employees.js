const EmployeesModel = require("../Models/sql/employees");

class EmployeesController {
  static async getAll(req, res) {
    try {
      const { id, full_name, docket, company, sector, category, dni, cuil, active } = req.query
      const employee = await EmployeesModel.getAll({ id, full_name, docket, company, sector, category, dni, cuil, active })

      res.json(employee)
    } 
    catch (e) {
      console.error('Error getting employees:', e); 
      res.status(500).json({ error: 'Error al obtener empleados' });
    }
  }

  static async getSectors(req, res) {
    try {
      const { id, name } = req.query
      const sectors = await EmployeesModel.getSectors({ id, name })

      res.json(sectors)
    } 
    catch (e) {
      console.error('Error getting sectors:', e); 
      res.status(500).json({ error: 'Error al obtener sectors' });
    }
  }
}

module.exports = EmployeesController;
  