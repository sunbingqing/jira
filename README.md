<!--
 * @Author: sunbingqing
 * @Date: 2022-01-22 13:59:34
 * @LastEditors: sunbingqing
 * @LastEditTime: 2022-01-22 15:33:39
 * @Description:
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
-->

## 项目配置步骤

### 1. 创建项目

`npx create-react-app jira --template typescript`

### 2. 配置 prettier

- 安装
  `yarn add --dev --exact prettier`

- 创建配置文件
  `echo {}> .prettierrc.json`

- 自动格式化插件
  `npx mrm lint-staged`

- 消除 eslint 和 perttier 之间的冲突
  `yarn add eslint-config-prettier -D`
