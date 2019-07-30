import Internal from 'internal';
import Scene from 'scene';

import { ViewConfig } from './types';

class View {
  private _internal: Internal;
  private _index: number;

  constructor(config: ViewConfig) {
    this._internal = config.internal;
    this._index = config.index;
  }

  async getCurrentScene(): Promise<Scene> {
    // @TODO: Return current Scene instance
    const currentSceneIndex = await this._internal.exec(
      'AppGetPropertyAsync',
      `preset:${this._index}`
    );

    return new Scene({
      internal: this._internal,
      index: currentSceneIndex,
    });
  }
}

export default View;
