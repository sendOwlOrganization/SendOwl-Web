import GlobalNavigationBar from '@components/navigations/global-navigation-bar';
import { AnimatedGradientBackground, ResetStorybookBodyStyle } from '@components/storybook-helpers';
import BalanceGameWidget from '@components/widgets/balance-game-widget';
import { Grid } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/navigations/GlobalNavigationBar',
    component: GlobalNavigationBar,
} as ComponentMeta<typeof GlobalNavigationBar>;

const Template: ComponentStory<typeof GlobalNavigationBar> = (args) => (
    <>
        <ResetStorybookBodyStyle />
        <GlobalNavigationBar {...args} />
    </>
);

const TemplateWithContent: ComponentStory<typeof GlobalNavigationBar> = (args) => (
    <>
        <ResetStorybookBodyStyle />
        <AnimatedGradientBackground>
            <GlobalNavigationBar {...args} />
            <Grid marginTop={2}
                  marginLeft={'auto'}
                  marginRight={'auto'}
                  maxWidth={'1000px'}
                  container
                  spacing={2}>
                {
                    [1, 2, 3, 6, 5, 4, 8, 9, 7, 11, 10, 12, 14, 15, 13].map(i => (
                        <Grid item xs={3 + i % 3} key={i}>
                            <BalanceGameWidget voteId={1} title={'test content'}
                                               choices={[
                                                   {
                                                       id: 1,
                                                       text: 'test content',
                                                       voteCount: 1,
                                                   },
                                                   {
                                                       id: 2,
                                                       text: 'test content',
                                                       voteCount: 2,
                                                   },
                                               ]} />
                        </Grid>
                    ))
                }
            </Grid>
        </AnimatedGradientBackground>
    </>
);

export const Logged = Template.bind({});
Logged.args = {
    isLogged: true,
};

export const NotLogged = Template.bind({});
NotLogged.args = {
    isLogged: false,
};

export const ExampleWithContent = TemplateWithContent.bind({});
ExampleWithContent.args = {
    isLogged: true,
};