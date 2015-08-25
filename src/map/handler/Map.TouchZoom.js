/*
 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
 */

L.Map.mergeOptions({
	touchZoom: L.Browser.touch && !L.Browser.android23
});

L.Map.TouchZoom = L.Handler.extend({
	addHooks: function () {
		this._map.touchGestures.enable();
		this._map.touchGestures.zoom = true;
	},

	removeHooks: function () {
		this._map.touchGestures.zoom = false;
	}
});

L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);
