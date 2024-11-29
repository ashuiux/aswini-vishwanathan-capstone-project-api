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
        design_type: "New Design",
      },
      {
        id: 2,
        name: "Surveys",
        description: "A quantitative research method to collect feedback from a larger audience.",
        use_cases: JSON.stringify(["Validating hypotheses", "Collecting demographic data"]),
        project_types: JSON.stringify(["Quantitative research", "Feedback collection"]),
        design_type: "Both",
      },
      {
        id: 3,
        name: "Observation",
        description: "A method where researchers watch users interact with their environment or product.",
        use_cases: JSON.stringify(["Understanding user behavior", "Contextual insights"]),
        project_types: JSON.stringify(["Exploratory", "Real-world context gathering"]),
        design_type: "New Design",
      },
      {
        id: 4,
        name: "Contextual Inquiry",
        description: "A field study method to observe users in their natural environment and ask questions.",
        use_cases: JSON.stringify(["Task analysis", "User environment understanding"]),
        project_types: JSON.stringify(["Exploratory", "Behavioral insights"]),
        design_type: "New Design",
      },
      {
        id: 5,
        name: "Empathy Mapping",
        description: "A method to understand user emotions, thoughts, and behaviors.",
        use_cases: JSON.stringify(["Building personas", "Understanding user perspectives"]),
        project_types: JSON.stringify(["Exploratory", "Ideation support"]),
        design_type: "Both",
      },
      {
        id: 6,
        name: "Competitor Analysis",
        description: "A method to analyze competing products to identify strengths and weaknesses.",
        use_cases: JSON.stringify(["Redesign preparation", "Identifying market gaps"]),
        project_types: JSON.stringify(["Redesign", "Competitive research"]),
        design_type: "Redesign",
      },
      {
        id: 7,
        name: "Heuristic Evaluation",
        description: "A usability inspection method to identify potential UX issues.",
        use_cases: JSON.stringify(["Identifying design flaws", "Improving usability"]),
        project_types: JSON.stringify(["Redesign", "Usability improvement"]),
        design_type: "Redesign",
      },
      {
        id: 8,
        name: "Customer Support Feedback Analysis",
        description: "A method to analyze feedback from customer support channels.",
        use_cases: JSON.stringify(["Understanding common issues", "Identifying improvement areas"]),
        project_types: JSON.stringify(["Redesign", "Improvement-focused"]),
        design_type: "Redesign",
      },
      {
        id: 9,
        name: "Analytics Review",
        description: "A method to analyze user behavior data from digital analytics tools.",
        use_cases: JSON.stringify(["Identifying user behavior trends", "Improving design effectiveness"]),
        project_types: JSON.stringify(["Redesign", "Data-driven improvements"]),
        design_type: "Redesign",
      },
      {
        id: 10,
        name: "Usability Testing",
        description: "A method to evaluate how easy it is for users to complete tasks in a product.",
        use_cases: JSON.stringify(["Prototype testing", "Identifying usability issues"]),
        project_types: JSON.stringify(["Improvement-focused", "Product validation"]),
        design_type: "Both",
      },
      {
        id: 11,
        name: "A/B Testing",
        description: "A method to compare two versions of a product to determine which performs better.",
        use_cases: JSON.stringify(["Testing design changes", "Optimizing user experience"]),
        project_types: JSON.stringify(["Optimization", "Validating design changes"]),
        design_type: "Both",
      },
      {
        id: 12,
        name: "Preference Testing",
        description: "A method to determine user preferences between multiple designs or solutions.",
        use_cases: JSON.stringify(["Design selection", "Understanding user preferences"]),
        project_types: JSON.stringify(["Optimization", "Decision-making"]),
        design_type: "Both",
      },
  ]);
}
