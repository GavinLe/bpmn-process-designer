<template>
  <div class="page-container">
    <bpmn-toolbar v-if="getEditorConfig.toolbar" />
    <div class="main-content">
      <bpmn-designer :xml.sync="xmlString" />
      <bpmn-panel v-if="getEditorConfig.penalMode === 'custom'" />
      <div v-else class="camunda-panel" id="camunda-panel"></div>
    </div>
    <bpmn-settings v-if="setting" />
    <bpmn-context-menu />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BpmnDesigner from "@packages/components/Designer";
import BpmnSettings from "@packages/components/Settings";
import BpmnToolbar from "@packages/components/Toolbar";
import BpmnContextMenu from "@packages/components/ContextMenu/ContextMenu";
import BpmnPanel from "@packages/components/Panel";

export default {
  name: "HomeView",
  components: {
    BpmnPanel,
    BpmnContextMenu,
    BpmnToolbar,
    BpmnSettings,
    BpmnDesigner,
  },
  data() {
    return {
      xmlString: undefined,
      setting: false,
    };
  },
  computed: {
    ...mapGetters(["getEditorConfig"]),
  },
  mounted() {
    document.body.addEventListener("contextmenu", function (ev) {
      ev.preventDefault();
    });
    // 加载数据
    this.loadData();
  },
  methods: {
    loadData() {
      const testFile = "./InvoicingProcess.bpmn";
      const reader = new FileReader();
      reader.readAsText(testFile);
      reader.onload = function () {
        this.xmlString = this.result;
      };
    },
  },
};
</script>
