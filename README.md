
构建工具：webpack
代码规范化：eslint + prettier + husky + git commit + commitlint
兼容性：babel
自动化测试：git actions + git hooks


技术调研
- 项目复杂度
- 兼容性
- 开发效率 webpack
- 业务需求
- 团队成员技术水平

开发工具
- vscode
- webstorm

技术选型？

团队管理
- git 协同与提交规范：standard
- 代码风格统一：eslint + prettier
- 技能储备与学习：npm 包的导出


工作流制定：

0. 基础：babel 等转译工具
1. 编码 + eslint + prettier
*  jest 配置文件 jest.config.js 
2. 测试用例编写
3. git 提交 （gitflow + commitlint + husky）
4. 发起 pr
5. git actions 处理 pr，自动测试，测试通过的话，feature/xxx => develop
6. 定时将 develop 稳定版合到 master 分支，git actions 自动打包构建， publish 到 npm
7. tags ? release ? changelog ?

