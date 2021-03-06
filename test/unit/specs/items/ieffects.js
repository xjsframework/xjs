/* globals describe, require, beforeEach, spyOn, it, expect */

describe('Effects interface', function() {
  'use strict';

  var XJS = require('xjs');
  var Scene = XJS.Scene;
  var mockPresetConfig = '<placement name="Scene 1" id="{219DB767-BE5B-4389-90C2-E712F08EA2CC}" defpos="1"><item name="D:\\Steam\\userdata\\47563014\\760\\remote\\49520\\screenshots\\20160415150211_1.jpg" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="0" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{48F4C8D1-98B1-4D71-B2FE-A282D96A4F48}" srcid="{C68A988D-A7E1-4CFD-9D43-F9B679736143}" globalsrc="0" type="4" item="D:\\Steam\\userdata\\47563014\\760\\remote\\49520\\screenshots\\20160415150211_1.jpg" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="HD Webcam C615" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="0.097325" pos_bottom="0.166448" crop_left="0.238860" crop_top="0.067084" crop_right="0.154044" crop_bottom="0.153907" pixalign="0" zorder="1" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{619F411F-DC09-4C5A-9289-60DA7BB37EAD}" srcid="{EECB686A-ED91-4292-837A-14293A56BB3C}" globalsrc="1" type="2" item="@DEVICE:PNP:\\\\?\\USB#VID_046D&amp;PID_082C&amp;MI_02#6&amp;37C59C5D&amp;0&amp;0002#{65E8773D-8F56-11D0-A3B9-00A0C9223196}\\GLOBAL" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="1" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="Window &quot;Jason Mraz - You Can Rely On Me&quot; in &quot;spotify.exe&quot; process" cname="" pos_left="0.630318" pos_top="0.911758" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.004108" crop_top="0.891450" crop_right="0.807230" crop_bottom="0.063354" pixalign="0" zorder="2" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{B9C539BF-7FAD-4F31-831F-436005C4DF83}" srcid="{43C1675E-551F-4BD0-A30A-C664821C34AD}" globalsrc="0" type="5" item="&lt;screen module=&quot;\\device\\harddiskvolume2\\users\\miyb\\appdata\\roaming\\spotify\\spotify.exe&quot; window=&quot;Jason Mraz - You Can Rely On Me&quot; hwnd=&quot;66234&quot; wclient=&quot;1&quot; left=&quot;0&quot; top=&quot;0&quot; width=&quot;0&quot; height=&quot;0&quot;/&gt; " itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="1" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="0" ScrCapShowClicks="0" ScrCapTrackWindowTitle="1" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="Game: Auto Detect" cname="" pos_left="0.000000" pos_top="0.837818" pos_right="0.162182" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="3" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{D80D839A-DCCD-428C-B7FE-9E1049752461}" srcid="{8AB8ADF6-6377-4982-AE13-BC3C3AA0AB93}" globalsrc="0" type="7" item="&lt;src pid=&quot;0&quot; handle=&quot;0&quot; hwnd=&quot;0&quot; GapiType=&quot;&quot; width=&quot;0&quot; height=&quot;0&quot; flags=&quot;0&quot; wndname=&quot;&quot; lastframets=&quot;0&quot; fpsRender=&quot;0.000000&quot; fpsCapture=&quot;0.000000&quot; imagename=&quot;&quot;/&gt; " itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="1" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="1" GameCapSurfSharing="1" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="1" GameCapTrackActiveFullscreen="0" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="RTMP Stream" cname="" pos_left="0.639014" pos_top="0.639014" pos_right="1.000000" pos_bottom="1.000000" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="4" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{E90CDC06-57D5-4AA9-8D1D-8F4EAE66BBAC}" srcid="{AB17F235-B09B-4FE3-B95E-A1553CFFD956}" globalsrc="0" type="6" item="C:\\Users\\MiYb\\AppData\\Local\\SplitMediaLabs\\XSplit\\miyb@splitmedialabs.com\\SwfPlugins2.0\\LiveStream\\LiveStream.swf*&lt;config&gt;&lt;params rtmp=&quot;rtmp://cp9950.edgefcs.net/ondemand/comedystor/_!/com/dailyshow/TDS/season_03/episode_100/ds_03100_08_blm_480.flv&quot; stream=&quot;sample&quot; smoothing=&quot;true&quot; buffer=&quot;1&quot;/&gt;&lt;/config&gt;" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="0" DllGrant="" custom="" /><item name="http://twitch.tv" cname="" pos_left="0.728700" pos_top="0.342676" pos_right="1.000000" pos_bottom="0.613976" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="5" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="0" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{0CE9E506-82BB-4DCB-B3DE-E9E202231E49}" srcid="{F0FCAF91-6E46-4C39-A6A3-02E5646AF014}" globalsrc="0" type="8" item="http://twitch.tv" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="0" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="-1" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /><item name="C:\\Users\\MiYb\\Videos\\2016-03-28-1859-59.flv" cname="" pos_left="0.000000" pos_top="0.000000" pos_right="0.147235" pos_bottom="0.147235" crop_left="0.000000" crop_top="0.000000" crop_right="0.000000" crop_bottom="0.000000" pixalign="0" zorder="6" lockmove="0" keep_ar="1" visible="1" alpha="255" border="0" cc_brightness="0" cc_contrast="0" cc_hue="0" cc_saturation="0" cc_dynamicrange="1" key_antialiasing="2" key_chromakey="0" key_chromakeytype="0" key_chromahue="0" key_chromarang="25" key_chromaranga="0" key_chromabr="25" key_chromasat="25" key_colorrgb="0" key_colorrang="25" key_colorranga="0" key_chromargbkeyprimary="1" key_chromargbkeythresh="50" key_chromargbkeybalance="0" rotate_x="0" rotate_y="0" rotate_z="0" rotate_canvas="0" offset_x="0.000000" offset_y="0.000000" transitionid="" transitiontime="300" edgeeffectid="" edgeeffectcfg="" edgeeffectmask="" edgeeffectmaskmode="0" id="{F507B557-8F72-4CE0-8711-D75AE9846947}" srcid="{72A17CD7-7534-44D8-995B-20D27E8EF7A7}" globalsrc="0" type="1" item="C:\\Users\\MiYb\\Videos\\2016-03-28-1859-59.flv" itemaudio="" volume="100" mute="0" sounddev="0" fdeinterlace="0" mipmaps="0" autoresdet="1" keeploaded="0" cc_pin="0" key_pin="0" key_smartcamenable="0" key_smartcamconfig="" key_rssmartcamconfig="" tobii="0" tobiiconfig="decay:0.970000&amp;str:0.900000&amp;rad:0.070000&amp;color:2155905152" StreamDelay="0" AudioDelay="0" AudioGainEnable="0" AudioGain="5" AudioGainLatency="1000" LiveClockSync="0" InPoint="0" OutPoint="0" CuePoints="" FilePlaylist="" OpWhenFinished="1" StartOnLoad="1" RememberPosition="1" LastPosition="0" LastRunState="0" ShowPosition="0" ScrCapMethod="3" ScrCapLayered="0" ScrCapOptCapture="0" ScrCapOptCapture1="1" ScrCapIntResize="0" ScrCapShowMouse="1" ScrCapShowClicks="1" ScrCapTrackWindowTitle="0" GameCapShowMouse="0" GameCapSurfSharing="0" GameCapAlpha="0" GameCapPlSmooth="0" GameCapTrackActive="0" GameCapTrackActiveFullscreen="1" GameCapHideInactive="0" BrowserJs="" BrowserSizeX="0" BrowserSizeY="0" BrowserTransparent="1" BrowserRightClick="0" BrowserCookiePath="" BrowserCookieFlags="0" Browser60fps="0" SwfWrapper="1" DllGrant="" custom="" /></placement>';

  var Filter = XJS.Filter;

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
    var asyncId = 'ieffect_' + ctr;

    if (property.substring(0, 5) === 'prop:') {
      property = property.replace(/^prop:/, '');
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
    var asyncId = 'ieffect_' + ctr;

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
	    var asyncId = 'ieffect_' + ctr;
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

  it('contains all the necessary effects methods', function() {
    var methods = [
      'getMaskEffect',
      'setMaskEffect',
      'getBorderEffectRadius',
      'setBorderEffectRadius',
      'getBorderEffectThickness',
      'setBorderEffectThickness',
      'getBorderEffectOpacity',
      'setBorderEffectOpacity',
      'getBorderEffectColor',
      'setBorderEffectColor',
      'getShadowEffectThickness',
      'setShadowEffectThickness',
      'getShadowEffectBlur',
      'setShadowEffectBlur',
      'getShadowEffectOpacity',
      'setShadowEffectOpacity',
      'getShadowEffectOffsetX',
      'setShadowEffectOffsetX',
      'getShadowEffectOffsetY',
      'setShadowEffectOffsetY',
      'getFileMask',
      'setFileMask',
      'isFileMaskingGuideVisible',
      'showFileMaskingGuide'
      ].join(',');

    enumeratedItems.forEach(function(currentItem) {
      expect(currentItem).hasMethods(methods);
    });
  });

  describe('should be able to get and set mask effect', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getMaskEffect();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var keyingType = [
        XJS.MaskEffect.NONE,
        XJS.MaskEffect.SHAPE,
        XJS.MaskEffect.FILE_BIND_TO_SOURCE,
        XJS.MaskEffect.FILE_BIND_TO_STAGE
      ];

      var firstRand = keyingType[randomInt(0,3)];
      var secondRand = keyingType[randomInt(0,3)];

      firstItem.setMaskEffect(firstRand)
      .then(function() {
        return secondItem.setMaskEffect(secondRand);
      }).then(function() {
        return firstItem.getMaskEffect();
      }).then(function(effect1) {
        expect(effect1).toBeTypeOf('number');
        expect(effect1).toEqual(firstRand);
        return secondItem.getMaskEffect();
      }).then(function(effect2) {
        expect(effect2).toBeTypeOf('number');
        expect(effect2).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomInt(4);

      firstItem.setMaskEffect(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setMaskEffect(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set border effect radius', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getBorderEffectRadius();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setBorderEffectRadius(firstRand)
      .then(function() {
        return secondItem.setBorderEffectRadius(secondRand);
      }).then(function() {
        return firstItem.getBorderEffectRadius();
      }).then(function(radius1) {
        expect(radius1).toBeTypeOf('number');
        expect(Math.round(radius1)).toEqual(firstRand);
        return secondItem.getBorderEffectRadius();
      }).then(function(radius2) {
        expect(radius2).toBeTypeOf('number');
        expect(Math.round(radius2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setBorderEffectRadius(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setBorderEffectRadius(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set border effect thickness', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getBorderEffectThickness();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setBorderEffectThickness(firstRand)
      .then(function() {
        return secondItem.setBorderEffectThickness(secondRand);
      }).then(function() {
        return firstItem.getBorderEffectThickness();
      }).then(function(thickness1) {
        expect(thickness1).toBeTypeOf('number');
        expect(Math.round(thickness1)).toEqual(firstRand);
        return secondItem.getBorderEffectThickness();
      }).then(function(thickness2) {
        expect(thickness2).toBeTypeOf('number');
        expect(Math.round(thickness2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setBorderEffectThickness(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setBorderEffectThickness(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set border effect opacity', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getBorderEffectOpacity();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setBorderEffectOpacity(firstRand)
      .then(function() {
        return secondItem.setBorderEffectOpacity(secondRand);
      }).then(function() {
        return firstItem.getBorderEffectOpacity();
      }).then(function(opacity1) {
        expect(opacity1).toBeTypeOf('number');
        expect(Math.round(opacity1)).toEqual(firstRand);
        return secondItem.getBorderEffectOpacity();
      }).then(function(opacity2) {
        expect(opacity2).toBeTypeOf('number');
        expect(Math.round(opacity2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setBorderEffectOpacity(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setBorderEffectOpacity(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set border effect color', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getBorderEffectColor();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a Color object', function(done) {
      var randomColorKey = randomColor();
      var colorObj = XJS.Color.fromRGBString(randomColorKey);

      firstItem.setBorderEffectColor(randomColorKey)
      .then(function() {
        done.fail('Invalid type was accepted');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setBorderEffectColor(colorObj)
      }).then(function() {
      	return firstItem.getBorderEffectColor();
      }).then(function(color) {
        expect(color.getRgb()).toEqual(color.getRgb());
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect color', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectColor();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a Color object', function(done) {
      var randomColorKey = randomColor();
      var colorObj = XJS.Color.fromRGBString(randomColorKey);

      firstItem.setShadowEffectColor(randomColorKey)
      .then(function() {
        done.fail('Invalid type was accepted');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectColor(colorObj)
      }).then(function() {
      	return firstItem.getShadowEffectColor();
      }).then(function(color) {
        expect(color.getRgb()).toEqual(color.getRgb());
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect thickness', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectThickness();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setShadowEffectThickness(firstRand)
      .then(function() {
        return secondItem.setShadowEffectThickness(secondRand);
      }).then(function() {
        return firstItem.getShadowEffectThickness();
      }).then(function(thickness1) {
        expect(thickness1).toBeTypeOf('number');
        expect(Math.round(thickness1)).toEqual(firstRand);
        return secondItem.getShadowEffectThickness();
      }).then(function(thickness2) {
        expect(thickness2).toBeTypeOf('number');
        expect(Math.round(thickness2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setShadowEffectThickness(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectThickness(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect blur', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectBlur();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setShadowEffectBlur(firstRand)
      .then(function() {
        return secondItem.setShadowEffectBlur(secondRand);
      }).then(function() {
        return firstItem.getShadowEffectBlur();
      }).then(function(blur1) {
        expect(blur1).toBeTypeOf('number');
        expect(Math.round(blur1)).toEqual(firstRand);
        return secondItem.getShadowEffectBlur();
      }).then(function(blur2) {
        expect(blur2).toBeTypeOf('number');
        expect(Math.round(blur2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setShadowEffectBlur(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectBlur(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect opacity', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectOpacity();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setShadowEffectOpacity(firstRand)
      .then(function() {
        return secondItem.setShadowEffectOpacity(secondRand);
      }).then(function() {
        return firstItem.getShadowEffectOpacity();
      }).then(function(opacity1) {
        expect(opacity1).toBeTypeOf('number');
        expect(Math.round(opacity1)).toEqual(firstRand);
        return secondItem.getShadowEffectOpacity();
      }).then(function(opacity2) {
        expect(opacity2).toBeTypeOf('number');
        expect(Math.round(opacity2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setShadowEffectOpacity(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectOpacity(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect x offset', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectOffsetX();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setShadowEffectOffsetX(firstRand)
      .then(function() {
        return secondItem.setShadowEffectOffsetX(secondRand);
      }).then(function() {
        return firstItem.getShadowEffectOffsetX();
      }).then(function(offset1) {
        expect(offset1).toBeTypeOf('number');
        expect(Math.round(offset1)).toEqual(firstRand);
        return secondItem.getShadowEffectOffsetX();
      }).then(function(offset2) {
        expect(offset2).toBeTypeOf('number');
        expect(Math.round(offset2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setShadowEffectOffsetX(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectOffsetX(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set shadow effect y offset', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getShadowEffectOffsetY();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a number', function(done) {
      var firstRand = randomInt(0,100);
      var secondRand = randomInt(0,100);

      firstItem.setShadowEffectOffsetY(firstRand)
      .then(function() {
        return secondItem.setShadowEffectOffsetY(secondRand);
      }).then(function() {
        return firstItem.getShadowEffectOffsetY();
      }).then(function(offset1) {
        expect(offset1).toBeTypeOf('number');
        expect(Math.round(offset1)).toEqual(firstRand);
        return secondItem.getShadowEffectOffsetY();
      }).then(function(offset2) {
        expect(offset2).toBeTypeOf('number');
        expect(Math.round(offset2)).toEqual(secondRand);
        done();
      })
    });

    it ('which rejects for invalid parameters', function(done) {
    	var randomString = randomWord(5);
    	var randomNumber = randomSignMultiplier() * randomInt(101, 1000);

      firstItem.setShadowEffectOffsetY(randomString)
      .then(function() {
        done.fail('Invalid type was accepted (string)');
      }).catch(function(err) {
      	expect(err).toEqual(jasmine.any(Error));
        return firstItem.setShadowEffectOffsetY(randomNumber)
      }).then(function() {
      	done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
  });

  describe('should be able to get and set file mask', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.getFileMask();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a string', function(done) {
      var firstString = randomWord(10);
      var secondString = randomWord(15);

      firstItem.setFileMask(firstString)
      .then(function() {
        return secondItem.setFileMask(secondString);
      }).then(function() {
        return firstItem.getFileMask();
      }).then(function(fileMask1) {
        expect(fileMask1).toBeTypeOf('string');
        expect(fileMask1).toEqual(firstString);
        return secondItem.getFileMask();
      }).then(function(fileMask2) {
        expect(fileMask2).toBeTypeOf('string');
        expect(fileMask2).toEqual(secondString)
        done();
      });
    });
  })

	describe('should be able to get and set whether file masking guide is visible', function() {
    it ('through a promise', function(done) {
      var promise = firstItem.isFileMaskingGuideVisible()
      .then().catch(err => {});
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a boolean', function(done) {
      var keyingType = [
        XJS.MaskEffect.NONE,
        XJS.MaskEffect.SHAPE,
        XJS.MaskEffect.FILE_BIND_TO_SOURCE,
        XJS.MaskEffect.FILE_BIND_TO_STAGE
      ];

      var firstRand = keyingType[randomInt(2,3)];
      var secondRand = keyingType[randomInt(2,3)];
      var firstRandBool = randomBoolean();
      var secondRandBool = randomBoolean();

      firstItem.setMaskEffect(firstRand)
      .then(function() {
        return secondItem.setMaskEffect(secondRand);
      }).then(function() {
        return firstItem.showFileMaskingGuide(firstRandBool);
      }).then(function() {
      	return secondItem.showFileMaskingGuide(secondRandBool);
      }).then(function() {
      	return firstItem.isFileMaskingGuideVisible();
    	}).then(function(isVisible1) {
        expect(isVisible1).toBeTypeOf('boolean');
        expect(isVisible1).toEqual(firstRandBool);
        return secondItem.isFileMaskingGuideVisible();
      }).then(function(isVisible2) {
        expect(isVisible2).toBeTypeOf('boolean');
        expect(isVisible2).toEqual(secondRandBool);
        done();
      })
    });

    it ('which rejects if file masking is not enabled', function(done) {
      var keyingType = [
        XJS.MaskEffect.NONE,
        XJS.MaskEffect.SHAPE,
        XJS.MaskEffect.FILE_BIND_TO_SOURCE,
        XJS.MaskEffect.FILE_BIND_TO_STAGE
      ];

      var firstRand = keyingType[randomInt(0,1)];
      var firstRandBool = randomBoolean();

      firstItem.setMaskEffect(firstRand)
      .then(function() {
        return firstItem.showFileMaskingGuide(firstRandBool);
    	}).then(function() {
      	done.fail('This should reject if file masking is not enabled');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    });
	})

  describe('should be able to get and set filter effect', function() {
    var filterKeys = Object.keys(Filter._filterMap);
    var getRandomFilterObj = function () {
    	var randomFilter = filterKeys[Math.floor(Math.random()*filterKeys.length)];
    	return Filter[randomFilter];
    }

    it ('through a promise', function(done) {
      var promise = firstItem.getFilter();
      expect(promise).toBeInstanceOf(Promise);
      done();
    });

    it ('as a filter object', function(done) {
    	var randFilter1 = getRandomFilterObj();
    	var randFilter2 = getRandomFilterObj();

    	firstItem.setFilter(randFilter1)
    	.then(function() {
    		return secondItem.setFilter(randFilter2);
    	}).then(function() {
    		return firstItem.getFilter();
    	}).then(function(filter1) {
    		expect(filter1.toString()).toEqual(randFilter1.toString());
    		return secondItem.getFilter();
    	}).then(function(filter2) {
    		expect(filter2.toString()).toEqual(randFilter2.toString());
    		done();
    	})
    })

    it ('as a filter string', function(done) {
    	var randFilter1 = getRandomFilterObj();
    	var randFilter2 = getRandomFilterObj();
    	var randomString = randomWord(20);

    	firstItem.setFilter(randFilter1.toString())
    	.then(function() {
    		return secondItem.setFilter(randFilter2.toString());
    	}).then(function() {
    		return firstItem.getFilter();
    	}).then(function(filter1) {
    		expect(filter1.toString()).toEqual(randFilter1.toString());
    		return secondItem.getFilter();
    	}).then(function(filter2) {
    		expect(filter2.toString()).toEqual(randFilter2.toString());
    		return firstItem.setFilter(randomString);
    	}).then(function() {
				done.fail('Invalid value was accepted');
      }).catch(function(err) {
        expect(err).toEqual(jasmine.any(Error));
        done();
      })
    })

    it ('which can be removed and can get filter config', function(done) {
    	var intensityValue = randomInt(1);
    	firstItem.setFilter('cool', { intensity : intensityValue })
    	.then(function() {
    		return firstItem.getFilter();
    	}).then(function(filter) {
    		expect(filter.toString()).toEqual('cool');
    		return firstItem.getFilterConfig();
    	}).then(function(configObj) {
    		expect(configObj).toBeTypeOf('object');
    		expect(Math.round(configObj['intensity'])).toEqual(intensityValue);
    		return firstItem.removeFilter()
    	}).then(function() {
    		return firstItem.getFilter();
    	}).then(function(filter) {
    		expect(filter.toString()).toEqual(Filter.NONE.toString());
    		done();
    	})
    })
  })
});
