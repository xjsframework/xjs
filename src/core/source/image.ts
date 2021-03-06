import {applyMixins} from '../../internal/util/mixin';
import {Source} from '../source/source';
import {Item as iItem} from '../../internal/item';
import {XML} from '../../internal/util/xml';
import {SourceImage, ISourceImage} from './iimage';

/**
 * The ImageSource class represents the sources of the image items that
 * has been added to the stage. A single source could have multiple items linked
 * into it and any changes to the source would affect all items linked to it.
 *
 * Each item is represented by the ImageItem class.
 * See: {@link #core/ImageItem Core/ImageItem}
 *
 * Inherits from: {@link #core/Source Core/Source}
 *
 * ### Basic Usage
 *
 * ```javascript
 * var xjs = require('xjs');
 *
 * xjs.Scene.getActiveScene().then(function(scene) {
 *   scene.getSources().then(function(sources) {
 *   for (var i in sources) {
 *       if (sources[i] instanceof XJS.ImageSource) {
 *         // Manipulate your image source here
 *         sources[i].setSilenceDetectionEnabled(true);
 *       }
 *     }
 *   })
 * })
 * ```
 *
 * All methods marked as *Chainable* resolve with the original `ImageSource`
 * instance.
 */
export class ImageSource extends Source implements ISourceImage {

  /** See: {@link #core/ISourceImage#isSourceAvailable isSourceAvailable} */
  isSourceAvailable: () => Promise<boolean>

  /** See: {@link #core/ISourceImage#getValue getValue} */
  getValue: () => Promise<string>;

  /** See: {@link #core/ISourceImage#setValue setValue} */
  setValue: (value: string) => Promise<ImageSource>;
}

applyMixins(ImageSource, [SourceImage]);