import { render } from '@testing-library/react';

import Dialog190 from './dialog190';

describe('Dialog190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog190 />);
    expect(baseElement).toBeTruthy();
  });
});
