
const { spawnSync } = require('child_process');

const elevationinfo = {};
module.exports = elevationinfo;

elevationinfo.isRoot = function()
{
	if(process.getuid && process.getuid() == 0)
	{
		return true;
	}
	return false;
}


elevationinfo.isRootAsync = async function()
{
	return elevationinfo.isRoot();
}

elevationinfo.isAdmin = function()
{
	if(process.platform !== 'win32')
	{
		return false;
	}
	var result = spawnSync('openfiles', []);
	if(result.status !== 0)
	{
		return false;
	}
	return true;
}

elevationinfo.isAdminAsync = async function()
{
	return elevationinfo.isAdmin();
}

elevationinfo.isElevated = function()
{
	if(process.platform === 'win32')
	{
		return elevationinfo.isAdmin();
	}
	else
	{
		return elevationinfo.isRoot();
	}
}

elevationinfo.isElevatedAsync = async function()
{
	return elevationinfo.isElevated();
}
