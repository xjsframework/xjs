/// <reference path="../../defs/es6-promise.d.ts" />

import {exec} from './internal';
import {Environment} from '../core/environment';
import {App as iApp} from '../internal/app';
import {minVersion, versionCompare, getVersion} from './util/version';
import {Source} from '../core/source/source'
import {Scene} from '../core/scene'

export class Item {
  private static baseID: string;

  private static MAX_SLOTS: number = 2;
  private static lastSlot: number = Item.MAX_SLOTS - 1;
  private static itemSlotMap: string[] = [];
  private static islockedSourceSlot: boolean = false;

  /** Prepare an item for manipulation */
  static attach(itemID: string, callBack?: Function): Promise<Number> {
    return new Promise(resolve => {
      let slot = Item.itemSlotMap.indexOf(itemID);
      if (slot === -1) {
        slot = ++Item.lastSlot % Item.MAX_SLOTS;
        if (Item.islockedSourceSlot && slot === 0) {
          ++slot; // source cannot attach to first slot
        }
        Item.lastSlot = slot;
        Item.itemSlotMap[slot] = itemID;
      }

      if (!Environment.isSourcePlugin()) {
        exec('SearchVideoItem' +
          (String(slot) === '0' ? '' : (slot + 1)),
          itemID
        );
      } else {
        let hasGlobalSources = versionCompare(getVersion())
        .is
        .greaterThan(minVersion);

        if (hasGlobalSources) {
          exec('AttachVideoItem' + (slot + 1),
            itemID
          );
        } else {
          exec('AttachVideoItem' +
            (String(slot) === '0' ? '' : (slot + 1)),
            itemID
          );
        }
      }

      if (callBack) {
        callBack.call(this, slot)
      } else {
        resolve(slot);
      }
    })
  }

  /** used for source plugins. lock an id to slot 0 */
  static lockSourceSlot(itemID: string) {
    if (itemID !== undefined) {
      Item.islockedSourceSlot = true;
      Item.itemSlotMap[0] = itemID;
    } else {
      Item.islockedSourceSlot = false;
      Item.itemSlotMap[0] = '';
    }
  }

  /**
   * Helper function to check if the supplied item id still exist.
   */
  static wrapGet(name: string, srcId?: string, id?:string, updateId?: Function) {
    return new Promise(resolve => {
      if(versionCompare(getVersion())
        .is
        .lessThan(minVersion)) {
        Item.get(name, id).then(val => {
          resolve(val);
        });
      } else {
        Item.get('itemlist', id).then(itemlist => {
          return new Promise<string>(resolveInner => {
            const itemsArray = itemlist.split(',');
            let secondJsonArr = [];
            if ((itemsArray.indexOf(id) > -1) && (itemsArray.length > 0) && (itemsArray[0] !== 'null')) {
              resolveInner(itemsArray[0]);
            } else {
              let idMatch, sceneMatch;
              iApp.getAsItemList('sceneconfig')
              .then(jsonArr => {
                for (var i = 0; i < jsonArr.length; i++) {
                  if (jsonArr[i] !== undefined) {
                    if (jsonArr[i]['srcid'] === srcId) {
                      sceneMatch = i;
                      idMatch = jsonArr[i]['id'];
                      break;
                    }
                  }
                  if (idMatch !== undefined) {
                    break;
                  }
                }
                if (idMatch !== undefined) {
                  return new Promise<string>( previewResolve => {
                    previewResolve('');
                  });
                } else {
                  return new Promise<string>( (previewResolve, previewReject) => {
                    iApp.getAsItemList('sceneconfig:i12')
                    .then(previewJSONArr => {
                      let previewMatch = '';
                      for (var k = 0; k < previewJSONArr.length; ++k) {
                        if (previewJSONArr[k]['srcid'] === srcId) {
                          previewMatch = previewJSONArr[k]['id'];
                          break;
                        }
                      }
                      previewResolve(previewMatch);
                    }).catch(e => {
                      previewReject(e);
                    });
                  });
                }
              }).then(previewId => {
                if (previewId !== '') {
                  idMatch = previewId;
                  sceneMatch = 'i12';
                }
                if (idMatch !== undefined) {
                  updateId(idMatch, sceneMatch);
                  resolveInner(idMatch);
                } else {
                  resolveInner(id);
                }
              }).catch(e => {
                resolveInner(id);
              });
            }
          })
        }).then(resultId => {
          Item.get(name, resultId).then(val => {
            resolve(val);
          });
        });
      }
    });
  }

  /** Get an item's local property asynchronously */
  static get(name: string, id?: string): Promise<string> {
    return new Promise(resolve => {
      let hasGlobalSources = versionCompare(getVersion())
      .is
      .greaterThan(minVersion);

      const execCallFunc = (slot) => {
        if ((!Environment.isSourcePlugin() && String(slot) === '0') ||
          (
            Environment.isSourcePlugin() &&
            String(slot) === '0' &&
            !hasGlobalSources
          )) {
            slot = -1
          }

        exec('GetLocalPropertyAsync' +
          (String(slot) === '-1' ? '' : Number(slot) + 1),
          name,
          val => {
            resolve(val);
          });
      }

      const checkSlot = (recId) => {
        if (id) {
          Item.attach(id, execCallFunc)
        } else {
          execCallFunc(-1)
        }
      }

      checkSlot(id)
    })
  }

  /**
   * Helper function to check if the supplied item id still exist.
   */
  static wrapSet(name: string, value:string,
        srcId?:string, id?:string, updateId?: Function) {
    return new Promise(resolve => {
      if(versionCompare(getVersion())
        .is
        .lessThan(minVersion)) {
        Item.set(name, value, id).then(val => {
          resolve(val);
        });
      } else {
        Item.get('itemlist', id).then(itemlist => {
          return new Promise<string>(resolveInner => {
            const itemsArray = itemlist.split(',');
            let secondJsonArr = [];
            if ((itemsArray.indexOf(id) > -1) && (itemsArray.length > 0) &&
                (itemsArray[0] !== 'null')) {
              resolveInner(itemsArray[0]);
            } else {
              let idMatch, sceneMatch;
              iApp.getAsItemList('sceneconfig')
              .then(jsonArr => {
                for (var i = 0; i < jsonArr.length; i++) {
                  if (jsonArr[i] !== undefined) {
                    if (jsonArr[i]['srcid'] === srcId) {
                      sceneMatch = i;
                      idMatch = jsonArr[i]['id'];
                      break;
                    }
                  }
                  if (idMatch !== undefined) {
                    break;
                  }
                }
                if (idMatch !== undefined) {
                  return new Promise<string>( previewResolve => {
                    previewResolve('');
                  });
                } else {
                  return new Promise<string>( (previewResolve, previewReject) => {
                    iApp.getAsItemList('sceneconfig:i12')
                    .then(previewJSONArr => {
                      let previewMatch = '';
                      for (var k = 0; k < previewJSONArr.length; ++k) {
                        if (previewJSONArr[k]['srcid'] === srcId) {
                          previewMatch = previewJSONArr[k]['id'];
                          break;
                        }
                      }
                      previewResolve(previewMatch);
                    }).catch(e => {
                      previewReject(e);
                    });
                  });
                }
              }).then(previewId => {
                if (previewId !== '') {
                  idMatch = previewId;
                  sceneMatch = 'i12';
                }
                if (idMatch !== undefined) {
                  updateId(idMatch, sceneMatch);
                  resolveInner(idMatch);
                } else {
                  resolveInner(id);
                }
              }).catch(e => {
                resolveInner(id);
              });
            }
          })
        }).then(resultId => {
          Item.set(name, value, resultId).then(val => {
            resolve(val);
          });
        });
      }
    });
  }

  /** Sets an item's local property */
  static set(name: string, value: string, id?: string): Promise<boolean> {
    return new Promise(resolve => {
      let slotPromise;
      let slot;
      if (id !== undefined && id !== null) {
        slotPromise = new Promise( slotResolve => {
          Item.attach(id).then(res => {
            slotResolve(res);
          });
        });
      } else {
        slotPromise = new Promise( slotResolve => {
          slotResolve(-1);
        });
      }
      slotPromise.then( newSlot => {
        slot = newSlot;

        let hasGlobalSources = versionCompare(getVersion())
          .is
          .greaterThan(minVersion);

        if (
          (!Environment.isSourcePlugin() && String(slot) === '0') ||
          (
            Environment.isSourcePlugin() &&
            String(slot) === '0' &&
            !hasGlobalSources
          )
        ) {
          slot = -1;
        }
        exec('SetLocalPropertyAsync' +
          (String(slot) === '-1' ? '' : slot + 1),
          name,
          value,
          val => {
            resolve(!(Number(val) < 0));
          });
      });
    });
  }

  /** For SourceProps and XBC version 2.7 below */
  static setBaseId(id: string): void {
    Item.baseID = id;
  }

  /** For SourceProps and XBC version 2.7 below */
  static getBaseId(): string {
    return Item.baseID;
  }
}
