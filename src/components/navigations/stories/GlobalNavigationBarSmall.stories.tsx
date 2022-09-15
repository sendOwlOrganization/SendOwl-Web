import GlobalNavigationBarSmall from '@components/navigations/global-navigation-bar-small';
import { AnimatedGradientBackground, ResetStorybookBodyStyle } from '@components/storybook-helpers';
import BalanceGameWidget from '@components/widgets/balance-game-widget';
import { Grid } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BALANCE_GAMES_URL, COMMUNITY_URL, INSIGHTS_URL, NOTICES_URL, SERVICE_CENTER_URL } from '@tools/url';

export default {
    title: 'components/navigations/GlobalNavigationBarSmall',
    component: GlobalNavigationBarSmall,
    argTypes: {
        currentUrl: {
            options: [
                '/',
                BALANCE_GAMES_URL,
                INSIGHTS_URL,
                SERVICE_CENTER_URL,
                NOTICES_URL,
                COMMUNITY_URL,
            ],
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof GlobalNavigationBarSmall>;

const Template: ComponentStory<typeof GlobalNavigationBarSmall> = (args) => (
    <>
        <ResetStorybookBodyStyle />
        <GlobalNavigationBarSmall {...args} />
    </>
);

const TemplateWithContent: ComponentStory<typeof GlobalNavigationBarSmall> = (args) => (
    <>
        <ResetStorybookBodyStyle />
        <AnimatedGradientBackground>
            <GlobalNavigationBarSmall {...args} />
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
    currentUrl: '/boards',
};

export const NotLogged = Template.bind({});
NotLogged.args = {
    isLogged: false,
    currentUrl: '/boards',
};

export const BalanceGamePage = Template.bind({});
BalanceGamePage.args = {
    isLogged: false,
    currentUrl: BALANCE_GAMES_URL,
};

export const ExampleWithContent = TemplateWithContent.bind({});
ExampleWithContent.args = {
    isLogged: true,
    currentUrl: '/boards',
};