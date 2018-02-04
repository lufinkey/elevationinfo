# elevationinfo

Provides methods to check if user is running as root (on *Linux* and *Mac*), or admin (on *Windows*).

## Install

```bash
npm install --save elevationinfo
```

## API

```javascript
const elevationinfo = require('elevationinfo');
```

* **elevationinfo.isRoot**
	(*Linux*/*Mac*) Checks if the process is running as the root user.
	
	* **returns** *true* if root, or *false* if not root.


* **elevationinfo.isRootAsync**
	(*Linux*/*Mac*) Checks if the process is running as the root user, asynchronously.
	
	* **returns** a Promise that resolves to a *true* if root or *false* if not root.


* **elevationinfo.isAdmin**
	(*Windows*) Checks if the process is running with administrative privileges.
	
	* **returns** *true* if the process has admin privileges, or *false* if it does not.


* **elevationinfo.isAdminAsync**
	(*Windows*) Checks if the process is running with administrative privileges, asynchronously.
	
	* **returns** a Promise that resolves to *true* if the process has admin privileges, or *false* if it does not.


* **elevationinfo.isElevated**
	Checks if the process is running with elevated privileges.
	
	* **returns** same as **isRoot** on Linux and Mac, and **isAdmin** on Windows

* **elevationinfo.isElevatedAsync**
	Checks if the process is running with elevated privileges, asynchronously.
	
	* **returns** same as **isRootAsync** on Linux and Mac, and **isAdminSync** on Window
