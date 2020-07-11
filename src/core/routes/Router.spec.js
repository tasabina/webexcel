import {Router} from './Router';
import {Page} from '../Page';

class Dashboard extends Page {
    getRoot() {
        const root = document.createElement('div');
        root.innerHTML = 'dashboard';
        return root;
    }
};
class Excel extends Page {};

describe('Router', () => {
    let router;
    let $root;

    beforeEach(() => {
        $root = document.createElement('div');
        router = new Router($root, {
            dashboard: Dashboard,
            excel: Excel,
        })
    });

    test('should be defined', () => {
        expect(router).toBeDefined()
    });

    test('should render Dashboard Page', () => {
        router.changePageHandler();

        expect($root.innerHTML).toBe('<div>dashboard</div>')
    })

})