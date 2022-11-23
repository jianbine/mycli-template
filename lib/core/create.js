const program = require("commander");

const createCommands = () => {
    program
        .command("create")
        .description("创建新的项目")
        .action(() => {
            console.info("创建项目成功");
        });
};

module.exports = {
    createCommands,
};
