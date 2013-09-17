/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x61;',
			'icon-image' : '&#x62;',
			'icon-qrcode' : '&#x64;',
			'icon-pushpin' : '&#x66;',
			'icon-cog' : '&#x68;',
			'icon-remove' : '&#x69;',
			'icon-numbered-list' : '&#x6a;',
			'icon-link' : '&#x6b;',
			'icon-arrow-right' : '&#x6d;',
			'icon-arrow-left' : '&#x6e;',
			'icon-github' : '&#x71;',
			'icon-github-2' : '&#x70;',
			'icon-chrome' : '&#x72;',
			'icon-firefox' : '&#x73;',
			'icon-IE' : '&#x74;',
			'icon-opera' : '&#x75;',
			'icon-safari' : '&#x76;',
			'icon-switch' : '&#x77;',
			'icon-search' : '&#x78;',
			'icon-feed' : '&#x7a;',
			'icon-number' : '&#x31;',
			'icon-number-2' : '&#x32;',
			'icon-number-3' : '&#x33;',
			'icon-number-4' : '&#x34;',
			'icon-number-5' : '&#x35;',
			'icon-number-6' : '&#x36;',
			'icon-number-7' : '&#x37;',
			'icon-number-8' : '&#x38;',
			'icon-number-9' : '&#x39;',
			'icon-number-10' : '&#x30;',
			'icon-selectionadd' : '&#x2b;',
			'icon-loop' : '&#x63;',
			'icon-user-add' : '&#x65;',
			'icon-sanjit-saha-afro' : '&#x6c;',
			'icon-businesscard2' : '&#x6f;',
			'icon-envelope' : '&#x67;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};