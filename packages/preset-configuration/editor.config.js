export const defaultSettings = {
  processId: `Process_${new Date().getTime()}`,
  processName: `业务流程`,
  processEngine: "camunda", // 流程引擎 activiti camunda flowable
  paletteMode: "enhancement", // 重写 rewrite  自定义 custom 增强 enhancement
  penalMode: "custom",
  contextPadMode: "enhancement",
  rendererMode: "rewrite",
  bg: "grid-image",
  toolbar: true, // 工具栏
  useMinimap: true, // 小地图
  useLint: false, // 检查
  useMock: false, // 模拟
  contextmenu: true,
  customContextmenu: true,
  otherModule: true,
  templateChooser: true,
  customTheme: {},
};
