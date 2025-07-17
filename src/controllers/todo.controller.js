import consola from "consola";

export class TodoController {
  constructor(todoModel) {
    this.todoModel = todoModel;
  }

  /**
   * Foydalanuvchi tasklarini yaratadi
   * 
   * Metho ---> POST
   * url   ---> /api/todos
   * @param {*} req 
   * @param {*} res 
   */
  async createTodo(req, res) {
    try {
      const body = req.body;

      console.log("this", this);

      console.log("body", body);

      const createdTodo = await this.todoModel.create(body);

      res.status(201).json(createdTodo);
    } catch (error) {
      consola.error(error.message);
      res.status(500).json({
        message: "Xatoli",
      });
    }
  }

  /**
   * Taskni done maydonini true'ga o'zgartiruvchi method 
   * 
   * Method ---> GET
   * URL    ---> /api/todos/done/:id
   */
  async updateTodo(req, res){
    // 
  }

  /**
   * Taskni o'chirib yuborish
   * 
   * Method ---> GET
   * URL    ---> /api/todos/delete/:id
   */
  async deleteTodo(req,res){
    // ....
  }
}

