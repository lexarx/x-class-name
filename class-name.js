var classSeparatorRegExp = / +/;
var classListSupported = 'classList' in document.documentElement;

/**
 * @param {Element} element
 * @param {String} className
 */
var addClassName = classListSupported ?
	function(element, className) {
		element.classList.add(className);
	} :
	function(element, className) {
		var newClassName = element.className;
		var length = newClassName.length;
		if (length > 0 && newClassName.charAt(length - 1) !== ' ') {
			newClassName += ' ';
		}
		newClassName += className;
		element.className = ' ' + newClassName;
	};

/**
 * @param {Element} element
 * @param {String} className
 */
var removeClassName = classListSupported ?
	function(element, className) {
		element.classList.remove(className);
	} :
	function(element, className) {
		var classes = element.className.split(classSeparatorRegExp);
		for (var i = classes.length - 1; i >= 0; i--) {
			var part = classes[i];
			if (part === className || part === '') {
				classes.splice(i, 1);
			}
		}
		element.className = classes.join(' ');
	};

function setClassName(element, className, condition) {
	if (condition) {
		addClassName(element, className);
	} else {
		removeClassName(element, className);
	}
}

module.exports = setClassName;