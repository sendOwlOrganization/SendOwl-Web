import EmptyLayout from '@components/layout/EmptyLayout';
import SignupForm from '@components/signup/SignupForm';

interface CompletePageProps {
}

const CompletePage = ({}: CompletePageProps) => {
    return (
        <>
            <SignupForm />
        </>
    );
};

CompletePage.getLayout = EmptyLayout;

export default CompletePage;