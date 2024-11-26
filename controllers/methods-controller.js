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
  const { name, description, use_cases, project_types } = req.body;
  if (!name || !description || !use_cases || !project_types) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const newMethod = await knex("research_methods").insert(
      {
        name,
        description,
        use_cases: JSON.stringify(use_cases),
        project_types: JSON.stringify(project_types),
      },
      ["id", "name", "description", "use_cases", "project_types"]
    );
    res.status(201).json(newMethod[0]);
  } catch (err) {
    res.status(400).send(`Error adding research method: ${err}`);
  }
};

const updateMethod = async (req, res) => {
  const { id } = req.params;
  const { name, description, use_cases, project_types } = req.body;

  if (!name || !description || !use_cases || !project_types) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const updated = await knex("research_methods")
      .where({ id })
      .update(
        {
          name,
          description,
          use_cases: JSON.stringify(use_cases),
          project_types: JSON.stringify(project_types),
        },
        ["id", "name", "description", "use_cases", "project_types"]
      );

    if (!updated.length) {
      return res.status(404).send("Research method not found.");
    }

    res.status(200).json(updated[0]);
  } catch (err) {
    res.status(400).send(`Error updating research method: ${err}`);
  }
};

// Delete a research method
const deleteMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await knex("research_methods").where({ id }).del();

    if (!deleted) {
      return res.status(404).send("Research method not found.");
    }

    res.status(200).send("Research method deleted successfully.");
  } catch (err) {
    res.status(400).send(`Error deleting research method: ${err}`);
  }
};

export { getAllMethods, addMethod, updateMethod, deleteMethod };
