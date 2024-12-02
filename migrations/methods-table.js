/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("research_methods", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.json("use_cases").notNullable();
    table.json("project_types").notNullable();
    table.string("design_type").notNullable(); 
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("research_methods");
}
