const program = require("commander");
const inquirer = require("inquirer");
const { sleep } = require("../../utils/common");
const { loadingUtils } = require("../../utils/ora");

const buildCommands = () => {
    program
        .command("build")
        .description("项目打包")
        .action(() => {
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "platform",
                        message: "请选择打包平台",
                        choices: ["安卓APP", "苹果APP"],
                    },
                ])
                .then(async (answers) => {
                    // 这边会记录每个问题选项答案，如下demo，对应name，对应值
                    // { platform: '安卓', platform2: 'IOS1' }
                    const { platform } = answers;
                    loadingUtils.start("开始检测项目依赖包...");
                    await sleep(3000);
                    loadingUtils.succeed("项目依赖包完成.");
                    loadingUtils.start(`${platform}打包进行中...`);
                    await sleep(3000);
                    loadingUtils.succeed(`${platform}打包完成.`);
                    // console.log(answers);
                });
        });
};

module.exports = {
    buildCommands,
};
