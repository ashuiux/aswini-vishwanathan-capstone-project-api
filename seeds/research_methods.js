/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
    await knex("research_methods").del();
  
    await knex("research_methods").insert([
      {
        id: 1,
        name: "User Interviews",
        description: "A method to gather qualitative insights directly from users.",
        use_cases: JSON.stringify(["Early discovery", "Identifying user pain points"]),
        project_types: JSON.stringify(["Exploratory", "Validating ideas"]),
      },
      {
        id: 2,
        name: "Surveys",
        description: "A quantitative research method to collect feedback from a larger audience.",
        use_cases: JSON.stringify(["Validating hypotheses", "Collecting demographic data"]),
        project_types: JSON.stringify(["Quantitative research", "Feedback collection"]),
      },
      {
        id: 3,
        name: "Usability Testing",
        description: "A method to evaluate how easy it is for users to complete tasks in a product.",
        use_cases: JSON.stringify(["Prototype testing", "Identifying usability issues"]),
        project_types: JSON.stringify(["Improvement-focused", "Product validation"]),
      },
    ]);
  }
  