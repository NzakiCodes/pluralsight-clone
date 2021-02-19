import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        colors: {
            main: string;
            primary: string;
            secondary: string;
            text:{
                primary: string;
                main:string;
            }
        }
    }
}