const Me = imports.misc.extensionUtils.getCurrentExtension();
const Util = imports.misc.util;
const Main = imports.ui.main;

const AggregateMenu = Main.panel.statusArea.aggregateMenu;

const scripts = {
  hibernate: 'hibernate.sh'
};

let hibernateLabel = '';

/**
 * Extension events handlers functions:
 */

function init() {
  hibernateLabel = getHibernateLabel();
}

function enable() {
  AggregateMenu._system._sessionSubMenu.menu.addAction(
    hibernateLabel,
    () => {
      hibernateActionHandler();
    }
  );
}

function disable() {
}

/**
 * Private functions:
 */


function getHibernateLabel() {
  // To Do:
  return 'Hibernate';
}

function hibernateActionHandler() {
  const executionScriptPath = getScriptsFolderPath();
  executeCommand([executionScriptPath + '/' + scripts.hibernate]);
}

function getScriptsFolderPath() {
  return Me.dir.get_child('scripts').get_path();
}

function executeCommand(args) {
  Util.spawn(args);
}
