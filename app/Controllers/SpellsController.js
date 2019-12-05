import SpellsService from "../Services/SpellsService.js";
import _store from "../store.js";

//Private
function _drawSpells() {
  let template = "";
  let spells = _store.State.spells;
  spells.forEach(cur => template+= `<li onclick="app.spellsController.selectSpellAsync('${cur.name}')">${cur.name}</li>`)
  document.getElementById('spell-list').innerHTML = template

  console.log(spells)
}

//Public
export default class SpellsController {
  constructor() {
     _store.subscribe("spells", _drawSpells);
     _drawSpells();
    console.log("Hello from the controller ");
  }
  async selectSpellAsync(name) {
    try {
      await SpellsService.selectSpellAsync(name);
    }catch (error){
      debugger;
      console.error(error);
    }
  }
}
