import * as sapper from '@sapper/app';
import '../node_modules/nprogress/nprogress.css'

sapper.start({
	target: document.querySelector('#sapper')
});