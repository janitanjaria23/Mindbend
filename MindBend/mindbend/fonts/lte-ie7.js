/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-stats' : '&#x21;',
			'icon-bug' : '&#x22;',
			'icon-earth' : '&#x23;',
			'icon-gift' : '&#x24;',
			'icon-loading' : '&#x25;',
			'icon-rocket' : '&#x26;',
			'icon-facebook' : '&#x27;',
			'icon-youtube' : '&#x28;',
			'icon-file-pdf' : '&#x29;',
			'icon-file-word' : '&#x2a;',
			'icon-pencil' : '&#xe046;',
			'icon-office' : '&#xe000;',
			'icon-paper-plane' : '&#xe001;',
			'icon-bars' : '&#xe021;',
			'icon-atom' : '&#xe002;',
			'icon-home' : '&#xe003;',
			'icon-light-bulb' : '&#xe004;',
			'icon-microphone' : '&#xe005;',
			'icon-tv' : '&#xe006;',
			'icon-users' : '&#xe029;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};