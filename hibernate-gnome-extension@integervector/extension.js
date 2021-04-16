const St = imports.gi.St;
const Main = imports.ui.main;

let hibernateButton;

function init() {
  hibernateButton = new St.Bin({
    style_class: 'panel-button'
  });

  const buttonLabel = new St.Label({
    style_class: 'button__label',
    text: 'Hibernate'
  });

  hibernateButton.set_child(buttonLabel);
}

function enable() {

}

function disable() {

}
