exports.up = (pgm) => {
  pgm.createTable("comments", {
    id: { type: "serial", primaryKey: true },

    user_id: {
      type: "integer",
      notNull: true,
      references: "users(id)",
      onDelete: "cascade",
    },

    post_id: {
      type: "integer",
      notNull: true,
      references: "posts(id)",
      onDelete: "cascade",
    },

    content: { type: "text", notNull: true },
    created_at: { type: "timestamp", default: pgm.func("now()") },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("comments");
};