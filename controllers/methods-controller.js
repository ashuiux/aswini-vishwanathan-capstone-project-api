import initKnex from "knex";
import knexConfig from "../knexfile.js";

const knex = initKnex(knexConfig[process.env.NODE_ENV || "development"]);

const getAllMethods = async (_req, res) => {
  try {
    const data = await knex("research_methods");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving research methods: ${err}`);
  }
};

const addMethod = async (req, res) => {
  const { name, description, design_type, use_cases = [], project_types = [] } = req.body;

  if (!name || !description || !design_type) {
    return res.status(400).send("Name, description, and design type are required.");
  }

  if (!Array.isArray(use_cases) || !Array.isArray(project_types)) {
    return res.status(400).send("Use cases and project types must be arrays.");
  }

  try {
    const newMethod = await knex("research_methods").insert(
      {
        name,
        description,
        design_type,
        use_cases: JSON.stringify(use_cases),
        project_types: JSON.stringify(project_types),
      },
      ["id", "name", "description", "design_type", "use_cases", "project_types"]
    );
    res.status(201).json(newMethod[0]);
  } catch (err) {
    res.status(400).send(`Error adding research method: ${err.message}`);
  }
};

const updateMethod = async (req, res) => {
  const { id } = req.params;
  const { name, description, use_cases, project_types, design_type } = req.body;

  if (!name || !description || !design_type) {
    return res.status(400).send("Name, description, and design type are required.");
  }

  if (!Array.isArray(use_cases) || !Array.isArray(project_types)) {
    return res.status(400).send("Use cases and project types must be arrays.");
  }

  try {
    const updated = await knex("research_methods")
      .where({ id })
      .update(
        {
          name,
          description,
          design_type,
          use_cases: JSON.stringify(use_cases),
          project_types: JSON.stringify(project_types),
        },
        ["id", "name", "description", "design_type", "use_cases", "project_types"]
      );

    if (!updated.length) {
      return res.status(404).send("Research method not found.");
    }

    res.status(200).json(updated[0]);
  } catch (err) {
    res.status(400).send(`Error updating research method: ${err.message}`);
  }
};
const getMethodById = async (req, res) => {
  const { id } = req.params;

  try {
    const method = await knex("research_methods").where({ id }).first();

    if (!method) {
      return res.status(404).send(`Research method with ID ${id} not found.`);
    }

    res.status(200).json(method);
  } catch (err) {
    res.status(400).send(`Error retrieving research method: ${err.message}`);
  }
};

const deleteMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await knex("research_methods").where({ id }).del();

    if (!deleted) {
      return res.status(404).send(`Research method with ID ${id} not found.`);
    }

    res.status(200).send(`Research method with ID ${id} deleted successfully.`);
  } catch (err) {
    res.status(400).send(`Error deleting research method: ${err.message}`);
  }
};


export { getAllMethods, addMethod, updateMethod, getMethodById, deleteMethod };
