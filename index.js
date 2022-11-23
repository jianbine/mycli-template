#!/usr/bin/env node
const program = require("commander");

program
  .name("xxx")
  .usage("[Options] [Commands]");

program
  .option('-dev, --development' , '开发环境')
  .option('-test' , '测试环境')
  .option('-prod, --production' , '生产环境');

// 增加创建命令
const createCommandsPage = require('./lib/core/create');
createCommandsPage.createCommands();

// 增加打包命令
const buildCommandsPage = require('./lib/core/build');
buildCommandsPage.buildCommands();

program.parse(process.argv);
