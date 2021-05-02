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
        spacing:{
            ['1s']:string;
            ['2s']:string;
            ['3s']:string;
            ['4s']:string;
            ['5s']:string;
            ['6s']:string;
            ['7s']:string;
            ['8s']:string;
        }
    }
}