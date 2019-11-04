//camelCasify string
function camelCasify(str){
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default camelCasify;