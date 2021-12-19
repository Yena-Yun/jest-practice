import Account from './Account';
import { render } from '@testing-library/react';

it('matches snapshot', () => {
	const utils = render(<Account name="셰릴아리" mbti="ISTP" />);
	expect(utils.container).toMatchSnapshot();
})

it('shows the props correctly', () => {
	const utils = render(<Account name="셰릴아리" mbti="ISTP" />);
	utils.getByText('셰릴아리');
	utils.getByText('ISTP');
})