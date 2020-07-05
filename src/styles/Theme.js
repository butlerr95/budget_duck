const lightTheme = {
    primary: '#3867d6',
    secondary: '#6a92ef',
    graph_primary: '#3867d6',
    graph_secondary: '#6a92ef',
    background: '#fbfbfc',
    text_normal: '#2d3843',
    text_heading: '#fff',
    hover: 'rgb(0,0,0,0.1)'
};

const darkTheme = {
    primary: '#222222',
    secondary: '#cd6133',
    graph_primary: '#cd6133',
    graph_secondary: '#ff793f',
    background: '#1b1b1b',
    text_normal: '#d6d6d6',
    text_heading: '#e7e7e7',
    hover: 'rgb(255,255,255,0.1)'
};

const setTheme = (theme) => {
    const style = document.documentElement.style;

    style.setProperty('--primary-color', theme.primary);
    style.setProperty('--secondary-color', theme.secondary);
    style.setProperty('--graph-color-primary', theme.graph_primary);
    style.setProperty('--graph-color-secondary', theme.graph_secondary);
    style.setProperty('--background-color', theme.background);
    style.setProperty('--text-color-normal', theme.text_normal);
    style.setProperty('--text-color-heading', theme.text_heading);
    style.setProperty('--hover-color', theme.hover);
};

export {
    lightTheme,
    darkTheme,
    setTheme
}