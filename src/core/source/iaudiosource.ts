/// <reference path="../../../defs/es6-promise.d.ts" />

import {Item as iItem} from '../../internal/item';
import {Environment} from '../environment';
import {Logger} from '../../internal/util/logger';
import {System} from '../../system/system';
import {MicrophoneDevice as MicrophoneDevice} from '../../system/microphone';

export interface ISourceAudio {

  /**
   * return: Promise<boolean>
   *
   * Check if silence detection is on or off
   */
  isSilenceDetectionEnabled(): Promise<boolean>;

  /**
   * param: (value: boolean)
   *
   * Set silence detection to ON or OFF
   */
  setSilenceDetectionEnabled(value: boolean): Promise<ISourceAudio>

  /**
   * return: Promise<number>
   *
   * Gets silenced detection threshold.
   * Amplitude less than threshold will be detected as silence.
   */
  getSilenceThreshold(): Promise<number>

  /**
   * param: (value: number)
   *
   * Sets silence detection threshold, min of 0, max of 128
   */
  setSilenceThreshold(value: number): Promise<ISourceAudio>

  /**
   * return: Promise<number>
   *
   * Gets silenced detection period in ms time unit.
   * Reaction time before filter removes noice/sound less than threshold
   */
  getSilencePeriod(): Promise<number>

  /**
   * param: (value: number)
   *
   * Sets silence detection period, min of 0, max of 10000
   */
  setSilencePeriod(value: number): Promise<ISourceAudio>

  /**
   * return: Promise<number>
   *
   * Gets audio delay (1 unit = 100ns)
   */
  getAudioOffset(): Promise<number>

  /**
   * param: (value: number)
   *
   * Sets audio delay, accepts only positive delay
   */
  setAudioOffset(value: number): Promise<ISourceAudio>

  /**
   * return: Promise<string>
   *
   * Gets the microphone device used as a source
   *
   *
   * #### Usage
   *
   * ```javascript
   * source.getValue().then(function(value) {
   *   // Do something with the value
   * });
   * ```
   */
  getValue(): Promise<string>;

  /**
   * param: (value: string)
   * ```
   * return: Promise<AudioSource>
   * ```
   *
   * Set the microphone device to be used as source
   *
   * #### Usage
   *
   * ```javascript
   * source.setValue('<microphone device>')
   *   .then(function(source) {
   *   // Promise resolves with same Source instance
   * });
   * ```
   */
  setValue(value: string): Promise<any>;
}

export class SourceAudio implements ISourceAudio {
  private _id: string;
  private _srcId: string;
  private _isItemCall: boolean;
  private _checkPromise;
  private _sceneId: string;

  private _updateId(id?: string, sceneId?: string) {
    this._id = id;
    this._sceneId = sceneId;
  }

  isSilenceDetectionEnabled(): Promise<boolean> {
    return new Promise(resolve => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'isSilenceDetectionEnabled', true)
        iItem.get('prop:AudioGainEnable', this._id).then(val => {
          resolve(val === '1');
        });
      } else {
        //wrapget
        iItem.wrapGet('prop:AudioGainEnable', this._srcId, this._id,
          this._updateId.bind(this)).then(val => {
          resolve(val === '1');
        });
      }
    });
  }

  setSilenceDetectionEnabled(value: boolean): Promise<SourceAudio> {
    return new Promise((resolve, reject) => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'setSilenceDetectionEnabled', true)
        iItem.set('prop:AudioGainEnable', (value ? '1' : '0'), this._id)
        .then(res => {
            resolve(this);
        });
      } else {
        //wrapset
        iItem.wrapSet('prop:AudioGainEnable', (value ? '1' : '0'),
          this._srcId, this._id, this._updateId.bind(this))
        .then(res => {
            resolve(this);
        });
      }
    });
  }

  getSilenceThreshold(): Promise<number> {
    return new Promise(resolve => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'getSilenceThreshold', true)
        iItem.get('prop:AudioGain', this._id).then(val => {
          resolve(Number(val));
        });
      } else {
        //wrapget
        iItem.wrapGet('prop:AudioGain', this._srcId, this._id, this._updateId.bind(this))
        .then(val => {
          resolve(Number(val));
        });
      }
    });
  }

  setSilenceThreshold(value: number): Promise<SourceAudio> {
    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        reject(Error('Only numbers are acceptable values for threshold'));
      } else if (value % 1 !== 0 || value < 0 || value > 128) {
        reject(
          Error('Only integers in the range 0-128 are acceptable for threshold')
        );
      } else {
        if(this._isItemCall){
          Logger.warn('sourceWarning', 'setSilenceThreshold', true)
          iItem.set('prop:AudioGain', String(value), this._id).then(res => {
            resolve(this);
          });
        } else {
          iItem.wrapSet('prop:AudioGain', String(value), this._srcId,
            this._id, this._updateId.bind(this)).then(res => {
            resolve(this);
          });
        }
      }
    });
  }

  getSilencePeriod(): Promise<number> {
    return new Promise(resolve => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'getSilencePeriod', true)
        iItem.get('prop:AudioGainLatency', this._id).then(val => {
          resolve(Number(val));
        });
      } else {
        iItem.wrapGet('prop:AudioGainLatency', this._srcId,
          this._id, this._updateId.bind(this)).then(val => {
          resolve(Number(val));
        });
      }
    });
  }

  setSilencePeriod(value: number): Promise<SourceAudio> {
    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        reject(Error('Only numbers are acceptable values for period'));
      } else if (value % 1 !== 0 || value < 0 || value > 10000) {
        reject(
          Error('Only integers in the range 0-10000 are acceptable for period')
        );
      } else {
        if(this._isItemCall){
          Logger.warn('sourceWarning', 'setSilencePeriod', true)
          iItem.set('prop:AudioGainLatency', String(value), this._id).then(res => {
            resolve(this);
          });
        } else {
          iItem.wrapSet('prop:AudioGainLatency', String(value), this._srcId,
            this._id, this._updateId.bind(this)).then(res => {
            resolve(this);
          });
        }
      }
    });
  }

  getAudioOffset(): Promise<number> {
    return new Promise(resolve => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'getAudioOffset', true)
        iItem.get('prop:AudioDelay', this._id).then(val => {
          resolve(Number(val));
        });
      } else {
        iItem.wrapGet('prop:AudioDelay', this._srcId, this._id,
          this._updateId.bind(this)).then(val => {
          resolve(Number(val));
        });
      }
    });
  }

  setAudioOffset(value: number): Promise<SourceAudio> {
    return new Promise((resolve, reject) => {
      if (typeof value !== 'number') {
        reject(Error('Only numbers are acceptable values for period'));
      }
      else if (value < 0) {
        reject(Error('Audio offset cannot be negative'));
      } else {
        if(this._isItemCall){
          Logger.warn('sourceWarning', 'setAudioOffset', true)
          iItem.set('prop:AudioDelay', String(value), this._id).then(res => {
            resolve(this);
          });
        } else {
          iItem.wrapSet('prop:AudioDelay', String(value), this._srcId,
            this._id, this._updateId.bind(this)).then(res => {
            resolve(this);
          });
        }
      }
    });
  }

  getValue(): Promise<string> {
    return new Promise(resolve => {
      if(this._isItemCall){
        Logger.warn('sourceWarning', 'getValue',  true)
        this._checkPromise = iItem.get('prop:srcitem', this._id)
      } else {
        this._checkPromise = iItem.wrapGet('prop:srcitem', this._srcId,
          this._id, this._updateId.bind(this))
      }
      this._checkPromise.then(filename => {
        resolve(filename);
      });
    });
  };

  setValue(micDevice: any): Promise<SourceAudio> {
    return new Promise((resolve, reject) => {
      let audioName;
      let _getName;
      if (micDevice instanceof MicrophoneDevice) {
        _getName = new Promise(innerResolve => {
          const name = micDevice.getName();
          micDevice = micDevice.getDisplayId();
          innerResolve(name)
        })
      } else if (typeof micDevice === 'string'){
        _getName = new Promise(innerResolve => {
          System.getMicrophones()
          .then(micDevices => {
            const camGiven = micDevices.filter(cam => {
              return cam.getDisplayId().toUpperCase() === micDevice.toUpperCase()
            })
            if (camGiven) {
              innerResolve(camGiven[0].getName())
            } else {
              innerResolve('');
            }
          })
        })
      } else {
        reject(TypeError('Parameter should either be a MicrophoneDevice or string.'));
      }
      _getName.then(name => {
        audioName = name;
        if(this._isItemCall){
          Logger.warn('sourceWarning', 'setValue', true);
          return iItem.set('prop:item', micDevice, this._id)  
        } else {
          return iItem.wrapSet('prop:srcitem', micDevice,
            this._srcId, this._id, this._updateId.bind(this))
        }
      }).then(() => {
        return iItem.set('prop:name', audioName, this._id)
      })
      .then(() => {
        resolve(this);
      });
    });
  }
}
