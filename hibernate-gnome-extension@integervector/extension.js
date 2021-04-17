const Me = imports.misc.extensionUtils.getCurrentExtension();
const Util = imports.misc.util;
const Main = imports.ui.main;

let hibernateScriptName = 'hibernate.sh';
let executionScriptPath = null;
let hibernateLabel = null;
let aggregateMenu = null;
let hibernateMenuItem = null;

function init() {
  hibernateLabel = getHibernateLabel();
  executionScriptPath = getScriptsFolderPath();
  aggregateMenu = Main.panel.statusArea.aggregateMenu;
}

function enable() {
  hibernateMenuItem = createHibernateMenuItem();
}

function disable() {
  hibernateMenuItem.destroy();
  hibernateMenuItem = null;
}

/**
 * Private functions:
 */

function createHibernateMenuItem() {
  return aggregateMenu._system._sessionSubMenu.menu.addAction(
    hibernateLabel,
    () => {
      hibernateActionHandler();
    }
  );
}

function hibernateActionHandler() {
  Util.spawn([EXECUTION_SCRIPT_PATH + '/' + HIBERNATE_SCRIPT_NAME]);
}

function getHibernateLabel() {
  // To Do: Add localization
  return 'Hibernate';
}

function getScriptsFolderPath() {
  return Me.dir.get_child('scripts').get_path();
}
