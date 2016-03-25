import Ember from 'ember';

const {
  computed,
  computed: { alias },
  defineProperty,
  get,
  observer,
  on
} = Ember;

export default function(dependentKey, aliasName) {
  return on('init', observer(dependentKey, function(){
    let dependentValue = get(this, dependentKey);
    if (dependentValue) {
      defineProperty(this, aliasName, alias(dependentValue));
    } else {
      defineProperty(this, aliasName, computed({
        get() {
          return null;
        },
        set() {
          Ember.assert(`You cannot set to a dynamic alias (\`${aliasName}\`) while the dependent key (\`${dependentKey}\`) is not present`, false);
        }
      }));
    }
  }));
}
