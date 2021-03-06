/* globals describe, require, beforeEach, spyOn, it, expect */

describe('Chroma interface', function() {
  'use strict';

  var XJS = require('xjs');
  var Scene = XJS.Scene;
  var mockPresetConfig = '<placement name="Scene 1" id="{219DB767-BE5B-4389-90C2-E712F08EA2CC}" defpos="1"><item name="D:\\Steam\\userdata\\47563014\\760\\remote\\49520\\screenshots\\20160415150211_1.jpg" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="0" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{48F4C8D1-98B1-4D71-B2FE-A282D96A4F48}" srcid="{C68A988D-A7E1-4CFD-9D43-F9B679736143}" globalsrc="0" type="4" item="D:\\Steam\\userdata\\47563014\\760\\remote\\49520\\screenshots\\20160415150211_1.jpg" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="HD Webcam C615" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="0.097325" pos_bottom="0.166448" crop_left="0.238860" crop_top="0.067084" crop_right="0.154044" crop_bottom="0.153907" pixalign="0" zorder="1" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{619F411F-DC09-4C5A-9289-60DA7BB37EAD}" srcid="{EECB686A-ED91-4292-837A-14293A56BB3C}" globalsrc="1" type="2" item="@DEVICE:PNP:\\\\?\\USB#VID_046D&amp;PID_082C&amp;MI_02#6&amp;37C59C5D&amp;0&amp;0002#{65E8773D-8F56-11D0-A3B9-00A0C9223196}\\GLOBAL" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="1" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="Window &quot;Jason Mraz - You Can Rely On Me&quot; in &quot;spotify.exe&quot; process" cname="" pos_left="0.630318" pos_top="0.911758" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.004108" crop_top="0.891450" crop_right="0.807230" crop_bottom="0.063354" pixalign="0" zorder="2" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{B9C539BF-7FAD-4F31-831F-436005C4DF83}" srcid="{43C1675E-551F-4BD0-A30A-C664821C34AD}" globalsrc="0" type="5" item="&lt;screen module=&quot;\\device\\harddiskvolume2\\users\\miyb\\appdata\\roaming\\spotify\\spotify.exe&quot; window=&quot;Jason Mraz - You Can Rely On Me&quot; hwnd=&quot;66234&quot; wclient=&quot;1&quot; left=&quot;0&quot; top=&quot;0&quot; width=&quot;0&quot; height=&quot;0&quot;/&gt; " itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="1" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="0" ScrCapShowClicks="0" ScrCapTrackWindowTitle="1" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="Game: Auto Detect" cname="" pos_left="0.000000" pos_top="0.837818" pos_right="0.162182" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="3" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{D80D839A-DCCD-428C-B7FE-9E1049752461}" srcid="{8AB8ADF6-6377-4982-AE13-BC3C3AA0AB93}" globalsrc="0" type="7" item="&lt;src pid=&quot;0&quot; handle=&quot;0&quot; hwnd=&quot;0&quot; GapiType=&quot;&quot; width=&quot;0&quot; height=&quot;0&quot; flags=&quot;0&quot; wndname=&quot;&quot; lastframets=&quot;0&quot; fpsRender=&quot;0.000000&quot; fpsCapture=&quot;0.000000&quot; imagename=&quot;&quot;/&gt; " itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="1" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="1" GameCapSurfSharing="1" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="1" GameCapTrackActiveFullscreen="0" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="RTMP Stream" cname="" pos_left="0.639014" pos_top="0.639014" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="4" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{E90CDC06-57D5-4AA9-8D1D-8F4EAE66BBAC}" srcid="{AB17F235-B09B-4FE3-B95E-A1553CFFD956}" globalsrc="0" type="6" item="C:\\Users\\MiYb\\AppData\\Local\\SplitMediaLabs\\XSplit\\miyb@splitmedialabs.com\\SwfPlugins2.0\\LiveStream\\LiveStream.swf*&lt;config&gt;&lt;params rtmp=&quot;rtmp://cp9950.edgefcs.net/ondemand/comedystor/_!/com/dailyshow/TDS/season_03/episode_100/ds_03100_08_blm_480.flv&quot; stream=&quot;sample&quot; smoothing=&quot;true&quot; buffer=&quot;1&quot;/&gt;&lt;/config&gt;" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="0" DllGrant="" custom="" /><item name="http://twitch.tv" cname="" pos_left="0.728700" pos_top="0.342676" pos_right="1.000000" pos_bottom="0.613976" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="5" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{0CE9E506-82BB-4DCB-B3DE-E9E202231E49}" srcid="{F0FCAF91-6E46-4C39-A6A3-02E5646AF014}" globalsrc="0" type="8" item="http://twitch.tv" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="C:\\Users\\MiYb\\Videos\\2016-03-28-1859-59.flv" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="0.147235" pos_bottom="0.147235" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="6" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{F507B557-8F72-4CE0-8711-D75AE9846947}" srcid="{72A17CD7-7534-44D8-995B-20D27E8EF7A7}" globalsrc="0" type="1" item="C:\\Users\\MiYb\\Videos\\2016-03-28-1859-59.flv" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="1" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="0" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /></placement>';

  var local = {};
  var attachedId;
  var enumeratedItems;
  var appVersion = navigator.appVersion;

  var env = new window.Environment(XJS);
  var environments = {
    SOURCE : 'plugin',
    SOURCEPROPS : 'props',
    EXTENSION : 'extension'
  };

  var ctr = 0;

  var parseXml = function(xmlStr) {
      return ( new window.DOMParser() ).parseFromString(xmlStr, 'text/xml');
  };

  var xCallback = function(id, result) {
    setTimeout(function() {
      window.OnAsyncCallback(id, result);
    }, 10);
  };

  var getLocal = function(property) {
    ctr++;
    var asyncId = 'ichroma_' + ctr;

    if (property.substring(0, 5) === 'prop:') {
      property = property.replace(/^prop:/, '');
    }

    if (property.substring(0, 3) === 'src') {
      property = property.substring(3);
    }

    if (local[attachedId] !== undefined && local[attachedId].hasOwnProperty(
      property)) {
      xCallback(asyncId, local[attachedId][property]);
    } else {
      var placement = parseXml(mockPresetConfig)
        .getElementsByTagName('placement')[0];
      var selected = '[id="' + attachedId + '"]';
      var itemSelected = placement.querySelector(selected);
      xCallback(asyncId, itemSelected.getAttribute(property));
    }

    return asyncId;
  };

  var setLocal = function(property, value) {
    ctr++;
    var asyncId = 'ichroma_' + ctr;

    if (property.substring(0, 5) === 'prop:') {
      property = property.replace(/^prop:/, '');
    }

    if (local[attachedId] === undefined) {
      local[attachedId] = {};
    }

    local[attachedId][property] = value;
    xCallback(asyncId, '0');
    return asyncId;
  };

  var firstItem;
  var secondItem;

  beforeEach(function(done) {
    env.set(environments.EXTENSION); // for maximum flexibility/functionality

    navigator.__defineGetter__('appVersion', function() {
      return 'XSplit Broadcaster 2.7.1702.2231 ';
    });

    // reset attached IDs
    var item1 = new XJS.Item({id : '{ID}'});
    var item2 = new XJS.Item({id : '{ID2}'});

    local = {};

    spyOn(window.external, 'AppGetPropertyAsync')
    .and.callFake(function(funcName) {
	    ctr++;
	    var asyncId = 'ichroma_' + ctr;
      switch (funcName) {
        case 'sceneconfig:0':
          xCallback(asyncId, encodeURIComponent(mockPresetConfig));
          break;

        case 'sceneconfig':
          xCallback(asyncId, encodeURIComponent(mockPresetConfig));
          break;

        case 'scene:0':
          xCallback(asyncId, '0');
          break;
      }

      return asyncId;
    });

    spyOn(window.external, 'SearchVideoItem')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'SearchVideoItem2')
    .and.callFake(function(id) {
      attachedId = id;
    });

    spyOn(window.external, 'GetLocalPropertyAsync')
    .and.callFake(getLocal);

    spyOn(window.external, 'GetLocalPropertyAsync2')
    .and.callFake(getLocal);

    spyOn(window.external, 'SetLocalPropertyAsync')
    .and.callFake(setLocal);

    spyOn(window.external, 'SetLocalPropertyAsync2')
    .and.callFake(setLocal);

    Scene.getActiveScene().then(function(newScene) {
      return newScene.getItems();
    }).then(function(items) {
      enumeratedItems = items;
      firstItem = enumeratedItems[0];
      secondItem = enumeratedItems[1];
      done();
    });
  });

  afterAll(function() {
    navigator.__defineGetter__('appVersion', function() {
      return appVersion;
    });
  });

  it('contains all the necessary chroma methods', function() {
    var methods = [
      'isChromaEnabled',
      'setChromaEnabled',
      'getKeyingType',
      'setKeyingType',
      'getChromaAntiAliasLevel',
      'setChromaAntiAliasLevel',
      'getChromaLegacyBrightness',
      'setChromaLegacyBrightness',
      'getChromaLegacySaturation',
      'setChromaLegacySaturation',
      'getChromaLegacyHue',
      'setChromaLegacyHue',
      'getChromaLegacyThreshold',
      'setChromaLegacyThreshold',
      'getChromaLegacyAlphaSmoothing',
      'setChromaLegacyAlphaSmoothing',
      'getChromaRGBKeyPrimaryColor',
      'setChromaRGBKeyPrimaryColor',
      'getChromaRGBKeyThreshold',
      'setChromaRGBKeyThreshold',
      'getChromaRGBKeyExposure',
      'setChromaRGBKeyExposure',
      'getChromaColorKeyThreshold',
      'setChromaColorKeyThreshold',
      'getChromaColorKeyExposure',
      'setChromaColorKeyExposure',
      'getChromaColorKeyColor',
      'setChromaColorKeyColor'
      ].join(',');

    enumeratedItems.forEach(function(currentItem) {
      expect(currentItem).hasMethods(methods);
    });
  });

  describe('should be able to get and set if chroma is enabled', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.isChromaEnabled();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a boolean', function(done) {
      var firstBoolean = randomBoolean();
      var secondBoolean = randomBoolean();

      firstItem.setChromaEnabled(firstBoolean)
      .then(function() {
        return secondItem.setChromaEnabled(secondBoolean);
      }).then(function() {
        return firstItem.isChromaEnabled();
      }).then(function(enabled1) {
        expect(enabled1).toBeTypeOf('boolean');
        expect(enabled1).toEqual(firstBoolean);
        return secondItem.isChromaEnabled();
      }).then(function(enabled2) {
        expect(enabled2).toBeTypeOf('boolean');
        expect(enabled2).toEqual(secondBoolean);
        return firstItem.setChromaEnabled(!firstBoolean);
      }).then(function() {
        return firstItem.isChromaEnabled();
      }).then(function(enabled3) {
        expect(enabled3).toEqual(!firstBoolean);
        done();
      })
    });
  });

  describe('should be able to get and set keying type', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getKeyingType();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var keyingType = [
        XJS.KeyingType.LEGACY,
        XJS.KeyingType.COLORKEY,
        XJS.KeyingType.RGBKEY
      ];

      var firstRand = keyingType[randomInt(0,2)];
      var secondRand = keyingType[randomInt(0,2)];

      firstItem.setKeyingType(firstRand)
      .then(function() {
        return secondItem.setKeyingType(secondRand);
      }).then(function() {
        return firstItem.getKeyingType();
      }).then(function(keying1) {
        expect(keying1).toBeTypeOf('number');
        expect(keying1).toEqual(firstRand);
        return secondItem.getKeyingType();
      }).then(function(keying2) {
        expect(keying2).toBeTypeOf('number');
        expect(keying2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(3);

      firstItem.setKeyingType(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setKeyingType(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma antialising level', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaAntiAliasLevel();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var ChromaAntiAliasLevel = [
        XJS.ChromaAntiAliasLevel.NONE,
        XJS.ChromaAntiAliasLevel.LOW,
        XJS.ChromaAntiAliasLevel.HIGH
      ];

      var firstRand = ChromaAntiAliasLevel[randomInt(0,2)];
      var secondRand = ChromaAntiAliasLevel[randomInt(0,2)];

      firstItem.setChromaAntiAliasLevel(firstRand)
      .then(function() {
        return secondItem.setChromaAntiAliasLevel(secondRand);
      }).then(function() {
        return firstItem.getChromaAntiAliasLevel();
      }).then(function(aalevel1) {
        expect(aalevel1).toBeTypeOf('number');
        expect(aalevel1).toEqual(firstRand);
        return secondItem.getChromaAntiAliasLevel();
      }).then(function(aalevel2) {
        expect(aalevel2).toBeTypeOf('number');
        expect(aalevel2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(3);

      firstItem.setChromaAntiAliasLevel(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaAntiAliasLevel(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma legacy brightness', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaLegacyBrightness();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaLegacyBrightness(firstRand)
      .then(function() {
        return secondItem.setChromaLegacyBrightness(secondRand);
      }).then(function() {
        return firstItem.getChromaLegacyBrightness();
      }).then(function(brightness1) {
        expect(brightness1).toBeTypeOf('number');
        expect(brightness1).toEqual(firstRand);
        return secondItem.getChromaLegacyBrightness();
      }).then(function(brightness2) {
        expect(brightness2).toBeTypeOf('number');
        expect(brightness2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaLegacyBrightness(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaLegacyBrightness(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma legacy saturation', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaLegacySaturation();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaLegacySaturation(firstRand)
      .then(function() {
        return secondItem.setChromaLegacySaturation(secondRand);
      }).then(function() {
        return firstItem.getChromaLegacySaturation();
      }).then(function(saturation1) {
        expect(saturation1).toBeTypeOf('number');
        expect(saturation1).toEqual(firstRand);
        return secondItem.getChromaLegacySaturation();
      }).then(function(saturation2) {
        expect(saturation2).toBeTypeOf('number');
        expect(saturation2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaLegacySaturation(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaLegacySaturation(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma legacy hue', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaLegacyHue();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,180);
      var secondRand = randomInt(0,180);

      firstItem.setChromaLegacyHue(firstRand)
      .then(function() {
        return secondItem.setChromaLegacyHue(secondRand);
      }).then(function() {
        return firstItem.getChromaLegacyHue();
      }).then(function(hue1) {
        expect(hue1).toBeTypeOf('number');
        expect(hue1).toEqual(firstRand);
        return secondItem.getChromaLegacyHue();
      }).then(function(hue2) {
        expect(hue2).toBeTypeOf('number');
        expect(hue2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(181, 1000);

      firstItem.setChromaLegacyHue(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaLegacyHue(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma legacy threshold', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaLegacyThreshold();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaLegacyThreshold(firstRand)
      .then(function() {
        return secondItem.setChromaLegacyThreshold(secondRand);
      }).then(function() {
        return firstItem.getChromaLegacyThreshold();
      }).then(function(threshold1) {
        expect(threshold1).toBeTypeOf('number');
        expect(threshold1).toEqual(firstRand);
        return secondItem.getChromaLegacyThreshold();
      }).then(function(threshold2) {
        expect(threshold2).toBeTypeOf('number');
        expect(threshold2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaLegacyThreshold(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaLegacyThreshold(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma legacy alpha smoothing', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaLegacyAlphaSmoothing();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaLegacyAlphaSmoothing(firstRand)
      .then(function() {
        return secondItem.setChromaLegacyAlphaSmoothing(secondRand);
      }).then(function() {
        return firstItem.getChromaLegacyAlphaSmoothing();
      }).then(function(smoothing1) {
        expect(smoothing1).toBeTypeOf('number');
        expect(smoothing1).toEqual(firstRand);
        return secondItem.getChromaLegacyAlphaSmoothing();
      }).then(function(smoothing2) {
        expect(smoothing2).toBeTypeOf('number');
        expect(smoothing2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaLegacyAlphaSmoothing(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaLegacyAlphaSmoothing(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set keying type', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaRGBKeyPrimaryColor();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var chromaPrimaryColors = [
        XJS.ChromaPrimaryColors.RED,
        XJS.ChromaPrimaryColors.GREEN,
        XJS.ChromaPrimaryColors.BLUE
      ];

      var firstRand = chromaPrimaryColors[randomInt(0,2)];
      var secondRand = chromaPrimaryColors[randomInt(0,2)];

      firstItem.setChromaRGBKeyPrimaryColor(firstRand)
      .then(function() {
        return secondItem.setChromaRGBKeyPrimaryColor(secondRand);
      }).then(function() {
        return firstItem.getChromaRGBKeyPrimaryColor();
      }).then(function(color1) {
        expect(color1).toBeTypeOf('number');
        expect(color1).toEqual(firstRand);
        return secondItem.getChromaRGBKeyPrimaryColor();
      }).then(function(color2) {
        expect(color2).toBeTypeOf('number');
        expect(color2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(3);

      firstItem.setChromaRGBKeyPrimaryColor(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaRGBKeyPrimaryColor(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma rgb key threshold', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaRGBKeyThreshold();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaRGBKeyThreshold(firstRand)
      .then(function() {
        return secondItem.setChromaRGBKeyThreshold(secondRand);
      }).then(function() {
        return firstItem.getChromaRGBKeyThreshold();
      }).then(function(threshold1) {
        expect(threshold1).toBeTypeOf('number');
        expect(threshold1).toEqual(firstRand);
        return secondItem.getChromaRGBKeyThreshold();
      }).then(function(threshold2) {
        expect(threshold2).toBeTypeOf('number');
        expect(threshold2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaRGBKeyThreshold(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaRGBKeyThreshold(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma rgb key exposure', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaRGBKeyExposure();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaRGBKeyExposure(firstRand)
      .then(function() {
        return secondItem.setChromaRGBKeyExposure(secondRand);
      }).then(function() {
        return firstItem.getChromaRGBKeyExposure();
      }).then(function(exposure1) {
        expect(exposure1).toBeTypeOf('number');
        expect(exposure1).toEqual(firstRand);
        return secondItem.getChromaRGBKeyExposure();
      }).then(function(exposure2) {
        expect(exposure2).toBeTypeOf('number');
        expect(exposure2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaRGBKeyExposure(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaRGBKeyExposure(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma color key threshold', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaColorKeyThreshold();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaColorKeyThreshold(firstRand)
      .then(function() {
        return secondItem.setChromaColorKeyThreshold(secondRand);
      }).then(function() {
        return firstItem.getChromaColorKeyThreshold();
      }).then(function(threshold1) {
        expect(threshold1).toBeTypeOf('number');
        expect(threshold1).toEqual(firstRand);
        return secondItem.getChromaColorKeyThreshold();
      }).then(function(threshold2) {
        expect(threshold2).toBeTypeOf('number');
        expect(threshold2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaColorKeyThreshold(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaColorKeyThreshold(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma color key exposure', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaColorKeyExposure();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,255);
      var secondRand = randomInt(0,255);

      firstItem.setChromaColorKeyExposure(firstRand)
      .then(function() {
        return secondItem.setChromaColorKeyExposure(secondRand);
      }).then(function() {
        return firstItem.getChromaColorKeyExposure();
      }).then(function(exposure1) {
        expect(exposure1).toBeTypeOf('number');
        expect(exposure1).toEqual(firstRand);
        return secondItem.getChromaColorKeyExposure();
      }).then(function(exposure2) {
        expect(exposure2).toBeTypeOf('number');
        expect(exposure2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(256, 1000);

      firstItem.setChromaColorKeyExposure(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaColorKeyExposure(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set chroma color key color', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getChromaColorKeyColor();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a Color object', function(done) {
      var randomColorKey = randomColor();
      var colorObj = XJS.Color.fromRGBString(randomColorKey);

      firstItem.setChromaColorKeyColor(randomColorKey)
      .then(function() {
        done.fail('Invalid type was accepted');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setChromaColorKeyColor(colorObj)
      }).then(function() {
      	return firstItem.getChromaColorKeyColor();
      }).then(function(color) {
        expect(color.getRgb()).toEqual(color.getRgb());
        done();
      })
    });
  });
});
