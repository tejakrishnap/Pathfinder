import {
    createBaseThemeOptions,
    createUnifiedTheme,
    palettes,
  } from '@backstage/theme';
  
  export const pathfinderTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
      palette: palettes.light,
    }),
    components: {
      BackstageSidebar: {
        styleOverrides: {
          drawer: {
            // background: '#4A154B',
          }
        }
      }
    },
  });