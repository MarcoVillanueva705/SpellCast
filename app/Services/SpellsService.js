import _store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
let _sandbox = axios.create({
  baseURL:'https://bcw-sandbox.herokuapp.com/api/marco/spells',
  timeout:3000
})

// @ts-ignore
let _spellsApi = axios.create({
  baseURL:'http://bcw-sandbox.herokuapp.com/api/spells',
  timeout:3000
})


class SpellsService {

  async selectSpellAsync(name) {
  let res = await _spellsApi.get(name);
  console.log("from select Spell res", res); 
  let theActiveSpell = new Spell(res.data);
  _store.commit("activeSpell", theActiveSpell);
  console.log("from store", _store.State.activeSpell);
  }
  constructor()
{
  console.log("hello from services")
}}

const service = new SpellsService();
export default service;
