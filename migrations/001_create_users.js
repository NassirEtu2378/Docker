exports.up = (pgm) => {
  pgm.createTable("users", {
    id: { type: "serial", primaryKey: true },
    name: { type: "varchar(100)" },
    email: { type: "varchar(100)" },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};