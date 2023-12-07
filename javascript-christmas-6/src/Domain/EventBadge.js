import { CONSTANT } from '../Util/Constants.js';

class EventBadge {
  static event(profit) {
    if (profit >= CONSTANT.santa[0]) return CONSTANT.santa[1];
    if (profit >= CONSTANT.tree[0]) return CONSTANT.tree[1];
    if (profit >= CONSTANT.star[0]) return CONSTANT.star[1];
    return CONSTANT.nothing;
  }
}
export default EventBadge;
