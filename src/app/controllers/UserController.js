import User from "../models/User";

class UserController {
  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);

    return res.json(user);
  }

  async store(req, res) {
    const { body } = req;
    const user = await User.create(body);

    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const user = await User.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(user);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.send();
  }
}

export default new UserController();