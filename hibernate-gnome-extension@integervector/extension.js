const Me = imports.misc.extensionUtils.getCurrentExtension();
const Gettext = imports.gettext;
const Util = imports.misc.util;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;

Gettext.bindtextdomain('hibernation', Me.dir.get_child('locale').get_path());
Gettext.textdomain('hibernation');

const _ = Gettext.gettext;

let hibernateScriptName = 'hibernate.sh';
let executionScriptPath = null;
let hibernateLabel = null;
let aggregateMenu = null;
let hibernateMenuItem = null;

function init() {
  hibernateLabel = _('Hibernate');
  executionScriptPath = getScriptsFolderPath();
  aggregateMenu = Main.panel.statusArea.aggregateMenu;
}

function enable() {
  hibernateMenuItem = createHibernateMenuItem();
  setHibernateMenuItem(hibernateMenuItem);
}

function disable() {
  hibernateMenuItem.destroy();
  hibernateMenuItem = null;
}

/**
 * Private functions:
 */

function createHibernateMenuItem() {
  const menuItem = new PopupMenu.PopupMenuItem(hibernateLabel);
  menuItem.connect('activate', () => {
    hibernateActionHandler();
  });

  return menuItem;
}

function setHibernateMenuItem(item) {
  aggregateMenu._system._sessionSubMenu.menu.addMenuItem(item, 4);
}

function hibernateActionHandler() {
  Util.spawn([executionScriptPath + '/' + hibernateScriptName]);
}

function getScriptsFolderPath() {
  return Me.dir.get_child('scripts').get_path();
}
