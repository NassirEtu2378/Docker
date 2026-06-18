exports.up = (pgm) => {
  pgm.createTable("posts", {
    id: { type: "serial", primaryKey: true },
    user_id: {
      type: "integer",
      notNull: true,
      references: "users(id)",
      onDelete: "cascade",
    },
    title: { type: "varchar(200)", notNull: true },
    content: { type: "text" },
    created_at: { type: "timestamp", default: pgm.func("now()") },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("posts");
};