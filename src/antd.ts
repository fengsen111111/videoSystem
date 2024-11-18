import {
    Button,
    Row,
    Col,
    
} from 'ant-design-vue'

const plugins = [
    Button,
    Row,
    Col,
    
];

export const setupAntd = (app: any, options = {}) => {
    plugins.forEach((plugin) => {
        app.use(plugin);
    });
};
